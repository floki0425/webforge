export default function PremiumAccent() {
  const highlights = [
    {
      id: 1,
      title: 'Refined Strategy',
      description: 'Every project begins with clarity, positioning, and a conversion-led digital strategy.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
          <path d="M12 3v18" />
          <path d="M3 12h18" />
          <path d="M7 7l10 10" />
          <path d="M17 7L7 17" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Elegant Systems',
      description: 'Premium funnels and websites that feel calm, polished, and built for growth.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
          <path d="M9 7v10" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Premium Performance',
      description: 'Fast, steady, and dependable experiences that reinforce trust and drive action.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
          <path d="M4 16l4-4 4 4 8-8" />
          <path d="M4 12h4" />
          <path d="M12 12h8" />
        </svg>
      )
    }
  ]

  return (
    <section id="premium" className="py-20 bg-[#080808] text-[#F7F3EC]">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#C8A96A] bg-[#101624] px-4 py-2 text-xs uppercase tracking-[.3em] text-[#C8A96A]">
            studio signature
          </div>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#F7F3EC] tracking-tight">
            A premium rhythm built for confidence and conversion.
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#B8C0CC]">
            A dark accent section that reinforces trust while keeping the experience calm, luxurious, and highly usable.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {highlights.map(item => (
            <div key={item.id} className="rounded-3xl border border-[#1F2730] bg-[#101624] p-8 shadow-lg shadow-black/10 transition-all duration-200 hover:-translate-y-1 hover:border-[#C8A96A]">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl border border-[#333a48] bg-[#080808] text-[#C8A96A]">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#F7F3EC] mb-3">{item.title}</h3>
              <p className="text-[#B8C0CC] leading-7">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

