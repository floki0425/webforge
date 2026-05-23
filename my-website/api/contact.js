import process from 'node:process'
import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'

const resend = new Resend(process.env.RESEND_API_KEY)

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed.'
    })
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body

    const { name, email, company, need, details } = body

    if (!name || !email || !need || !details) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields.'
      })
    }

    const { data, error: supabaseError } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name,
          email,
          company: company || '',
          need,
          details
        }
      ])
      .select()

    if (supabaseError) {
      console.error('Supabase error:', supabaseError)

      return res.status(500).json({
        success: false,
        message: supabaseError.message
      })
    }

    const { error: resendError } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      subject: `New Webforge Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Need:</strong> ${need}</p>
        <p><strong>Details:</strong></p>
        <p>${details}</p>
      `
    })

    if (resendError) {
      console.error('Resend error:', resendError)

      return res.status(200).json({
        success: true,
        message: 'Message saved, but email notification failed.',
        submission: data?.[0]
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully.',
      submission: data?.[0]
    })
  } catch (error) {
    console.error('Contact API error:', error)

    return res.status(500).json({
      success: false,
      message: error.message || 'Server error. Please try again.'
    })
  }
}