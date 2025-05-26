import React from 'react'
import VideoCard from '../VideoCard/VideoCard'
import styles from './Videos.module.css'

const Videos = () => {
  const featuredVideo = {
    id: 'yRhlJSogojc',
    title: 'I FORGOT TO HIDE THE KNIVES!!!! [GO TO BED]',
    url: 'https://youtu.be/yRhlJSogojc?si=l9kDxggIJ-cFQK6z',
  }

  const favoriteVideos = [
    {
      id: 'T5JfH_3aTks',
      title: 'BY FAR THE SCARIEST GAME I\'VE PLAYED EVER!!!! [Ethel]',
      url: 'https://youtu.be/T5JfH_3aTks?si=RdFsbJjIB3_SoSl3',
    },
    {
      id: 'miQZvgEQXiw',
      title: 'I DROPPED THE SOAP!!! [Rinse and Repeat]',
      url: 'https://youtu.be/miQZvgEQXiw?si=XhuJRAUHv2LPeDoS',
    },
    {
      id: 'KM0yLOg5K9Q',
      title: 'DO NOT Play This Game.. I AM NOW SCARED OF TRAINS [SHINKANSEN 0]',
      url: 'https://youtu.be/KM0yLOg5K9Q?si=7P-uoLnuSn2PoX0O',
    },
    {
      id: 'jvEmWGLCEyM',
      title: 'What\'s Hiding Inside the Great Pyramids?! (I Wasn\'t Ready!)',
      url: 'https://youtu.be/jvEmWGLCEyM?si=Dwb1X7ZUeSJIRtlV',
    },
  ]

  return (
    <div className={`${styles.videos} section`}>
      <div className={styles.container}>
        <div className={`${styles.header} title-animate`}>
          <h1 className={styles.title}>
            <span className={styles.gradientText}>Featured Videos</span>
          </h1>
          <p className={styles.subtitle}>The most terrifying moments from Gaming with Tom</p>
        </div>

        <div className={styles.featuredSection}>
          <h2 className={`${styles.sectionTitle} animate-on-scroll`}>Featured Video</h2>
          <div className={`${styles.featuredContainer} animate-on-scroll`}>
            <VideoCard video={featuredVideo} featured />
          </div>
        </div>

        <div className={styles.favoritesSection}>
          <h2 className={`${styles.sectionTitle} animate-on-scroll`}>My Other Favorite Videos</h2>
          <div className={styles.videosGrid}>
            {favoriteVideos.map((video, index) => (
              <div key={video.id} className="card-animate">
                <VideoCard video={video} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Videos
