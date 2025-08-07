import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#welcome">Skip to content</a>
      <Header />
      <main id="main" className="site-main" tabIndex={-1}>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}


