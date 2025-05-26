import React from 'react'
import styles from './About.module.css'

const About = () => {
  const features = [
    {
      icon: '💀',
      title: 'Horror Gaming Expert',
      description: 'With years of experience in horror gaming, Tom brings you the most terrifying and thrilling gameplay experiences. From indie horror gems to AAA nightmare fuel, no game is too scary to tackle.'
    },
    {
      icon: '🎮',
      title: 'Authentic Reactions',
      description: 'What sets Gaming with Tom apart is the genuine, unfiltered reactions to the most spine-chilling moments. Every scream, every jump, every moment of terror is real and unscripted.'
    },
    {
      icon: '👥',
      title: 'Community Focused',
      description: 'Gaming with Tom isn\'t just a channel—it\'s a community of horror game enthusiasts. Join the Awesome Squad Discord server to connect with fellow fans and get exclusive content.'
    },
    {
      icon: '📹',
      title: 'Regular Content',
      description: 'New horror gaming content uploaded regularly, featuring the latest releases, hidden gems, and classic horror games that will keep you on the edge of your seat.'
    }
  ]

  return (
    <div className={`${styles.about} section`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            About <span className={styles.gradientText}>Gaming with Tom</span>
          </h1>
          <p className={styles.subtitle}>
            Dive into the terrifying world of horror gaming with Tom, your guide through the darkest corners of
            interactive entertainment.
          </p>
        </div>

        <div className={styles.features}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.mission}>
          <h2 className={styles.missionTitle}>The Mission</h2>
          <p className={styles.missionText}>
            Gaming with Tom exists to bring you the most authentic horror gaming experience possible. Whether you're a
            seasoned horror veteran or new to the genre, you'll find content that will thrill, terrify, and entertain.
            Join the journey into the unknown, where every game is a new nightmare waiting to unfold.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About