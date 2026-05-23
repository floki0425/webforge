import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', need: '', details: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', company: '', need: '', details: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">LET’S TALK</h2>
          <p className="section-subtitle mt-4">Tell me about your project and I’ll reply with a clear plan.</p>
        </div>
        <div className="mx-auto max-w-3xl card">
          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-black">Name</span>
                <input type="text" name="name" value={form.name} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-black focus:outline-none" />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-black">Email Address</span>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-black focus:outline-none" />
              </label>
            </div>
            <label className="block">
              <span className="text-sm font-semibold text-black">Business / Company Name</span>
              <input type="text" name="company" value={form.company} onChange={handleChange} className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-black focus:outline-none" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-black">What do you need?</span>
              <input type="text" name="need" value={form.need} onChange={handleChange} className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-black focus:outline-none" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-black">Project Details</span>
              <textarea name="details" value={form.details} onChange={handleChange} rows="5" className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-black focus:outline-none"></textarea>
            </label>
            <button type="submit" className="btn-primary w-full">Send Message</button>
            {submitted && <p className="text-center text-sm text-green-600">Thanks! Your message has been sent.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
