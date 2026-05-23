export default function FeaturedWork() {
  const projects = [
    { id: 1, title: 'Order System for Supplement Brand', tag: 'Order System', description: 'Custom order flow and fulfillment automation.' },
    { id: 2, title: 'Business Funnel for Coaching Program', tag: 'Business Funnel', description: 'Lead capture and conversion focused funnel.' },
    { id: 3, title: 'E-commerce Store for Clothing Brand', tag: 'E-commerce', description: 'Fashion storefront with product showcases and checkout.' }
  ]

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">FEATURED WORK</h2>
          <p className="section-subtitle mt-4">Case studies showcasing modern sites, funnels, and systems.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map(project => (
            <div key={project.id} className="card">
              <div className="mb-4 rounded-3xl bg-gray-100 h-56"></div>
              <span className="inline-flex rounded-full border border-gray-300 px-3 py-1 text-xs uppercase tracking-[.2em] text-gray-600">{project.tag}</span>
              <h3 className="mt-6 text-xl font-bold text-black mb-3">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
