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
      text: 'Where the forge happens — crafting the UI and engineering the backend systems.',
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
      className="relative overflow-hidden bg-[#050505] py-24 text-[#F7F3EC]"
    >
      {/* subtle technical background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#C8A96A_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[#C8A96A]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#C8A96A]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* header */}
        <div className="mb-20 max-w-3xl">
          <p className="mb-8 text-[10px] uppercase tracking-[0.7em] text-[#C8A96A]/30">
            System Version 4.0
          </p>

          <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-[#C8A96A]">
            The Forge Process
          </p>

          <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-[-0.04em] text-white md:text-6xl">
            Handcrafting high-performance systems.
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
            Our workflow is built on technical precision and editorial care.
            Every node in the system ensures your product scales without
            friction.
          </p>
        </div>

        {/* process timeline */}
        <div className="relative mb-8 hidden xl:block">
          <div className="absolute left-0 right-0 top-6 border-t border-dashed border-[#C8A96A]/35" />

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step) => (
              <div key={step.id} className="relative flex flex-col items-center">
                <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#C8A96A] bg-[#050505] text-sm font-bold text-[#C8A96A]">
                  {String(step.id).padStart(2, '0')}
                </div>

                <p className="mt-4 text-[9px] uppercase tracking-[0.25em] text-[#C8A96A]/45">
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* cards */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-[#101724] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-2 hover:border-[#C8A96A]/50 hover:bg-[#121C2C]"
            >
              <div className="mb-8 flex items-center justify-between xl:hidden">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C8A96A] text-sm font-bold text-[#C8A96A]">
                  {String(step.id).padStart(2, '0')}
                </div>

                <p className="text-[9px] uppercase tracking-[0.25em] text-[#C8A96A]/45">
                  {step.label}
                </p>
              </div>

              <h3 className="mb-4 text-xl font-semibold tracking-[-0.03em] text-white">
                {step.title}
              </h3>

              <p className="min-h-24 text-sm leading-6 text-white/55">
                {step.text}
              </p>

              <div className="mt-10 border-t border-white/10 pt-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C8A96A]/55">
                  {step.status}
                </p>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C8A96A]/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* footer metadata */}
        <div className="mt-24 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 text-[10px] uppercase tracking-[0.25em] text-[#C8A96A]/35 md:flex-row md:items-center md:justify-between">
            <p>LAT: 40.7128° N &nbsp;&nbsp; LNG: 74.0060° W</p>
            <p>● System_Status_Stable &nbsp;&nbsp; Build: 24_A_PROD</p>
          </div>
        </div>
      </div>
    </section>
  )
}