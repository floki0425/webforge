import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Packages from './components/Packages'
import FeaturedWork from './components/FeaturedWork'
import Process from './components/Process'
import WhyWorkWithMe from './components/WhyWorkWithMe'
import About from './components/About'
import Testimonial from './components/Testimonial'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#F7F3EC] text-[#1F2933]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Packages />
        <FeaturedWork />
        <Process />
        <WhyWorkWithMe />
        <About />
        <Testimonial />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
