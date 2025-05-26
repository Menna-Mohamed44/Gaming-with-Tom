import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HeroSection.module.css'

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Welcome to <span className={styles.gradientText}>Gaming with Tom</span>
            </h1>
            <p className={styles.subtitle}>
              Experience the most spine-chilling horror gaming content on YouTube. Join me as we dive into the darkest
              corners of gaming.
            </p>
            <div className={styles.buttons}>
              <a
                href="https://youtube.com/@tomarius?si=QDO0hwxDH-lLZKbA"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.button} ${styles.primaryButton}`}
              >
                ▶️ Watch Now
              </a>
              <Link to="/discord" className={`${styles.button} ${styles.secondaryButton}`}>
                👥 Join Discord
              </Link>
              <Link to="/subscribe" className={`${styles.button} ${styles.outlineButton}`}>
                🔔 Subscribe
              </Link>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageGlow}></div>
              <div className={styles.imageBorder}>
                <img
                  src="/images/Tom.jpg"
                  alt="Tom - Gaming with Tom"
                  className={styles.profileImage}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>200+</div>
            <div className={styles.statLabel}>Horror Games Played</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>1K+</div>
            <div className={styles.statLabel}>Subscribers</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>Frequent</div>
            <div className={styles.statLabel}>Uploads</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection