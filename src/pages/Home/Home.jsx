import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
      <HeroSection />
    </div>
  )
}

export default Home