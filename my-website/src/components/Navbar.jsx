import React from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#080808]/95 text-white shadow-[0_2px_20px_rgba(0,0,0,0.28)] backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between gap-6">
          <a href="#home" className="flex min-w-0 items-center gap-4">
            <img
              src="/forge-logo.svg"
              alt="Forge"
              className="h-7 w-auto sm:h-8"
            />
            <span className="hidden h-8 w-px bg-white/10 sm:block" />
            <span className="hidden text-[10px] font-bold uppercase tracking-[0.2em] text-white/38 lg:block">
              Websites. Funnels. Systems.
            </span>
          </a>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-white/10 text-2xl text-white transition-colors hover:border-[#C8A96A]/60 hover:text-[#C8A96A] md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? 'x' : '+'}
          </button>

          <div className="hidden flex-1 items-center justify-center gap-7 text-sm font-semibold text-white/55 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors duration-200 hover:text-[#C8A96A]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center border border-[#C8A96A]/50 px-6 text-sm font-bold text-[#C8A96A] transition hover:border-[#C8A96A] hover:bg-[#C8A96A] hover:text-[#080808]"
            >
              Get a Quote
            </a>
          </div>
        </div>

        {isOpen && (
          <div className="border-t border-white/10 pb-6 md:hidden">
            <div className="grid gap-px bg-white/10 pt-px text-sm font-semibold">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="bg-[#080808] px-4 py-4 text-white/65 transition-colors hover:text-[#C8A96A]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-flex h-11 items-center justify-center bg-[#C8A96A] px-6 text-sm font-bold text-[#080808] transition hover:bg-[#d4b87a]"
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
