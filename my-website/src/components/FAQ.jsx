import FAQItem from './FAQItem'

export default function FAQ() {
  const faqs = [
    { id: 1, question: 'How long does it take to build a website?', answer: 'Most projects take 2-4 weeks depending on complexity. Simple websites are faster, while larger systems need more planning and testing.' },
    { id: 2, question: 'Do you provide domain and hosting?', answer: 'Yes, I can help you secure domain registration and hosting, or support your existing provider setup.' },
    { id: 3, question: 'Can I see samples of your work?', answer: 'Absolutely. Check the Featured Work section above, and I can share additional samples tailored to your business.' },
    { id: 4, question: 'Do you offer revisions?', answer: 'Yes. Each package includes revisions, and I also provide after-launch support for updates.' },
    { id: 5, question: 'What if I need changes after the website is live?', answer: 'I offer ongoing maintenance and support plans so your site stays fresh and effective after launch.' }
  ]

  return (
    <section id="faq" className="bg-[#F7F3EC] px-6 py-20 text-[#080808] lg:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 border-b border-[#DED6C8] pb-8">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.32em] text-[#C8A96A]">
            FAQ
          </p>
          <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
              Common questions answered clearly.
            </h2>
            <p className="max-w-md text-sm leading-7 text-[#080808]/55 md:justify-self-end">
              A quick guide to timelines, hosting, revisions, samples, and
              after-launch support.
            </p>
          </div>
        </div>

        <div className="grid gap-px overflow-hidden border border-[#DED6C8] bg-[#DED6C8]">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
