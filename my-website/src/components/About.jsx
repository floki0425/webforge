export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-black/10 bg-[#EDE6DC] py-24 sm:py-28 lg:py-32"
    >
      {/* background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(115deg, rgba(247,243,236,0.95) 0%, rgba(247,243,236,0.8) 28%, rgba(61,43,58,0.75) 50%, rgba(128,70,64,0.72) 72%, rgba(247,243,236,0.95) 100%),
            radial-gradient(circle at 18% 20%, rgba(200,169,106,0.28), transparent 30%),
            radial-gradient(circle at 82% 70%, rgba(8,8,8,0.22), transparent 35%)
          `,
        }}
      />

      {/* soft grid lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.16]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:25%_50%]" />
      </div>

      <div className="container-custom relative">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* left content */}
          <div className="max-w-2xl">
            <span className="mb-5 block text-xs font-bold uppercase tracking-[0.4em] text-[#C8A96A]">
              About Joshua
            </span>

            <h2 className="text-5xl font-black leading-tight tracking-[-0.06em] text-[#080808] sm:text-6xl lg:text-7xl">
              Hi, I’m{' '}
              <span className="italic tracking-[-0.08em]">Joshua.</span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-[#262626]/75 sm:text-lg">
              I build websites, funnels, e-commerce stores, and custom systems
              for businesses who want to convert more leads and make online
              selling easier. My work blends clean design with smart technology
              to support growth and reduce friction.
            </p>

            <div className="mt-12 flex items-center gap-4">
              <span className="h-px w-12 bg-[#C8A96A]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#080808]/45">
                Handcrafted digital systems
              </span>
            </div>

            <div className="mt-8 h-14 w-44">
              <svg
                viewBox="0 0 180 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full text-[#080808]"
              >
                <path
                  d="M7 36C25 36 28 13 47 13C66 13 70 48 90 48C110 48 116 18 137 18C154 18 162 35 173 35"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* right cards */}
          <div className="relative">
            <div className="absolute -left-8 top-1/2 hidden h-56 w-56 -translate-y-1/2 rounded-full bg-[#C8A96A]/20 blur-3xl lg:block" />

            <div className="relative space-y-6 lg:space-y-10">
              <div className="rounded-2xl border border-black/10 bg-[#F7F3EC]/95 p-7 shadow-[0_24px_80px_rgba(8,8,8,0.16)] backdrop-blur sm:p-8 lg:ml-10">
                <div className="mb-5 flex items-center gap-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#080808] text-xs font-bold text-[#C8A96A]">
                    01
                  </span>
                  <h3 className="text-2xl font-black tracking-[-0.04em] text-[#080808] sm:text-3xl">
                    Modern systems
                  </h3>
                </div>

                <p className="text-base leading-7 text-[#262626]/70">
                  User-friendly, data-driven platforms for your business
                  operations.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#101724] p-7 shadow-[0_24px_80px_rgba(8,8,8,0.28)] sm:p-8 lg:mr-8">
                <div className="mb-5 flex items-center gap-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C8A96A] text-xs font-bold text-[#080808]">
                    02
                  </span>
                  <h3 className="text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">
                    Conversion-first
                  </h3>
                </div>

                <p className="text-base leading-7 text-white/68">
                  Landing pages, funnels, and checkout flows designed to
                  convert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}