import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', need: '', details: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

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

      setSuccess(data.message || 'Thanks! Your message has been received.')
      setForm({ name: '', email: '', company: '', need: '', details: '' })
    } catch (err) {
      setError(err.message || 'Submission failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-[#F7F3EC] px-6 py-20 text-[#080808] lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-5 text-[10px] font-black uppercase tracking-[0.42em] text-[#C8A96A]">
            Log_ref_03 // Project_intake
          </p>
          <h2 className="max-w-5xl text-5xl font-black uppercase leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Let's build your system
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="border border-[#E7E1D6] bg-white/70 p-6 shadow-[0_24px_80px_rgba(8,8,8,0.06)] backdrop-blur-sm sm:p-8">
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="text-[9px] font-black uppercase tracking-[0.35em] text-[#080808]">
                    Name_tag
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="mt-3 h-12 w-full border border-[#E7E1D6] bg-white/65 px-4 text-sm text-[#1F2933] outline-none transition placeholder:text-[#1F2933]/55 focus:border-[#C8A96A] focus:bg-white"
                  />
                </label>

                <label className="block">
                  <span className="text-[9px] font-black uppercase tracking-[0.35em] text-[#080808]">
                    Email_comm
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="mt-3 h-12 w-full border border-[#E7E1D6] bg-white/65 px-4 text-sm text-[#1F2933] outline-none transition placeholder:text-[#1F2933]/55 focus:border-[#C8A96A] focus:bg-white"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-[9px] font-black uppercase tracking-[0.35em] text-[#080808]">
                  Org_identity
                </span>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="mt-3 h-12 w-full border border-[#E7E1D6] bg-white/65 px-4 text-sm text-[#1F2933] outline-none transition placeholder:text-[#1F2933]/55 focus:border-[#C8A96A] focus:bg-white"
                />
              </label>

              <label className="block">
                <span className="text-[9px] font-black uppercase tracking-[0.35em] text-[#080808]">
                  Spec_category
                </span>
                <select
                  name="need"
                  value={form.need}
                  onChange={handleChange}
                  required
                  className="mt-3 h-12 w-full border border-[#E7E1D6] bg-[#F3EEE6] px-4 text-sm text-[#080808] outline-none transition focus:border-[#C8A96A] focus:bg-white"
                >
                  <option value="" disabled>
                    What do you need?
                  </option>
                  <option>Starter Website</option>
                  <option>Website Funnel</option>
                  <option>Business Funnel</option>
                  <option>E-commerce Website</option>
                  <option>Order System</option>
                  <option>Custom Web App</option>
                </select>
              </label>

              <label className="block">
                <span className="text-[9px] font-black uppercase tracking-[0.35em] text-[#080808]">
                  System_details
                </span>
                <textarea
                  name="details"
                  value={form.details}
                  onChange={handleChange}
                  rows="6"
                  required
                  placeholder="Project Details..."
                  className="mt-3 w-full border border-[#E7E1D6] bg-[#F3EEE6] px-4 py-4 text-sm text-[#1F2933] outline-none transition placeholder:text-[#1F2933]/55 focus:border-[#C8A96A] focus:bg-white"
                />
              </label>

              <button
                type="submit"
                disabled={loading}
                className="h-12 w-full bg-[#080808] text-xs font-black uppercase tracking-[0.08em] text-white transition hover:bg-[#1C1C1C] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? 'Sending...' : 'Submit Specification'}
              </button>

              {success && (
                <p className="border border-[#C8A96A]/35 bg-[#C8A96A]/10 px-4 py-3 text-center text-sm font-semibold text-[#8F7135]">
                  {success}
                </p>
              )}
              {error && (
                <p className="border border-[#B76E42]/35 bg-[#B76E42]/10 px-4 py-3 text-center text-sm font-semibold text-[#B76E42]">
                  {error}
                </p>
              )}
            </form>
          </div>

          <aside className="grid gap-8">
            <div className="relative border-l border-[#D8CDBB] pl-7">
              {[
                [
                  'Precision_sync_01',
                  'System Audit',
                  'We analyze your current digital footprint and identify conversion leaks in your technical stack.',
                ],
                [
                  'Precision_sync_02',
                  'Forge Blueprint',
                  'A custom architectural plan tailored for maximum performance and editorial visual impact.',
                ],
                [
                  'Precision_sync_03',
                  'Handcrafted Build',
                  'Precision engineering of your digital tool using high-performance modern frameworks.',
                ],
              ].map(([code, title, body]) => (
                <div key={code} className="relative pb-10 last:pb-0">
                  <span className="absolute -left-[34px] top-1 h-3 w-3 rounded-full border border-[#D8CDBB] bg-[#C8A96A]" />
                  <p className="mb-3 text-[9px] font-black uppercase tracking-[0.28em] text-[#C8A96A]">
                    {code}
                  </p>
                  <h3 className="text-2xl font-black tracking-[-0.04em] text-[#080808]">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-[#1F2933]/75">
                    {body}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-[#111827] p-7 text-white shadow-[0_24px_80px_rgba(8,8,8,0.18)]">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.32em] text-[#C8A96A]">
                    Studio_comms
                  </p>
                  <div className="mt-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                      Directlink
                    </p>
                    <a
                      href="mailto:hello@webforge.studio"
                      className="mt-2 block text-lg font-semibold text-white transition hover:text-[#C8A96A]"
                    >
                      forge.est26@gmail.com
                    </a>
                  </div>
                </div>
                <p className="text-[9px] font-black uppercase tracking-[0.32em] text-white/20">
                  Encrypted_log
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
