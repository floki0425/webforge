import { useState } from 'react'

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-2xl border border-[#E7E1D6] bg-white p-6 shadow-sm hover:border-[#C8A96A] hover:shadow-md transition-all">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left text-[#080808]"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-base">{question}</span>
        <span className="text-2xl text-[#C8A96A]">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="mt-4 text-[#667085] leading-7">{answer}</p>}
    </div>
  )
}
