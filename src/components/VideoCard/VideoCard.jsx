import React, { useState } from 'react'
import styles from './VideoCard.module.css'

const VideoCard = ({ video, featured = false }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`

  const handlePlay = () => {
    setIsPlaying(true)
  }

  if (isPlaying) {
    return (
      <div className={`${styles.videoContainer} ${featured ? styles.featured : ''}`}>
        <iframe
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
          title={video.title}
          className={styles.iframe}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className={`${styles.videoCard} ${featured ? styles.featuredCard : ''}`}>
      <div className={styles.thumbnailContainer}>
        <img
          src={thumbnailUrl || "/placeholder.svg"}
          alt={video.title}
          className={styles.thumbnail}
        />
        <div className={styles.overlay}></div>
        <button className={styles.playButton} onClick={handlePlay}>
          <span className={styles.playIcon}>▶️</span>
        </button>
      </div>
      <div className={styles.videoInfo}>
        <h3 className={`${styles.videoTitle} ${featured ? styles.featuredTitle : ''}`}>
          {video.title}
        </h3>
      </div>
    </div>
  )
}

export default VideoCard