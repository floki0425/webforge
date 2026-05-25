export default function WhyWorkWithMe() {
  const items = [
    { id: 1, title: 'Focused on Results', text: 'Every site is built to turn visitors into customers.' },
    { id: 2, title: 'Clean & Modern Design', text: 'Minimalist visual systems that communicate clearly.' },
    { id: 3, title: 'Reliable & Transparent', text: 'Clear timelines, honest pricing, and dependable delivery.' },
    { id: 4, title: 'Support After Launch', text: 'Ongoing support to keep your site growing.' }
  ]

  return (
    <section id="why" className="bg-[#F7F3EC] px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 border-b border-[#DED6C8] pb-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.32em] text-[#C8A96A]">
              Why Work With Me
            </p>
            <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-[-0.04em] text-[#080808] sm:text-5xl">
              A build process shaped around outcomes.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[#080808]/55 lg:justify-self-end">
            A partnership built around clarity, performance, and long-term
            growth.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border border-[#DED6C8] bg-[#DED6C8] md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="group bg-[#F7F3EC] p-7 transition-colors hover:bg-white sm:p-8"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="text-sm font-black text-[#C8A96A]">
                  0{item.id}
                </span>
                <span className="h-2 w-2 rounded-full bg-[#C8A96A]/45 transition-colors group-hover:bg-[#C8A96A]" />
              </div>

              <h3 className="mb-4 text-2xl font-black leading-tight tracking-[-0.04em] text-[#080808]">
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-[#080808]/58">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
