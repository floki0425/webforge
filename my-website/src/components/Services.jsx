export default function Services() {
  const services = [
    { id: 1, icon: '🖥️', title: 'Business Websites', description: 'Professional websites to build your online presence and credibility.' },
    { id: 2, icon: '🔗', title: 'Website Funnels', description: 'Conversion-focused funnels that turn visitors into leads and inquiries.' },
    { id: 3, icon: '🛒', title: 'Sales Funnels', description: 'Funnel pages for selling products, services, courses, or offers.' },
    { id: 4, icon: '🏪', title: 'E-commerce Stores', description: 'Online stores with product pages, cart, checkout, and order management.' },
    { id: 5, icon: '📦', title: 'Order Systems', description: 'Custom order systems with tracking page and admin dashboard.' },
    { id: 6, icon: '</>', title: 'Web Applications', description: 'Custom web apps and dashboards for your business operations.' }
  ]

  return (
    <section id="services" className="py-20 bg-[#F7F3EC]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">WHAT I DO</h2>
          <p className="section-subtitle mt-4">Websites, Funnels, E-commerce & Systems Built for Your Business</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(service => (
            <div key={service.id} className="card">
              <div className="text-4xl mb-4 opacity-90">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#080808] mb-3">{service.title}</h3>
              <p className="text-[#667085] mb-6">{service.description}</p>
              <a href="#contact" className="text-[#C8A96A] font-semibold hover:text-[#080808] transition-colors">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
