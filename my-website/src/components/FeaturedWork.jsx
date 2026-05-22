export default function FeaturedWork() {
  const projects = [
    {
      id: 1,
      title: 'Order System for Supplement Brand',
      category: 'Order System',
      description: 'Custom order management system with automated tracking and customer emails.'
    },
    {
      id: 2,
      title: 'Business Funnel for Coaching Program',
      category: 'Sales Funnel',
      description: 'High-converting funnel that increased lead generation by 150%.'
    },
    {
      id: 3,
      title: 'E-commerce Store for Clothing Brand',
      category: 'E-commerce',
      description: 'Full-featured online store with product catalog and checkout flow.'
    }
  ]

  return (
    <section id="portfolio" className="featured-work">
      <div className="container">
        <h2>FEATURED WORK</h2>
        <h3 className="section-subtitle">Projects That Drive Results</h3>
        
        <div className="featured-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder"></div>
                <div className="overlay">
                  <button className="view-btn">View Case Study →</button>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
