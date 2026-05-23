import { useState } from 'react'

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left text-black"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-base">{question}</span>
        <span className="text-2xl">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="mt-4 text-gray-600 leading-7">{answer}</p>}
    </div>
  )
}
