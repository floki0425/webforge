import React from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[#080808] border-b border-[#1a1a1a] shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 gap-6">
          <div>
            <h1 className="text-xl font-bold text-[#F5F0E8]">Forge</h1>
            <p className="text-xs uppercase tracking-[.15em] text-[#7a7568] font-semibold">Websites. Funnels. Systems.</p>
          </div>

          <button
            type="button"
            className="md:hidden text-3xl text-[#F5F0E8] hover:text-[#C8A96A] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>

          <div className="hidden md:flex md:items-center md:justify-center md:flex-1 gap-8 text-sm font-medium text-[#C4BFB4]">
            <a href="#home" className="hover:text-[#C8A96A] transition-colors duration-200">Home</a>
            <a href="#services" className="hover:text-[#C8A96A] transition-colors duration-200">Services</a>
            <a href="#packages" className="hover:text-[#C8A96A] transition-colors duration-200">Packages</a>
            <a href="#portfolio" className="hover:text-[#C8A96A] transition-colors duration-200">Portfolio</a>
            <a href="#process" className="hover:text-[#C8A96A] transition-colors duration-200">Process</a>
            <a href="#about" className="hover:text-[#C8A96A] transition-colors duration-200">About</a>
            <a href="#faq" className="hover:text-[#C8A96A] transition-colors duration-200">FAQ</a>
          </div>

          <div className="hidden md:block">
            <a href="#contact" className="inline-block px-6 py-2.5 bg-[#C8A96A] text-[#080808] text-sm font-semibold rounded-md hover:bg-[#d4b87a] transition-colors duration-200 shadow-[0_0_12px_rgba(200,169,106,0.25)]">
              Get a Quote
            </a>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6 border-t border-[#1a1a1a]">
            <div className="flex flex-col gap-4 pt-4 text-[#C4BFB4] text-sm font-medium">
              <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-[#C8A96A] transition-colors duration-200">Home</a>
              <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-[#C8A96A] transition-colors duration-200">Services</a>
              <a href="#packages" onClick={() => setIsOpen(false)} className="hover:text-[#C8A96A] transition-colors duration-200">Packages</a>
              <a href="#process" onClick={() => setIsOpen(false)} className="hover:text-[#C8A96A] transition-colors duration-200">Process</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-[#C8A96A] transition-colors duration-200">About</a>
              <a href="#faq" onClick={() => setIsOpen(false)} className="hover:text-[#C8A96A] transition-colors duration-200">FAQ</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="inline-block text-center px-6 py-2.5 bg-[#C8A96A] text-[#080808] text-sm font-semibold rounded-md hover:bg-[#d4b87a] transition-colors duration-200 shadow-[0_0_12px_rgba(200,169,106,0.25)]">
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
