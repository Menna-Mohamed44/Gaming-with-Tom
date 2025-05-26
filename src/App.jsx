import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navigation from './components/Navigation/Navigation'
import HeroSection from './components/HeroSection/HeroSection'
import About from './components/About/About'
import Videos from './components/Videos/Videos'
import Discord from './components/Discord/Discord'
import Subscribe from './components/Subscribe/Subscribe'
import styles from './App.module.css'

function App() {
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