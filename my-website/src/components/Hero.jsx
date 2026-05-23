export default function Hero() {
  return (
    <section id="home" className="bg-gray-50 py-20 lg:py-28">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center justify-center rounded-full border border-gray-300 px-4 py-2 text-xs uppercase tracking-[.3em] text-black font-semibold bg-white shadow-sm">
              WE BUILD WEBSITES, FUNNELS & SYSTEMS
            </div>
            <h1 className="section-title max-w-3xl">
              Websites and Systems That Get You More Leads, Orders, and Customers
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl leading-8">
              I help small businesses and entrepreneurs build high-converting websites, funnels, e-commerce stores, and custom systems that grow their business online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#packages" className="btn-primary">View Packages</a>
              <a href="#portfolio" className="btn-secondary">See My Work</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-gray-200">
              <div className="rounded-3xl border border-gray-200 bg-white p-5 text-gray-700 text-sm font-medium shadow-sm">⚡ Fast Turnaround</div>
              <div className="rounded-3xl border border-gray-200 bg-white p-5 text-gray-700 text-sm font-medium shadow-sm">📱 Mobile Responsive</div>
              <div className="rounded-3xl border border-gray-200 bg-white p-5 text-gray-700 text-sm font-medium shadow-sm">🎯 Built for Conversion</div>
              <div className="rounded-3xl border border-gray-200 bg-white p-5 text-gray-700 text-sm font-medium shadow-sm">🤝 Ongoing Support</div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-xl">
              <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-6">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500" />
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-4">
                  <div className="h-8 w-3/4 rounded-full bg-gray-200"></div>
                  <div className="h-4 w-full rounded-full bg-gray-100"></div>
                  <div className="h-4 w-5/6 rounded-full bg-gray-100"></div>
                  <div className="grid gap-4 mt-6">
                    <div className="h-44 rounded-[1.5rem] bg-gray-100"></div>
                    <div className="flex gap-4">
                      <div className="h-20 flex-1 rounded-3xl bg-gray-100"></div>
                      <div className="h-20 w-20 rounded-3xl bg-gray-100"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 right-8 hidden xl:block">
                <div className="h-40 w-28 rounded-[2rem] bg-black shadow-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
