import FAQItem from './FAQItem'

export default function FAQ() {
  const faqs = [
    { id: 1, question: 'How long does it take to build a website?', answer: 'Most projects take 2–4 weeks depending on complexity. Simple websites are faster, while larger systems need more planning and testing.' },
    { id: 2, question: 'Do you provide domain and hosting?', answer: 'Yes, I can help you secure domain registration and hosting, or support your existing provider setup.' },
    { id: 3, question: 'Can I see samples of your work?', answer: 'Absolutely. Check the Featured Work section above, and I can share additional samples tailored to your business.' },
    { id: 4, question: 'Do you offer revisions?', answer: 'Yes. Each package includes revisions, and I also provide after-launch support for updates.' },
    { id: 5, question: 'What if I need changes after the website is live?', answer: 'I offer ongoing maintenance and support plans so your site stays fresh and effective after launch.' }
  ]

  return (
    <section id="faq" className="py-20 bg-[#F7F3EC]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">FAQ</h2>
          <p className="section-subtitle mt-4">Common questions answered clearly.</p>
        </div>
        <div className="grid gap-4">
          {faqs.map(faq => (
            <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
