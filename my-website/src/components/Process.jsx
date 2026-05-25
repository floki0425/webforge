export default function Process() {
  const steps = [
    {
      id: 1,
      title: 'Discovery',
      text: 'Auditing current workflows and defining technical requirements for maximum conversion.',
      label: 'SYSTEM ENTRY',
      status: 'V1.0 BASELINE',
    },
    {
      id: 2,
      title: 'Planning',
      text: 'Structural blueprinting of the user journey using low-fidelity logic flows and data maps.',
      label: 'ARCHITECTURE_MAP',
      status: 'LOGIC DEFINED',
    },
    {
      id: 3,
      title: 'Design & Dev',
      text: 'Where the forge happens - crafting the UI and engineering the backend systems.',
      label: 'FORGE_STATE',
      status: 'ACTIVE BUILD',
    },
    {
      id: 4,
      title: 'Testing',
      text: 'Rigorous performance auditing and stress-testing every point of interaction.',
      label: 'QA_VALIDATION',
      status: 'VERIFICATION',
    },
    {
      id: 5,
      title: 'Launch',
      text: 'Deployment to production and ongoing system maintenance for long-term health.',
      label: 'DEPLOYMENT',
      status: 'LIVE SYNC',
    },
  ]

  return (
    <section
      id="process"
      className="bg-[#080808] px-6 py-20 text-[#F7F3EC] lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-6 border-b border-white/10 pb-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.32em] text-[#C8A96A]">
              The Forge Process
            </p>

            <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl">
              Handcrafting high-performance systems.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/52 lg:justify-self-end">
            Our workflow is built on technical precision and editorial care.
            Every node in the system ensures your product scales without
            friction.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group relative bg-[#080808] p-7 transition-colors hover:bg-[#101010] sm:p-8"
            >
              <div className="mb-10 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-3 text-xs font-black text-[#C8A96A]">
                    {String(step.id).padStart(2, '0')}
                  </p>
                  <p className="text-[9px] font-black uppercase tracking-[0.24em] text-white/32">
                    {step.label}
                  </p>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 text-xs font-black text-[#C8A96A] transition group-hover:border-[#C8A96A]/50">
                  {String(step.id).padStart(2, '0')}
                </div>
              </div>

              <h3 className="mb-4 text-2xl font-black tracking-[-0.04em] text-white">
                {step.title}
              </h3>

              <p className="min-h-28 text-sm leading-7 text-white/52">
                {step.text}
              </p>

              <div className="mt-10 border-t border-white/10 pt-4">
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#C8A96A]/70">
                  {step.status}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#C8A96A] transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-7 text-white/45">
            Each phase is designed to reduce guesswork, clarify decisions, and
            move the project from idea to launch with less friction.
          </p>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center border border-[#C8A96A]/45 px-8 text-sm font-bold text-[#C8A96A] transition hover:border-[#C8A96A] hover:bg-[#C8A96A] hover:text-[#080808]"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  )
}
