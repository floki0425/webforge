export default function Services() {
  const services = [
    { id: 1, icon: 'site', title: 'Business Websites', description: 'Professional websites to build your online presence and credibility.', visual: 'wireframe' },
    { id: 2, icon: 'funnel', title: 'Website Funnels', description: 'Conversion-focused funnels that turn visitors into leads and inquiries.', visual: 'leadcard' },
    { id: 3, icon: 'sales', title: 'Sales Funnels', description: 'Funnel pages for selling products, services, courses, or offers.', visual: 'ordercard' },
    { id: 4, icon: 'store', title: 'E-commerce Stores', description: 'Online stores with product pages, cart, checkout, and order management.', visual: 'checkout' },
    { id: 5, icon: 'orders', title: 'Order Systems', description: 'Custom order systems with tracking page and admin dashboard.', visual: 'dashboard' },
    { id: 6, icon: 'apps', title: 'Web Applications', description: 'Custom web apps and dashboards for your business operations.', visual: 'automation' },
  ]

  const renderVisual = (type) => {
    switch (type) {
      case 'wireframe':
        return (
          <div className="grid h-28 gap-2 border border-[#DED6C8] bg-white p-3">
            <div className="h-3 w-2/3 bg-[#E9DFCE]" />
            <div className="grid flex-1 grid-cols-[0.9fr_1.1fr] gap-2">
              <div className="bg-[#F2EBDD]" />
              <div className="grid gap-2">
                <div className="bg-[#E9DFCE]" />
                <div className="bg-[#F2EBDD]" />
                <div className="w-2/3 bg-[#C8A96A]/35" />
              </div>
            </div>
          </div>
        )
      case 'leadcard':
        return (
          <div className="grid h-28 gap-2 border border-[#DED6C8] bg-white p-3">
            <div className="h-3 w-1/2 bg-[#C8A96A]/35" />
            <div className="h-7 border border-[#E7E1D6] bg-[#F7F3EC]" />
            <div className="h-7 border border-[#E7E1D6] bg-[#F7F3EC]" />
            <div className="h-5 w-1/3 bg-[#080808]" />
          </div>
        )
      case 'ordercard':
        return (
          <div className="flex h-28 gap-3 border border-[#DED6C8] bg-white p-3">
            <div className="w-16 bg-[#F2EBDD]" />
            <div className="flex flex-1 flex-col gap-2">
              <div className="h-3 w-3/4 bg-[#E9DFCE]" />
              <div className="h-2 w-1/2 bg-[#F2EBDD]" />
              <div className="flex-1" />
              <div className="flex items-center justify-between">
                <span className="h-4 w-12 bg-[#C8A96A]/35" />
                <span className="h-5 w-16 bg-[#080808]" />
              </div>
            </div>
          </div>
        )
      case 'checkout':
        return (
          <div className="grid h-28 gap-2 border border-[#DED6C8] bg-white p-3">
            {[1, 2].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-8 w-8 bg-[#F2EBDD]" />
                <span className="h-2 flex-1 bg-[#E9DFCE]" />
                <span className="h-2 w-10 bg-[#C8A96A]/35" />
              </div>
            ))}
            <div className="mt-1 flex items-center justify-between border-t border-[#E7E1D6] pt-3">
              <span className="h-2 w-16 bg-[#E9DFCE]" />
              <span className="h-3 w-12 bg-[#080808]" />
            </div>
          </div>
        )
      case 'dashboard':
        return (
          <div className="grid h-28 gap-2 border border-[#DED6C8] bg-white p-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="h-8 bg-[#F2EBDD]" />
              <div className="h-8 bg-[#F2EBDD]" />
              <div className="h-8 bg-[#F2EBDD]" />
            </div>
            <div className="flex flex-1 items-end gap-1">
              {[35, 65, 48, 90, 72].map((height) => (
                <span
                  key={height}
                  className="flex-1 bg-[#C8A96A]/45"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        )
      case 'automation':
        return (
          <div className="flex h-28 items-center justify-center border border-[#DED6C8] bg-white p-3">
            <span className="h-9 w-9 rounded-full border border-[#C8A96A]/60 bg-[#F7F3EC]" />
            <span className="h-px w-10 bg-[#C8A96A]/50" />
            <span className="h-12 w-12 rounded-full border-2 border-[#C8A96A] bg-[#F2EBDD]" />
            <span className="h-px w-10 bg-[#C8A96A]/50" />
            <span className="h-9 w-9 rounded-full border border-[#C8A96A]/60 bg-[#F7F3EC]" />
          </div>
        )
      default:
        return null
    }
  }

  const renderIcon = (type) => {
    const iconPaths = {
      site: <path d="M4 6h16v12H4zM4 10h16M8 15h4" />,
      funnel: <path d="M4 5h16l-6 7v5l-4 2v-7L4 5z" />,
      sales: <path d="M5 17h14M7 14h3v3H7zM12 10h3v7h-3zM17 6h3v11h-3z" />,
      store: <path d="M5 9h14l-1-4H6L5 9zM6 9v10h12V9M9 19v-6h6v6" />,
      orders: <path d="M7 4h10v16H7zM10 8h4M10 12h4M10 16h2" />,
      apps: <path d="M8 8l-4 4l4 4M16 8l4 4l-4 4M13 5l-2 14" />,
    }

    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {iconPaths[type]}
      </svg>
    )
  }

  return (
    <section id="services" className="bg-[#F7F3EC] px-6 py-20 text-[#080808] lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 border-b border-[#DED6C8] pb-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.32em] text-[#C8A96A]">
              What I Do
            </p>
            <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
              Websites, funnels, stores, and systems.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[#080808]/55 lg:justify-self-end">
            Websites, Funnels, E-commerce & Systems Built for Your Business
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border border-[#DED6C8] bg-[#DED6C8] md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="group bg-[#F7F3EC] p-6 transition-colors hover:bg-white sm:p-7"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center border border-[#DED6C8] bg-white text-[#C8A96A] transition group-hover:border-[#C8A96A]">
                  {renderIcon(service.icon)}
                </div>
                <span className="text-xs font-black text-[#C8A96A]/55">
                  {String(service.id).padStart(2, '0')}
                </span>
              </div>

              {renderVisual(service.visual)}

              <h3 className="mt-7 text-2xl font-black leading-tight tracking-[-0.04em]">
                {service.title}
              </h3>
              <p className="mt-4 min-h-14 text-sm leading-7 text-[#080808]/58">
                {service.description}
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-3 text-sm font-bold text-[#080808] transition-colors hover:text-[#C8A96A]"
              >
                Learn more
                <span className="h-px w-7 bg-[#C8A96A] transition-all group-hover:w-10" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-[#DED6C8] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-7 text-[#080808]/58">
            Need something custom? Let&rsquo;s build it together.
          </p>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center bg-[#080808] px-8 text-sm font-bold text-white transition hover:bg-[#C8A96A] hover:text-[#080808]"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  )
}
