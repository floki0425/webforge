const studioLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
]

const legalLinks = [
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#080808] text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-16 lg:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.4fr_0.7fr_0.7fr_0.9fr]">
          <div>
            <a
              href="#home"
              className="inline-flex text-3xl font-black tracking-[-0.04em] text-[#C8A96A]"
            >
              Webforge
            </a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/52">
              Precision handcrafted websites, funnels, and systems for small
              businesses ready to grow online.
            </p>
          </div>

          <FooterColumn title="Studio" links={studioLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
          <NewsletterSignup />
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2024 Webforge Digital Studio.</p>
          <p>Websites. Funnels. Systems.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-white/38">
        {title}
      </h2>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm font-medium text-white/62 transition-colors hover:text-[#C8A96A]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function NewsletterSignup() {
  return (
    <div>
      <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-white/38">
        Start
      </h2>
      <p className="mb-6 max-w-xs text-sm leading-7 text-white/52">
        Ready to build a sharper website, funnel, or system?
      </p>
      <a
        href="#contact"
        className="inline-flex h-11 items-center justify-center border border-[#C8A96A]/45 px-6 text-sm font-bold text-[#C8A96A] transition hover:border-[#C8A96A] hover:bg-[#C8A96A] hover:text-[#080808]"
      >
        Get a Quote
      </a>
    </div>
  )
}
