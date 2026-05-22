export default function Services() {
  const services = [
    {
      id: 1,
      icon: '🖥️',
      title: 'Business Websites',
      description: 'Professional websites to build your online presence and credibility.'
    },
    {
      id: 2,
      icon: '🔗',
      title: 'Website Funnels',
      description: 'Conversion-focused funnels that turn visitors into leads and inquiries.'
    },
    {
      id: 3,
      icon: '🛒',
      title: 'Sales Funnels',
      description: 'Funnel pages for selling products, services, courses, or offers.'
    },
    {
      id: 4,
      icon: '🏪',
      title: 'E-commerce Stores',
      description: 'Online stores with product pages, cart, checkout, and order management.'
    },
    {
      id: 5,
      icon: '📦',
      title: 'Order Systems',
      description: 'Custom order systems with tracking page and admin dashboard.'
    },
    {
      id: 6,
      icon: '</>'  ,
      title: 'Web Applications',
      description: 'Custom web apps and dashboards for your business operations.'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>WHAT I DO</h2>
        <h3 className="section-subtitle">Websites, Funnels, E-commerce & Systems<br />Built for Your Business</h3>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
              <a href="#contact" className="learn-more">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
