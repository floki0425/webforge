export default function Testimonial() {
  return (
    <section id="testimonial" className="bg-[#F7F3EC] px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 border-b border-[#DED6C8] pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.32em] text-[#C8A96A]">
              Testimonial
            </p>
            <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-[-0.04em] text-[#080808] sm:text-5xl">
              What clients say about working together.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[#080808]/55">
            Clear process, polished delivery, and systems built around business
            outcomes.
          </p>
        </div>

        <div className="border border-[#DED6C8] bg-white/65 p-8 shadow-[0_24px_80px_rgba(8,8,8,0.06)] sm:p-10 lg:p-12">
          <span className="mb-8 block text-7xl font-black leading-none tracking-[-0.08em] text-[#C8A96A]">
            "
          </span>

          <p className="max-w-4xl text-2xl font-semibold leading-10 tracking-[-0.03em] text-[#080808] sm:text-3xl sm:leading-[1.35]">
            Joshua delivered a beautiful website and funnel system that helped
            us capture more leads and make our marketing much simpler.
            Everything was smooth, fast, and exactly what our business needed.
          </p>

          <div className="mt-10 flex flex-col gap-5 border-t border-[#DED6C8] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#080808]">
                Client
              </p>
              <p className="mt-1 text-sm text-[#080808]/55">
                Digital Coaching Brand
              </p>
            </div>

            <div className="flex gap-1 text-[#C8A96A]" aria-label="Five star rating">
              <span>*</span>
              <span>*</span>
              <span>*</span>
              <span>*</span>
              <span>*</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
