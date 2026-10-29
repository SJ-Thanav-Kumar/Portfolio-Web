import { useState } from 'react'
import Navbar from './components/Navbar'
import Divider from './components/Divider'
import Footer from './components/Footer'
import FloatingToggle from './components/FloatingToggle'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Certifications from './sections/Certifications'
import Projects from './sections/Projects'
import Publications from './sections/Publications'
import Contact from './sections/Contacts'

function App() {
  const [showPublications, setShowPublications] = useState(true)

  return (
    <>
      <Navbar showPublications={showPublications} />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Experience />
        {/* <Divider />
        <Certifications /> */}
        <Divider />
        <Projects />
        {/* {showPublications && (
          <>
            <Divider />
            <Publications />
          </>
        )} */}
        <Divider />
        <Contact />
        <Footer />
      </main>
      {/* <FloatingToggle
        isHidden={!showPublications}
        onToggle={() => setShowPublications((prev) => !prev)}
      /> */}
    </>
  )
}

export default App