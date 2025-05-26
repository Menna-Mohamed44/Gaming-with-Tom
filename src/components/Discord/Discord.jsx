import React from 'react'
import { MessageCircle, Zap, Crown, Users } from 'lucide-react'
import styles from './Discord.module.css'

const Discord = () => {
  const features = [
    {
      icon: <MessageCircle className={styles.featureIconSvg} />,
      title: 'Discuss Latest Releases',
      description: 'Stay up-to-date with the newest horror games and share your thoughts with fellow enthusiasts.'
    },
    {
      icon: <Zap className={styles.featureIconSvg} />,
      title: 'Share Gameplay Tips',
      description: 'Exchange strategies, secrets, and survival tips for the most challenging horror games.'
    },
    {
      icon: <Crown className={styles.featureIconSvg} />,
      title: 'Exclusive Content',
      description: 'Get exclusive access to behind-the-scenes content and be the first to know about upcoming streams.'
    },
    {
      icon: <Users className={styles.featureIconSvg} />,
      title: 'Connect with Gamers',
      description: 'Build friendships with like-minded horror gaming enthusiasts from around the world.'
    }
  ]

  return (
    <div className={`${styles.discord} section`}>
      <div className={styles.container}>
        <div className={`${styles.header} title-animate`}>
          <h1 className={styles.title}>
            Join the <span className={styles.gradientText}>Awesome Squad</span>
          </h1>
          <p className={styles.subtitle}>
            A thriving Discord server where horror game fans come together to discuss the latest releases, share
            gameplay tips, and connect with like-minded gamers.
          </p>
          <a
            href="https://discord.com/invite/BvynsM4qjN"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.joinButton} animate-on-scroll`}
          >
            <Users className={styles.buttonIcon} />
            Join Discord Server
          </a>
        </div>

        <div className={styles.features}>
          {features.map((feature, index) => (
            <div key={index} className={`${styles.featureCard} card-animate`}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={`${styles.callToAction} animate-on-scroll`}>
          <h2 className={styles.ctaTitle}>Ready to Join the Squad?</h2>
          <p className={styles.ctaText}>
            Don't miss out on exclusive content, early access to videos, and the chance to be part of an amazing horror
            gaming community. Click the button below to join us on Discord!
          </p>
          <a
            href="https://discord.com/invite/BvynsM4qjN"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            <Users className={styles.buttonIcon} />
            Join Now - It's Free!
          </a>
        </div>
      </div>
    </div>
  )
}

export default Discord
