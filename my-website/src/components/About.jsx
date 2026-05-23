export default function About() {
  return (
    <section id="about" className="py-20 bg-[#F7F3EC]">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-center">
          <div className="space-y-6">
            <span className="text-sm uppercase tracking-[.15em] text-[#667085]">About Joshua</span>
            <h2 className="section-title">Hi, I’m Joshua 👋</h2>
            <p className="text-lg text-[#667085] max-w-2xl leading-8">
              I build websites, funnels, e-commerce stores, and custom systems for businesses who want to convert more leads and make online selling easier. My work blends clean design with smart technology to support growth and reduce friction.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#E7E1D6] bg-white p-8 shadow-sm hover:border-[#C8A96A] hover:shadow-md transition-all">
              <h3 className="text-xl font-bold text-[#080808] mb-3">Modern systems</h3>
              <p className="text-[#667085]">User-friendly, data-driven platforms for your business operations.</p>
            </div>
            <div className="rounded-2xl border border-[#E7E1D6] bg-white p-8 shadow-sm hover:border-[#C8A96A] hover:shadow-md transition-all">
              <h3 className="text-xl font-bold text-[#080808] mb-3">Conversion-first</h3>
              <p className="text-[#667085]">Landing pages, funnels, and checkout flows designed to convert.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
