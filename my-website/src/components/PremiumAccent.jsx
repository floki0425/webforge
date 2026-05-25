export default function PremiumAccent() {
  const highlights = [
    {
      id: 1,
      title: 'Refined Strategy',
      description: 'Every project begins with clarity, positioning, and a conversion-led digital strategy.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <path d="M12 3v18" />
          <path d="M3 12h18" />
          <path d="M7 7l10 10" />
          <path d="M17 7L7 17" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Elegant Systems',
      description: 'Premium funnels and websites that feel calm, polished, and built for growth.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
          <path d="M9 7v10" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Premium Performance',
      description: 'Fast, steady, and dependable experiences that reinforce trust and drive action.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <path d="M4 16l4-4 4 4 8-8" />
          <path d="M4 12h4" />
          <path d="M12 12h8" />
        </svg>
      ),
    },
  ]

  return (
    <section id="premium" className="bg-[#080808] px-6 py-20 text-[#F7F3EC] lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 border-b border-white/10 pb-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.32em] text-[#C8A96A]">
              Studio Signature
            </p>
            <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl">
              A premium rhythm built for confidence and conversion.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/52 lg:justify-self-end">
            A dark accent section that reinforces trust while keeping the
            experience calm, luxurious, and highly usable.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="group bg-[#080808] p-8 transition-colors hover:bg-[#101010]"
            >
              <div className="mb-10 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center border border-white/10 text-[#C8A96A] transition group-hover:border-[#C8A96A]/50">
                  {item.icon}
                </div>
                <span className="text-xs font-black text-[#C8A96A]/50">
                  0{item.id}
                </span>
              </div>

              <h3 className="text-2xl font-black tracking-[-0.04em] text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/52">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
