export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505] py-24 text-white lg:py-32"
    >
      {/* Desktop background */}
      <div
        className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat lg:block"
        style={{
          backgroundImage: "url('/images/hero-bg-desktop.png')",
        }}
      />

      {/* Mobile background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden"
        style={{
          backgroundImage: "url('/images/hero-bg-mobile.png')",
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Left-side gradient so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />

      <div className="container-custom relative z-10">
        <div className="grid min-h-[75vh] items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT COLUMN */}
          <div className="max-w-3xl space-y-9">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#C8A96A]/25 bg-white/5 px-4 py-2 shadow-sm backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#C8A96A] shadow-[0_0_20px_rgba(200,169,106,0.9)]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C8A96A]">
                Websites, Funnels & Systems
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-[-0.05em] text-white md:text-6xl lg:text-7xl">
              Websites and Systems That Get You More
              <span className="text-[#C8A96A]"> Leads</span>,
              <span className="text-[#C8A96A]"> Orders</span>, and
              <span className="text-white"> Customers</span>
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
              I help small businesses and entrepreneurs build high-converting
              websites, funnels, e-commerce stores, and custom systems that grow
              their business online.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#packages"
                className="inline-flex items-center justify-center rounded bg-[#C8A96A] px-8 py-4 text-sm font-bold text-[#080808] transition-all hover:bg-[#d9bb7a] hover:shadow-[0_15px_40px_rgba(200,169,106,0.25)]"
              >
                View Packages
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:border-[#C8A96A]/60 hover:bg-white/10"
              >
               Services
              </a>
            </div>

            <div className="grid gap-5 border-t border-white/10 pt-9 sm:grid-cols-2">
              <div className="group flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#111111]/80 text-[#B76E42] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_30px_rgba(0,0,0,0.28)] backdrop-blur-md transition group-hover:border-[#B76E42]/50 group-hover:text-[#C8A96A]">
                  <IconBolt />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-bold uppercase tracking-wider text-white">
                    Fast Turnaround
                  </h4>
                  <p className="text-sm leading-6 text-white/55">
                    Quick delivery without quality compromise.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#111111]/80 text-[#B76E42] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_30px_rgba(0,0,0,0.28)] backdrop-blur-md transition group-hover:border-[#B76E42]/50 group-hover:text-[#C8A96A]">
                  <IconResponsive />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-bold uppercase tracking-wider text-white">
                    Mobile Responsive
                  </h4>
                  <p className="text-sm leading-6 text-white/55">
                    Flawless performance on every screen.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#111111]/80 text-[#B76E42] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_30px_rgba(0,0,0,0.28)] backdrop-blur-md transition group-hover:border-[#B76E42]/50 group-hover:text-[#C8A96A]">
                  <IconTarget />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-bold uppercase tracking-wider text-white">
                    Built for Conversion
                  </h4>
                  <p className="text-sm leading-6 text-white/55">
                    Engineered to turn visitors into buyers.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#111111]/80 text-[#B76E42] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_30px_rgba(0,0,0,0.28)] backdrop-blur-md transition group-hover:border-[#B76E42]/50 group-hover:text-[#C8A96A]">
                  <IconHandshake />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-bold uppercase tracking-wider text-white">
                    Ongoing Support
                  </h4>
                  <p className="text-sm leading-6 text-white/55">
                    Your long-term partner in digital growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN intentionally empty so background image can show */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}

function IconBolt() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 2L5 13h6l-1 9l8-12h-6l1-8z" />
    </svg>
  )
}

function IconResponsive() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="6" width="11" height="12" rx="1.5" />
      <rect x="16.5" y="9" width="3.5" height="9" rx="1" />
      <path d="M8 15h3" />
    </svg>
  )
}

function IconTarget() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </svg>
  )
}

function IconHandshake() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 12.5l3-3a2 2 0 0 1 2.8 0l1.2 1.2" />
      <path d="M3 12l4-4l4 4" />
      <path d="M21 12l-4-4l-4 4" />
      <path d="M7 13l4.4 4.4a2 2 0 0 0 2.8 0L17 14.6" />
    </svg>
  )
}
