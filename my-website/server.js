import express from 'express'
import dotenv from 'dotenv'
import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'

dotenv.config({ path: '.env.local' })

const app = express()
const PORT = 3001

app.use(express.json())

console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY)
console.log('SUPABASE_URL exists:', !!process.env.SUPABASE_URL)
console.log('SUPABASE_SERVICE_ROLE_KEY exists:', !!process.env.SUPABASE_SERVICE_ROLE_KEY)
console.log('CONTACT_TO_EMAIL exists:', !!process.env.CONTACT_TO_EMAIL)
console.log('CONTACT_FROM_EMAIL exists:', !!process.env.CONTACT_FROM_EMAIL)

const resend = new Resend(process.env.RESEND_API_KEY)

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

app.post('/api/contact', async (req, res) => {
  try {
    console.log('Received contact form:', req.body)

    const { name, email, company, need, details } = req.body

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

    console.log('Saved to Supabase:', data)

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
        message: 'Message saved, but email notification failed.'
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully.'
    })
  } catch (error) {
    console.error('Contact API error:', error)

    return res.status(500).json({
      success: false,
      message: error.message || 'Server error. Please try again.'
    })
  }
})

app.get('/api/contact', async (req, res) => {
  const { data, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }

  return res.status(200).json({
    success: true,
    submissions: data
  })
})

app.listen(PORT, () => {
  console.log(`Contact API server running on http://localhost:${PORT}`)
  console.log('POST /api/contact - Submit contact form')
  console.log('GET /api/contact - View submissions')
})