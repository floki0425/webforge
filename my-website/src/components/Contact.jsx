import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    details: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', projectType: '', details: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>LET'S TALK ABOUT YOUR PROJECT</h2>
        <h3 className="section-subtitle">Ready to Get Started? Fill Out the Form Below</h3>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="text"
            name="company"
            placeholder="Business / Company Name"
            value={formData.company}
            onChange={handleChange}
          />

          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
          >
            <option value="">What do you need?</option>
            <option value="website">Business Website</option>
            <option value="funnel">Sales Funnel</option>
            <option value="ecommerce">E-commerce Store</option>
            <option value="order-system">Order System</option>
            <option value="app">Web Application</option>
            <option value="other">Other</option>
          </select>

          <textarea
            name="details"
            placeholder="Project Details - Tell me about your project, goals, and timeline"
            rows="6"
            value={formData.details}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="btn btn-primary full-width">
            Send Message
          </button>

          {submitted && (
            <div className="form-success">
              ✓ Thanks! I'll get back to you within 24 hours.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
