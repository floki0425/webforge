import { submitContactForm } from '../src/lib/contactSubmission.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed.'
    })
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
    const result = await submitContactForm(body)

    return res.status(result.status).json(result.body)
  } catch (error) {
    console.error('Contact API error:', error)

    return res.status(500).json({
      success: false,
      message: error.message || 'Server error. Please try again.'
    })
  }
}
