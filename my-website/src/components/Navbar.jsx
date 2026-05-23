import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 gap-6">
          <div>
            <h1 className="text-xl font-bold text-black">BuildFlow Studio</h1>
            <p className="text-xs uppercase tracking-[.2em] text-gray-600 font-semibold">Websites. Funnels. Systems.</p>
          </div>

          <button
            type="button"
            className="md:hidden text-3xl text-black"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>

          <div className="hidden md:flex md:items-center md:justify-center md:flex-1 gap-8 text-sm font-medium text-gray-700">
            <a href="#home" className="hover:text-black">Home</a>
            <a href="#services" className="hover:text-black">Services</a>
            <a href="#packages" className="hover:text-black">Packages</a>
            <a href="#portfolio" className="hover:text-black">Portfolio</a>
            <a href="#process" className="hover:text-black">Process</a>
            <a href="#about" className="hover:text-black">About</a>
            <a href="#faq" className="hover:text-black">FAQ</a>
          </div>

          <div className="hidden md:block">
            <a href="#contact" className="btn-primary">Get a Quote</a>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6 border-t border-gray-200">
            <div className="flex flex-col gap-4 pt-4 text-gray-700 text-sm font-medium">
              <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
              <a href="#packages" onClick={() => setIsOpen(false)}>Packages</a>
              <a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a>
              <a href="#process" onClick={() => setIsOpen(false)}>Process</a>
              <a href="#about" onClick={() => setIsOpen(false)}>About</a>
              <a href="#faq" onClick={() => setIsOpen(false)}>FAQ</a>
              <a href="#contact" className="btn-primary w-full text-center">Get a Quote</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
