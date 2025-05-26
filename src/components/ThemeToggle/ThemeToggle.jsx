import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import styles from './ThemeToggle.module.css'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button className={styles.themeToggle} onClick={toggleTheme}>
      {theme === 'dark' ? (
        <span className={styles.icon}>☀️</span>
      ) : (
        <span className={styles.icon}>🌙</span>
      )}
    </button>
  )
}

export default ThemeToggle