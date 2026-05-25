export default function Hero() {
  return (
    <section id="home" className="relative bg-[#F7F3EC] py-20 lg:py-32 overflow-hidden">
      {/* Blueprint grid backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#C8A96A 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
          opacity: 0.15,
        }}
      />
      <div className="container-custom relative z-10">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
          {/* LEFT COLUMN */}
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B76E42]/30 bg-[#F7F3EC] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#B76E42] animate-pulse" />
              <span className="text-[10px] font-bold tracking-widest text-[#C8A96A] uppercase">
                🚀 WE BUILD WEBSITES, FUNNELS & SYSTEMS
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#080808] max-w-3xl">
              Websites and Systems That Get You More
              <span className="text-[#C8A96A]"> Leads</span>,
              <span className="text-[#B76E42]"> Orders</span>, and
              <span className="text-[#080808]"> Customers</span>
            </h1>
            <p className="text-xl text-[#667085] max-w-2xl leading-relaxed">
              I help small businesses and entrepreneurs build high-converting websites, funnels, e-commerce stores, and custom systems that grow their business online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#packages" className="inline-block px-8 py-3 rounded-xl bg-[#080808] text-white font-medium hover:bg-[#1a1a1a] hover:shadow-md transition-all">
                View Packages
              </a>
              <a href="#portfolio" className="inline-block px-8 py-3 rounded-xl border border-[#E7E1D6] text-[#080808] font-medium hover:border-[#C8A96A] hover:bg-[#F7F3EC] transition-all">
                See My Work
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 border-t border-[#E7E1D6]">
              {/* Feature blocks using shapes */}
              <div className="group flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-[#E7E1D6] flex items-center justify-center text-[#B76E42]">
                  <div className="w-4 h-4 bg-[#C8A96A] rounded-full" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#080808] uppercase tracking-wider mb-1">Fast Turnaround</h4>
                  <p className="text-xs text-[#667085]">Quick delivery without quality compromise.</p>
                </div>
              </div>
              <div className="group flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-[#E7E1D6] flex items-center justify-center text-[#B76E42]">
                  <div className="w-4 h-4 bg-[#C8A96A] rounded-full" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#080808] uppercase tracking-wider mb-1">Mobile Responsive</h4>
                  <p className="text-xs text-[#667085]">Flawless performance on every screen.</p>
                </div>
              </div>
              <div className="group flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-[#E7E1D6] flex items-center justify-center text-[#B76E42]">
                  <div className="w-4 h-4 bg-[#B76E42] rounded-full" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#080808] uppercase tracking-wider mb-1">Built for Conversion</h4>
                  <p className="text-xs text-[#667085]">Engineered to turn visitors into buyers.</p>
                </div>
              </div>
              <div className="group flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-[#E7E1D6] flex items-center justify-center text-[#B76E42]">
                  <div className="w-4 h-4 bg-[#080808] rounded-full" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#080808] uppercase tracking-wider mb-1">Ongoing Support</h4>
                  <p className="text-xs text-[#667085]">Your long-term partner in digital growth.</p>
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT COLUMN */}
          <div className="relative flex flex-col items-center gap-8 max-w-full">
            {/* Central preview card */}
            <div className="relative w-10/12 md:w-9/12 lg:w-5/6 aspect-[16/10] bg-white rounded-xl shadow-2xl border border-[#E7E1D6] overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Card header */}
              <div className="flex items-center px-4 h-8 gap-1.5 border-b border-[#E7E1D6] bg-[#F7F3EC]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E7E1D6]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#E7E1D6]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#E7E1D6]" />
                <div className="ml-4 h-4 w-32 rounded-md border border-[#E7E1D6]" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-bold text-[#C8A96A] tracking-widest uppercase">Admin View</span>
                  <div className="flex gap-2">
                    <div className="h-6 w-16 bg-[#F7F3EC] rounded" />
                    <div className="h-6 w-6 bg-[#080808] rounded" />
                  </div>
                </div>
                <div className="h-32 w-full bg-[#F7F3EC] rounded-lg" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-16 bg-[#F7F3EC] rounded-lg border border-[#E7E1D6]" />
                  <div className="h-16 bg-[#F7F3EC] rounded-lg border border-[#E7E1D6]" />
                  <div className="h-16 bg-[#F7F3EC] rounded-lg border border-[#E7E1D6]" />
                </div>
              </div>
            </div>
            {/* Small cards below preview */}
            <div className="w-full flex flex-wrap justify-center gap-4">
              {/* Order notification */}
              <div className="w-56 p-4 bg-white rounded-xl shadow-xl border-l-4 border-[#B76E42] transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#B76E42]" />
                  <div>
                    <div className="text-[9px] font-bold text-[#667085] uppercase tracking-widest">New Order</div>
                    <div className="text-xs font-bold text-[#080808]">Custom System Plan</div>
                  </div>
                </div>
              </div>
              {/* Automation flow */}
              <div className="w-64 p-5 bg-white rounded-xl shadow-lg border border-[#E7E1D6] transform rotate-3 transition-transform duration-500">
                <div className="text-[10px] font-bold text-[#667085] uppercase tracking-widest mb-4">Automation Flow</div>
                <div className="flex items-center justify-between gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#F7F3EC] flex items-center justify-center">
                    <div className="h-4 w-4 bg-[#B76E42] rounded-full" />
                  </div>
                  <div className="flex-1 h-px bg-dashed border-t-2 border-dashed border-[#C8A96A]" />
                  <div className="w-12 h-12 rounded-lg bg-[#080808] flex items-center justify-center">
                    <div className="h-4 w-4 bg-white rounded-full" />
                  </div>
                </div>
              </div>
              {/* Lead capture */}
              <div className="w-48 p-4 bg-white rounded-xl shadow-xl border border-[#C8A96A]/30 transform rotate-12 transition-transform duration-500">
                <div className="text-[9px] font-bold text-[#C8A96A] uppercase tracking-wider mb-2">Lead Capture</div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-[#F7F3EC] rounded" />
                  <div className="h-2 w-full bg-[#F7F3EC] rounded" />
                  <div className="h-5 w-full bg-[#080808] rounded text-[8px] flex items-center justify-center text-white font-bold">SUBMIT REQUEST</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
