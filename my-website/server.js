import express from 'express'
import dotenv from 'dotenv'
import { getLocalSubmissions, submitContactForm } from './src/lib/contactSubmission.js'

dotenv.config({ path: '.env.local' })

const app = express()
const PORT = 3001

app.use(express.json())

console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY)
console.log('SUPABASE_URL exists:', !!process.env.SUPABASE_URL)
console.log('SUPABASE_SERVICE_ROLE_KEY exists:', !!process.env.SUPABASE_SERVICE_ROLE_KEY)
console.log('CONTACT_TO_EMAIL exists:', !!process.env.CONTACT_TO_EMAIL)
console.log('CONTACT_FROM_EMAIL exists:', !!process.env.CONTACT_FROM_EMAIL)

app.post('/api/contact', async (req, res) => {
  try {
    console.log('Received contact form:', req.body)
    const result = await submitContactForm(req.body)

    return res.status(result.status).json(result.body)
  } catch (error) {
    console.error('Contact API error:', error)

    return res.status(500).json({
      success: false,
      message: error.message || 'Server error. Please try again.'
    })
  }
})

app.get('/api/contact', (req, res) => {
  return res.status(200).json({
    success: true,
    submissions: getLocalSubmissions()
  })
})

app.listen(PORT, () => {
  console.log(`Contact API server running on http://localhost:${PORT}`)
  console.log('POST /api/contact - Submit contact form')
  console.log('GET /api/contact - View submissions')
})
