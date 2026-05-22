export default function WhyWorkWithMe() {
  const benefits = [
    {
      id: 1,
      icon: '🎯',
      title: 'Focused on Results',
      description: 'Every project is built to drive leads, orders, and customers. Your success is my success.'
    },
    {
      id: 2,
      icon: '✨',
      title: 'Clean & Modern Design',
      description: 'Timeless designs that look professional and work perfectly across all devices.'
    },
    {
      id: 3,
      icon: '🤝',
      title: 'Reliable & Transparent',
      description: 'Clear communication, honest timelines, and consistent updates throughout your project.'
    },
    {
      id: 4,
      icon: '💪',
      title: 'Support After Launch',
      description: 'Ongoing support, updates, and improvements after your site goes live.'
    }
  ]

  return (
    <section className="why-work">
      <div className="container">
        <h2>WHY WORK WITH ME?</h2>
        <h3 className="section-subtitle">What Sets Me Apart</h3>
        
        <div className="benefits-grid">
          {benefits.map(benefit => (
            <div key={benefit.id} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
