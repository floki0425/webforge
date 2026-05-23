import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[#F7F3EC] border-b border-[#E7E1D6] shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 gap-6">
          <div>
            <h1 className="text-xl font-bold text-[#080808]">Webforge</h1>
            <p className="text-xs uppercase tracking-[.15em] text-[#667085] font-semibold">Websites. Funnels. Systems.</p>
          </div>

          <button
            type="button"
            className="md:hidden text-3xl text-[#080808]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>

          <div className="hidden md:flex md:items-center md:justify-center md:flex-1 gap-8 text-sm font-medium text-[#1F2933]">
            <a href="#home" className="hover:text-[#C8A96A] transition-colors">Home</a>
            <a href="#services" className="hover:text-[#C8A96A] transition-colors">Services</a>
            <a href="#packages" className="hover:text-[#C8A96A] transition-colors">Packages</a>
            <a href="#portfolio" className="hover:text-[#C8A96A] transition-colors">Portfolio</a>
            <a href="#process" className="hover:text-[#C8A96A] transition-colors">Process</a>
            <a href="#about" className="hover:text-[#C8A96A] transition-colors">About</a>
            <a href="#faq" className="hover:text-[#C8A96A] transition-colors">FAQ</a>
          </div>

          <div className="hidden md:block">
            <a href="#contact" className="btn-primary">Get a Quote</a>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6 border-t border-[#E7E1D6]">
            <div className="flex flex-col gap-4 pt-4 text-[#1F2933] text-sm font-medium">
              <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-[#C8A96A]">Home</a>
              <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-[#C8A96A]">Services</a>
              <a href="#packages" onClick={() => setIsOpen(false)} className="hover:text-[#C8A96A]">Packages</a>
              <a href="#portfolio" onClick={() => setIsOpen(false)} className="hover:text-[#C8A96A]">Portfolio</a>
              <a href="#process" onClick={() => setIsOpen(false)} className="hover:text-[#C8A96A]">Process</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-[#C8A96A]">About</a>
              <a href="#faq" onClick={() => setIsOpen(false)} className="hover:text-[#C8A96A]">FAQ</a>
              <a href="#contact" className="btn-primary w-full text-center">Get a Quote</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
