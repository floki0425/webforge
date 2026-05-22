import FAQItem from './FAQItem'

export default function FAQ() {
  const faqs = [
    {
      id: 1,
      question: 'How long does it take to build a website?',
      answer: 'Most projects take 2-4 weeks depending on complexity. A simple website might be ready in 2 weeks, while a custom e-commerce store could take 4-6 weeks. We'll provide a clear timeline at the start.'
    },
    {
      id: 2,
      question: 'Do you provide domain and hosting?',
      answer: 'I help you get domain and hosting set up, or work with your existing setup. Hosting typically costs $5-20/month depending on your needs. I can recommend reliable providers.'
    },
    {
      id: 3,
      question: 'Can I see samples of your work?',
      answer: 'Yes! Check out the Featured Work section above to see case studies. I have many more examples available. Feel free to reach out and I\'ll share relevant samples for your project type.'
    },
    {
      id: 4,
      question: 'Do you offer revisions?',
      answer: 'Absolutely. Each package includes a set number of revisions (typically 3-5). After launch, I offer maintenance and support packages for ongoing changes.'
    },
    {
      id: 5,
      question: 'What if I need changes after the website is live?',
      answer: 'Easy! I offer ongoing support and maintenance plans. You can request changes anytime, and I\'ll handle them quickly. It\'s just a matter of agreeing on the scope and timeline.'
    }
  ]

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <h3 className="section-subtitle">Got Questions? I Have Answers</h3>
        
        <div className="faq-list">
          {faqs.map(faq => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
