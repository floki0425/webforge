export default function Process() {
  const steps = [
    { id: 1, title: 'Discovery', text: 'We understand your business, goals, and audience.' },
    { id: 2, title: 'Planning', text: 'A strategy and roadmap is created for the project.' },
    { id: 3, title: 'Design & Development', text: 'We build the site with modern visuals and clean code.' },
    { id: 4, title: 'Testing', text: 'Every page is tested for performance and usability.' },
    { id: 5, title: 'Launch & Support', text: 'Go live with ongoing support and improvements.' }
  ]

  return (
    <section id="process" className="py-20 bg-[#F7F3EC]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">HOW I WORK</h2>
          <p className="section-subtitle mt-4">A clear process that keeps projects efficient and predictable.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {steps.map(step => (
            <div key={step.id} className="card text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#080808] text-[#C8A96A] font-bold">{step.id}</div>
              <h3 className="text-lg font-bold text-[#080808] mb-3">{step.title}</h3>
              <p className="text-[#667085]">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
