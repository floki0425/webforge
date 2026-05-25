import process from 'node:process'
import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'

const localSubmissions = []

function getEnv() {
  return {
    resendApiKey: process.env.RESEND_API_KEY,
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    contactToEmail: process.env.CONTACT_TO_EMAIL,
    contactFromEmail: process.env.CONTACT_FROM_EMAIL,
  }
}

function normalizeSubmission(body = {}) {
  return {
    name: String(body.name || '').trim(),
    email: String(body.email || '').trim(),
    company: String(body.company || '').trim(),
    need: String(body.need || '').trim(),
    details: String(body.details || '').trim(),
  }
}

function validateSubmission(submission) {
  const missingFields = ['name', 'email', 'need', 'details'].filter(
    (field) => !submission[field],
  )

  if (missingFields.length > 0) {
    return `Missing required fields: ${missingFields.join(', ')}.`
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email)) {
    return 'Please enter a valid email address.'
  }

  return ''
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

async function saveToSupabase(submission, env) {
  if (!env.supabaseUrl || !env.supabaseServiceRoleKey) {
    return null
  }

  const supabase = createClient(env.supabaseUrl, env.supabaseServiceRoleKey)
  const { data, error } = await supabase
    .from('contact_submissions')
    .insert([
      {
        name: submission.name,
        email: submission.email,
        company: submission.company,
        need: submission.need,
        details: submission.details,
      },
    ])
    .select()

  if (error) {
    throw new Error(error.message)
  }

  return data?.[0] || null
}

async function sendEmail(submission, savedSubmission, env) {
  if (!env.resendApiKey || !env.contactFromEmail || !env.contactToEmail) {
    return false
  }

  const resend = new Resend(env.resendApiKey)
  const { error } = await resend.emails.send({
    from: env.contactFromEmail,
    to: env.contactToEmail,
    subject: `New Webforge Inquiry from ${submission.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(submission.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(submission.email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(submission.company || 'Not provided')}</p>
      <p><strong>Need:</strong> ${escapeHtml(submission.need)}</p>
      <p><strong>Details:</strong></p>
      <p>${escapeHtml(submission.details)}</p>
      ${
        savedSubmission?.id
          ? `<p><strong>Submission ID:</strong> ${escapeHtml(String(savedSubmission.id))}</p>`
          : ''
      }
    `,
  })

  if (error) {
    throw new Error(error.message)
  }

  return true
}

export async function submitContactForm(body) {
  const env = getEnv()
  const submission = normalizeSubmission(body)
  const validationError = validateSubmission(submission)

  if (validationError) {
    return {
      status: 400,
      body: {
        success: false,
        message: validationError,
      },
    }
  }

  let savedSubmission
  let storage
  let emailSent

  try {
    savedSubmission = await saveToSupabase(submission, env)
    storage = savedSubmission ? 'supabase' : 'local'
  } catch (error) {
    return {
      status: 500,
      body: {
        success: false,
        message: `Could not save your message: ${error.message}`,
      },
    }
  }

  if (!savedSubmission) {
    savedSubmission = {
      id: Date.now(),
      ...submission,
      created_at: new Date().toISOString(),
    }
    localSubmissions.unshift(savedSubmission)
  }

  try {
    emailSent = await sendEmail(submission, savedSubmission, env)
  } catch (error) {
    return {
      status: 200,
      body: {
        success: true,
        message:
          'Your message was saved, but the email notification could not be sent.',
        submission: savedSubmission,
        storage,
        emailSent: false,
        warning: error.message,
      },
    }
  }

  return {
    status: 200,
    body: {
      success: true,
      message: 'Thanks! Your message has been received.',
      submission: savedSubmission,
      storage,
      emailSent,
    },
  }
}

export function getLocalSubmissions() {
  return localSubmissions
}
