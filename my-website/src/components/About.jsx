export default function About() {
  return (
    <section id="about" className="bg-[#F7F3EC] px-6 py-20 text-[#080808] lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.32em] text-[#C8A96A]">
              About Joshua
            </p>

            <h2 className="max-w-2xl text-5xl font-black leading-[0.96] tracking-[-0.06em] sm:text-6xl">
              Hi, I'm Joshua.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#080808]/62 sm:text-lg">
              I build websites, funnels, e-commerce stores, and custom systems
              for businesses who want to convert more leads and make online
              selling easier. My work blends clean design with smart technology
              to support growth and reduce friction.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-12 bg-[#C8A96A]" />
              <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#080808]/42">
                Handcrafted digital systems
              </span>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden border border-[#DED6C8] bg-[#DED6C8]">
            <AboutCard
              number="01"
              title="Modern systems"
              text="User-friendly, data-driven platforms for your business operations."
            />
            <AboutCard
              number="02"
              title="Conversion-first"
              text="Landing pages, funnels, and checkout flows designed to convert."
              dark
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutCard({ number, title, text, dark = false }) {
  return (
    <div
      className={`p-8 sm:p-10 ${
        dark ? 'bg-[#080808] text-white' : 'bg-white/65 text-[#080808]'
      }`}
    >
      <div className="mb-12 flex items-center justify-between">
        <span
          className={`text-sm font-black ${
            dark ? 'text-[#C8A96A]' : 'text-[#C8A96A]'
          }`}
        >
          {number}
        </span>
        <span
          className={`h-2 w-2 rounded-full ${
            dark ? 'bg-[#C8A96A]' : 'bg-[#C8A96A]/45'
          }`}
        />
      </div>

      <h3 className="text-3xl font-black tracking-[-0.04em]">{title}</h3>
      <p className={`mt-5 max-w-xl text-sm leading-7 ${dark ? 'text-white/58' : 'text-[#080808]/58'}`}>
        {text}
      </p>
    </div>
  )
}
