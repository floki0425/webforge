import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', need: '', details: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(data.message || data.error || 'Submission failed. Please try again.')
      }

      setSuccess(true)
      setForm({ name: '', email: '', company: '', need: '', details: '' })
    } catch (err) {
      setError(err.message || 'Submission failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-[#F7F3EC]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">LET’S TALK</h2>
          <p className="section-subtitle mt-4">Tell me about your project and I’ll reply with a clear plan.</p>
        </div>
        <div className="mx-auto max-w-3xl card">
          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-[#080808]">Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-2xl border border-[#E7E1D6] bg-[#F7F3EC] px-4 py-3 text-[#1F2933] focus:border-[#C8A96A] focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-[#080808]">Email Address</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-2xl border border-[#E7E1D6] bg-[#F7F3EC] px-4 py-3 text-[#1F2933] focus:border-[#C8A96A] focus:outline-none"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-sm font-semibold text-[#080808]">Business / Company Name</span>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-[#E7E1D6] bg-[#F7F3EC] px-4 py-3 text-[#1F2933] focus:border-[#C8A96A] focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-[#080808]">What do you need?</span>
              <input
                type="text"
                name="need"
                value={form.need}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-2xl border border-[#E7E1D6] bg-[#F7F3EC] px-4 py-3 text-[#1F2933] focus:border-[#C8A96A] focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-[#080808]">Project Details</span>
              <textarea
                name="details"
                value={form.details}
                onChange={handleChange}
                rows="5"
                required
                className="mt-2 w-full rounded-2xl border border-[#E7E1D6] bg-[#F7F3EC] px-4 py-3 text-[#1F2933] focus:border-[#C8A96A] focus:outline-none"
              />
            </label>
            <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed">
              {loading ? 'Sending…' : 'Send Message'}
            </button>
            {success && <p className="text-center text-sm text-[#C8A96A]">Thanks! Your message has been sent.</p>}
            {error && <p className="text-center text-sm text-[#B76E42]">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
