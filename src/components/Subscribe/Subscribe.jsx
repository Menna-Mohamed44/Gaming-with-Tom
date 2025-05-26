import React from 'react'
import styles from './Subscribe.module.css'

const Subscribe = () => {
  const socialLinks = [
    {
      name: 'YouTube',
      url: 'https://youtube.com/@tomarius?si=QDO0hwxDH-lLZKbA',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className={styles.socialSvg}>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      color: styles.youtube
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/realtomarius?igsh=aHFjb3doanVxamls',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className={styles.socialSvg}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: styles.instagram
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/@tomarius',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className={styles.socialSvg}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: styles.twitter
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@gamingwithtomarius?_t=8nAXVF6pbEB&_r=1&fbclid=PAQ0xDSwKhUfZleHRuA2FlbQIxMQABp4nqJU_f33AH8UvhnYt2EqZ2uTTMJCkOIB8XedEXg6oBxRlhmSb5e9yL2FIv_aem_lLmBZmE7wTHCv8k7_wdIaQ',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className={styles.socialSvg}>
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
      color: styles.tiktok
    }
  ]

  return (
    <div className={`${styles.subscribe} section`}>
      <div className={styles.container}>
        <div className={`${styles.header} title-animate`}>
          <h1 className={styles.title}>
            <span className={styles.gradientText}>Subscribe & Connect</span>
          </h1>
          <p className={styles.subtitle}>
            Stay updated with the latest horror gaming content and connect with Tom across all platforms.
          </p>
        </div>

        <div className={`${styles.youtubeSection} animate-on-scroll`}>
          <div className={styles.youtubeIcon}>
            <svg viewBox="0 0 24 24" fill="currentColor" className={styles.youtubeSvg}>
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </div>
          <h2 className={styles.youtubeTitle}>Subscribe to Gaming with Tom</h2>
          <p className={styles.youtubeText}>
            Don't miss any spine-chilling content! Subscribe and enable notifications to be the first to watch new
            videos.
          </p>
          <div className={styles.youtubeButtons}>
            <a
              href="https://youtube.com/@tomarius?si=QDO0hwxDH-lLZKbA"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.subscribeButton}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles.buttonIcon}>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Subscribe Now
            </a>
            <a
              href="https://youtube.com/@tomarius?si=QDO0hwxDH-lLZKbA"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.notificationButton}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles.buttonIcon}>
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
              </svg>
              Enable Notifications
            </a>
          </div>
        </div>

        <div className={styles.socialSection}>
          <h2 className={`${styles.socialTitle} animate-on-scroll`}>Connect With Me</h2>
          <div className={styles.socialGrid}>
            {socialLinks.map((social, index) => (
              <div key={social.name} className={`${styles.socialCard} card-animate`}>
                <div className={styles.socialInfo}>
                  <span className={`${styles.socialIcon} ${social.color}`}>{social.icon}</span>
                  <span className={styles.socialName}>{social.name}</span>
                </div>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.followButton}
                >
                  Follow
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.contactSection}>
          <div className={styles.contactGrid}>
            <div className={`${styles.contactCard} card-animate`}>
              <div className={styles.contactIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor" className={styles.contactSvg}>
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className={styles.contactTitle}>Email</h3>
              <a href="mailto:contact@gamingwithtom.com" className={styles.contactLink}>
                contact@gamingwithtom.com
              </a>
            </div>
            <div className={`${styles.contactCard} card-animate`}>
              <div className={styles.contactIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor" className={styles.contactSvg}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className={styles.contactTitle}>Location</h3>
              <p className={styles.contactText}>Gaming World, Internet</p>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Gaming with Tom. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            Made with <span className={styles.heart}>❤️</span> for horror game fans
          </p>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
