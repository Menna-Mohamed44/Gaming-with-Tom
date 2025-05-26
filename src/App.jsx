import React, { useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navigation from './components/Navigation/Navigation'
import HeroSection from './components/HeroSection/HeroSection'
import About from './components/About/About'
import Videos from './components/Videos/Videos'
import Discord from './components/Discord/Discord'
import Subscribe from './components/Subscribe/Subscribe'
import styles from './App.module.css'

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        }
      })
    }, observerOptions)

    // Observe all elements with animation classes
    const animateElements = document.querySelectorAll('.animate-on-scroll, .card-animate, .title-animate')
    animateElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <ThemeProvider>
      <div className={styles.app}>
        <Navigation />
        <main className={styles.main}>
          <section id="home">
            <HeroSection />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="videos">
            <Videos />
          </section>
          <section id="discord">
            <Discord />
          </section>
          <section id="subscribe">
            <Subscribe />
          </section>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
