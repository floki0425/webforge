import { useState } from 'react'

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-[#F7F3EC] transition-colors hover:bg-white">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left text-[#080808] sm:px-8"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-lg font-black tracking-[-0.03em]">{question}</span>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#DED6C8] text-xl font-light text-[#C8A96A]">
          {open ? '-' : '+'}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-7 sm:px-8">
          <p className="max-w-3xl border-t border-[#DED6C8] pt-5 text-sm leading-7 text-[#080808]/58">
            {answer}
          </p>
        </div>
      )}
    </div>
  )
}
