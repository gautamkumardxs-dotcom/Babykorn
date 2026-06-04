import React from 'react'
import styles from './VideoPlayer.module.css'

const VideoPlayer = () => {
  return (
    <section className={styles.videoPlayer}>
        <div className={styles.videoContainer}>
            <iframe
            width='100%'
               
                src="src\assets\videos\video.mp4"
                title="YouTube video player"
                // frameBorder="" hii
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            </div>
    </section>
  )
}

export default VideoPlayer
