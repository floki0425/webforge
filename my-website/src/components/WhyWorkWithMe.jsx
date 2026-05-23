export default function WhyWorkWithMe() {
  const items = [
    { id: 1, title: 'Focused on Results', text: 'Every site is built to turn visitors into customers.' },
    { id: 2, title: 'Clean & Modern Design', text: 'Minimalist visual systems that communicate clearly.' },
    { id: 3, title: 'Reliable & Transparent', text: 'Clear timelines, honest pricing, and dependable delivery.' },
    { id: 4, title: 'Support After Launch', text: 'Ongoing support to keep your site growing.' }
  ]

  return (
    <section id="why" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">WHY WORK WITH ME</h2>
          <p className="section-subtitle mt-4">A partnership built around clarity, performance, and long-term growth.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map(item => (
            <div key={item.id} className="card">
              <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
