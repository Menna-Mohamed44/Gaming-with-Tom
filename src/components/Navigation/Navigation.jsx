import React, { useState } from 'react'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import styles from './Navigation.module.css'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#videos', label: 'Videos' },
    { href: '#discord', label: 'Discord' },
    { href: '#subscribe', label: 'Subscribe' },
  ]

  const handleNavClick = (href) => {
    setIsOpen(false)
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          <a href="#home" className={styles.logo} onClick={() => handleNavClick('#home')}>
            <span className={`${styles.logoText} horror-font`}>Gaming with Tom</span>
          </a>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Button */}
          <div className={styles.mobileControls}>
            <ThemeToggle />
            <button
              className={styles.mobileToggle}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className={styles.hamburger}></span>
              <span className={styles.hamburger}></span>
              <span className={styles.hamburger}></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className={styles.mobileNav}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={styles.mobileNavLink}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation