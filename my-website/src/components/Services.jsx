export default function Services() {
  const services = [
    { id: 1, icon: '🖥️', title: 'Business Websites', description: 'Professional websites to build your online presence and credibility.', visual: 'wireframe' },
    { id: 2, icon: '🔗', title: 'Website Funnels', description: 'Conversion-focused funnels that turn visitors into leads and inquiries.', visual: 'leadcard' },
    { id: 3, icon: '🛒', title: 'Sales Funnels', description: 'Funnel pages for selling products, services, courses, or offers.', visual: 'ordercard' },
    { id: 4, icon: '🏪', title: 'E-commerce Stores', description: 'Online stores with product pages, cart, checkout, and order management.', visual: 'checkout' },
    { id: 5, icon: '📦', title: 'Order Systems', description: 'Custom order systems with tracking page and admin dashboard.', visual: 'dashboard' },
    { id: 6, icon: '</>', title: 'Web Applications', description: 'Custom web apps and dashboards for your business operations.', visual: 'automation' }
  ]

  const renderVisual = (type) => {
    switch (type) {
      case 'wireframe':
        return (
          <div className="h-20 rounded-md bg-[#111] border border-[#1a1a1a] p-2 flex flex-col gap-1.5 overflow-hidden mb-4">
            <div className="flex items-center gap-1 px-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[rgba(200,169,106,0.35)]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[rgba(200,169,106,0.2)]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[rgba(200,169,106,0.2)]" />
              <span className="flex-1 h-1 rounded bg-[#1e1e1e] ml-1" />
            </div>
            <div className="h-1 w-2/3 rounded bg-[rgba(200,169,106,0.12)]" />
            <div className="flex-1 flex gap-1.5 min-h-0">
              <div className="w-1/2 h-full rounded-sm bg-[rgba(200,169,106,0.06)] border border-[rgba(200,169,106,0.1)]" />
              <div className="w-1/2 flex flex-col gap-1">
                <div className="h-1.5 rounded-sm bg-[rgba(200,169,106,0.08)]" />
                <div className="h-1 rounded-sm bg-[rgba(200,169,106,0.05)] w-3/4" />
                <div className="h-1 rounded-sm bg-[rgba(200,169,106,0.05)] w-5/6" />
                <div className="mt-auto h-2 rounded-sm w-2/3 bg-[rgba(200,169,106,0.18)]" />
              </div>
            </div>
          </div>
        )
      case 'leadcard':
        return (
          <div className="h-20 rounded-md bg-[#111] border border-[#1a1a1a] p-2 flex flex-col gap-1.5 overflow-hidden mb-4">
            <div className="h-1 w-1/2 rounded bg-[rgba(200,169,106,0.12)]" />
            <div className="h-2.5 rounded-sm bg-[rgba(200,169,106,0.05)] border border-[rgba(200,169,106,0.1)]" />
            <div className="h-2.5 rounded-sm bg-[rgba(200,169,106,0.05)] border border-[rgba(200,169,106,0.1)]" />
            <div className="h-2.5 rounded-sm bg-[rgba(200,169,106,0.05)] border border-[rgba(200,169,106,0.1)]" />
            <div className="mt-auto h-3 rounded-sm bg-[rgba(200,169,106,0.22)] w-1/3" />
          </div>
        )
      case 'ordercard':
        return (
          <div className="h-20 rounded-md bg-[#111] border border-[#1a1a1a] p-2 flex gap-2 overflow-hidden mb-4">
            <div className="w-8 h-full rounded-sm bg-[rgba(200,169,106,0.07)] border border-[rgba(200,169,106,0.12)]" />
            <div className="flex-1 flex flex-col gap-1">
              <div className="h-1.5 w-3/4 rounded bg-[rgba(200,169,106,0.1)]" />
              <div className="h-1 w-1/2 rounded bg-[rgba(200,169,106,0.06)]" />
              <div className="flex-1" />
              <div className="flex items-center justify-between">
                <span className="h-2 w-6 rounded-sm bg-[rgba(200,169,106,0.22)]" />
                <span className="h-2.5 w-8 rounded-sm bg-[rgba(200,169,106,0.15)]" />
              </div>
            </div>
          </div>
        )
      case 'checkout':
        return (
          <div className="h-20 rounded-md bg-[#111] border border-[#1a1a1a] p-2 flex flex-col gap-1 overflow-hidden mb-4">
            <div className="flex items-center justify-between">
              <span className="h-1 w-1/3 rounded bg-[rgba(200,169,106,0.1)]" />
              <span className="h-1 w-6 rounded bg-[rgba(200,169,106,0.08)]" />
            </div>
            <div className="flex items-center gap-1 py-0.5">
              <span className="w-3 h-3 rounded-sm bg-[rgba(200,169,106,0.07)] border border-[rgba(200,169,106,0.1)]" />
              <span className="h-1 flex-1 rounded bg-[rgba(200,169,106,0.05)]" />
              <span className="h-1 w-4 rounded bg-[rgba(200,169,106,0.08)]" />
            </div>
            <div className="flex items-center gap-1 py-0.5">
              <span className="w-3 h-3 rounded-sm bg-[rgba(200,169,106,0.07)] border border-[rgba(200,169,106,0.1)]" />
              <span className="h-1 flex-1 rounded bg-[rgba(200,169,106,0.05)]" />
              <span className="h-1 w-4 rounded bg-[rgba(200,169,106,0.08)]" />
            </div>
            <div className="border-t border-[rgba(200,169,106,0.1)] my-0.5" />
            <div className="flex items-center justify-between">
              <span className="h-1 w-1/4 rounded bg-[rgba(200,169,106,0.12)]" />
              <span className="h-1.5 w-6 rounded bg-[rgba(200,169,106,0.22)]" />
            </div>
          </div>
        )
      case 'dashboard':
        return (
          <div className="h-20 rounded-md bg-[#111] border border-[#1a1a1a] p-2 flex flex-col gap-1.5 overflow-hidden mb-4">
            <div className="flex gap-1.5">
              <div className="flex-1 h-5 rounded-sm bg-[rgba(200,169,106,0.05)] border border-[rgba(200,169,106,0.1)] flex items-center justify-center">
                <span className="h-1 w-3 rounded bg-[rgba(200,169,106,0.22)]" />
              </div>
              <div className="flex-1 h-5 rounded-sm bg-[rgba(200,169,106,0.05)] border border-[rgba(200,169,106,0.1)] flex items-center justify-center">
                <span className="h-1 w-4 rounded bg-[rgba(200,169,106,0.15)]" />
              </div>
              <div className="flex-1 h-5 rounded-sm bg-[rgba(200,169,106,0.05)] border border-[rgba(200,169,106,0.1)] flex items-center justify-center">
                <span className="h-1 w-2 rounded bg-[rgba(200,169,106,0.22)]" />
              </div>
            </div>
            <div className="flex-1 flex items-end gap-1 pb-0.5">
              <div className="flex-1 bg-[rgba(200,169,106,0.1)] rounded-t-sm" style={{ height: '40%' }} />
              <div className="flex-1 bg-[rgba(200,169,106,0.15)] rounded-t-sm" style={{ height: '65%' }} />
              <div className="flex-1 bg-[rgba(200,169,106,0.22)] rounded-t-sm" style={{ height: '85%' }} />
              <div className="flex-1 bg-[rgba(200,169,106,0.12)] rounded-t-sm" style={{ height: '50%' }} />
              <div className="flex-1 bg-[rgba(200,169,106,0.28)] rounded-t-sm" style={{ height: '100%' }} />
            </div>
          </div>
        )
      case 'automation':
        return (
          <div className="h-20 rounded-md bg-[#111] border border-[#1a1a1a] flex items-center justify-center overflow-hidden mb-4 relative">
            <div className="w-4 h-4 rounded-full border border-[rgba(200,169,106,0.3)] bg-[rgba(200,169,106,0.08)]" />
            <div className="w-6 h-px bg-[rgba(200,169,106,0.2)]" />
            <div className="w-5 h-5 rounded-full border-2 border-[rgba(200,169,106,0.4)] bg-[rgba(200,169,106,0.15)] shadow-[0_0_8px_rgba(200,169,106,0.15)]" />
            <div className="w-6 h-px bg-[rgba(200,169,106,0.2)]" />
            <div className="w-4 h-4 rounded-full border border-[rgba(200,169,106,0.3)] bg-[rgba(200,169,106,0.08)]" />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section id="services" className="py-20 bg-[#080808] relative overflow-hidden">
      {/* Blueprint grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(200,169,106,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,106,0.035) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />
      {/* Subtle top radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(200,169,106,0.04), transparent)'
        }}
      />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="w-12 h-0.5 bg-[#C8A96A] rounded-full mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F0E8] tracking-tight">WHAT I DO</h2>
          <p className="text-lg md:text-xl text-[#7a7568] max-w-2xl mx-auto mt-4">Websites, Funnels, E-commerce & Systems Built for Your Business</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(service => (
            <div
              key={service.id}
              className="group bg-[#0e0e0e] border border-[#1a1a1a] rounded-xl p-5 transition-all duration-300 hover:border-[rgba(200,169,106,0.3)] hover:shadow-[0_0_30px_rgba(200,169,106,0.06)] hover:-translate-y-0.5 relative"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[rgba(200,169,106,0.08)] rounded-tr-xl group-hover:border-[rgba(200,169,106,0.25)] transition-colors duration-300" />
              {/* Index number */}
              <span className="absolute top-3 right-3 text-[10px] font-semibold text-[rgba(200,169,106,0.15)] group-hover:text-[rgba(200,169,106,0.35)] transition-colors duration-300">
                {String(service.id).padStart(2, '0')}
              </span>

              {renderVisual(service.visual)}

              <h3 className="text-lg font-bold text-[#F5F0E8] mb-2">{service.title}</h3>
              <p className="text-sm text-[#7a7568] mb-4 leading-relaxed">{service.description}</p>
              <a
                href="#contact"
                className="text-[#C8A96A] font-semibold text-sm hover:text-[#d4b87a] transition-colors duration-200 inline-flex items-center gap-1"
              >
                Learn more <span className="group-hover:translate-x-0.5 transition-transform duration-200">&rarr;</span>
              </a>
            </div>
          ))}
        </div>

        {/* Integrated CTA block */}
        <div className="mt-14 text-center py-8 border-t border-[#1a1a1a]">
          <p className="text-[#C4BFB4] mb-4">Need something custom? Let&rsquo;s build it together.</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-[#C8A96A] text-[#080808] font-semibold rounded-md hover:bg-[#d4b87a] transition-colors duration-200 shadow-[0_0_16px_rgba(200,169,106,0.2)]"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  )
}
