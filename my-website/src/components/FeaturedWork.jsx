export default function FeaturedWork() {
  const projects = [
    {
      id: 1,
      title: 'Order System for Supplement Brand',
      tag: 'Order System',
      description: 'Custom order flow and fulfillment automation.',
      image: '/images/pure-grind-order-system.png',
      imageAlt: 'Pure Grind protein chips order system website preview'
    },
    { id: 2, title: 'Business Funnel for Coaching Program', tag: 'Business Funnel', description: 'Lead capture and conversion focused funnel.' },
    { id: 3, title: 'E-commerce Store for Clothing Brand', tag: 'E-commerce', description: 'Fashion storefront with product showcases and checkout.' }
  ]

  return (
    <section id="portfolio" className="py-20 bg-[#F7F3EC]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">FEATURED WORK</h2>
          <p className="section-subtitle mt-4">Case studies showcasing modern sites, funnels, and systems.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map(project => (
            <div key={project.id} className="card">
              {project.image ? (
                <div className="mb-4 overflow-hidden rounded-2xl border border-[#E7E1D6] bg-[#E7E1D6] shadow-sm transition-transform duration-300 hover:-translate-y-1">
                  <img src={project.image} alt={project.imageAlt} className="h-56 w-full object-cover object-top" />
                </div>
              ) : (
                <div className="mb-4 rounded-2xl bg-[#E7E1D6] h-56"></div>
              )}
              <span className="inline-flex rounded-full border border-[#E7E1D6] px-3 py-1 text-xs uppercase tracking-[.15em] text-[#667085] bg-white">{project.tag}</span>
              <h3 className="mt-6 text-xl font-bold text-[#080808] mb-3">{project.title}</h3>
              <p className="text-[#667085]">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
