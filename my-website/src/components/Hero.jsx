export default function Hero() {
  return (
    <section id="home" className="bg-[#F7F3EC] py-20 lg:py-32">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-8">
            <div className="badge-premium">
              🚀 WE BUILD WEBSITES, FUNNELS & SYSTEMS
            </div>
            <h1 className="section-title max-w-3xl">
              Websites and Systems That Get You More Leads, Orders, and Customers
            </h1>
            <p className="text-lg text-[#667085] max-w-2xl leading-8">
              I help small businesses and entrepreneurs build high-converting websites, funnels, e-commerce stores, and custom systems that grow their business online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#packages" className="btn-primary">View Packages</a>
              <a href="#portfolio" className="btn-secondary">See My Work</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-[#E7E1D6]">
              <div className="rounded-2xl border border-[#E7E1D6] bg-white p-5 text-[#1F2933] text-sm font-medium shadow-sm hover:border-[#C8A96A] hover:shadow-md transition-all">⚡ Fast Turnaround</div>
              <div className="rounded-2xl border border-[#E7E1D6] bg-white p-5 text-[#1F2933] text-sm font-medium shadow-sm hover:border-[#C8A96A] hover:shadow-md transition-all">📱 Mobile Responsive</div>
              <div className="rounded-2xl border border-[#E7E1D6] bg-white p-5 text-[#1F2933] text-sm font-medium shadow-sm hover:border-[#C8A96A] hover:shadow-md transition-all">🎯 Built for Conversion</div>
              <div className="rounded-2xl border border-[#E7E1D6] bg-white p-5 text-[#1F2933] text-sm font-medium shadow-sm hover:border-[#C8A96A] hover:shadow-md transition-all">🤝 Ongoing Support</div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-xl">
              <div className="rounded-3xl border border-[#E7E1D6] bg-white p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 mb-6">
                  <span className="h-3 w-3 rounded-full bg-[#C8A96A]" />
                  <span className="h-3 w-3 rounded-full bg-[#B76E42]" />
                  <span className="h-3 w-3 rounded-full bg-[#1F2933]" />
                </div>
                <div className="space-y-4">
                  <div className="h-8 w-3/4 rounded-full bg-[#E7E1D6]"></div>
                  <div className="h-4 w-full rounded-full bg-[#F7F3EC]"></div>
                  <div className="h-4 w-5/6 rounded-full bg-[#F7F3EC]"></div>
                  <div className="grid gap-4 mt-6">
                    <div className="h-44 rounded-2xl bg-[#F7F3EC]"></div>
                    <div className="flex gap-4">
                      <div className="h-20 flex-1 rounded-2xl bg-[#F7F3EC]"></div>
                      <div className="h-20 w-20 rounded-2xl bg-[#F7F3EC]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 right-8 hidden xl:block">
                <div className="h-40 w-28 rounded-3xl bg-[#080808] shadow-lg border border-[#C8A96A]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
