export default function Process() {
  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Discovery',
      description: 'We understand your business, goals, and target audience.'
    },
    {
      id: 2,
      number: '02',
      title: 'Planning',
      description: 'Create a roadmap with wireframes, sitemap, and strategy.'
    },
    {
      id: 3,
      number: '03',
      title: 'Design & Development',
      description: 'Build your website with clean code and modern design.'
    },
    {
      id: 4,
      number: '04',
      title: 'Testing',
      description: 'Thoroughly test on all devices and browsers.'
    },
    {
      id: 5,
      number: '05',
      title: 'Launch & Support',
      description: 'Go live and provide ongoing support and maintenance.'
    }
  ]

  return (
    <section id="process" className="process">
      <div className="container">
        <h2>HOW I WORK</h2>
        <h3 className="section-subtitle">A Clear 5-Step Process from Concept to Launch</h3>
        
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={step.id} className="process-step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-arrow">→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
