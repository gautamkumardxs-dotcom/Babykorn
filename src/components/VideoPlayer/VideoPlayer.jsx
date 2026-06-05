import React from 'react'
import styles from './VideoPlayer.module.css'
import video from '../../assets/videos/video.mp4'

const VideoPlayer = () => {
  return (
    <section className={styles.videoPlayer}>
      <div className={styles.videoContainer}>
        <video src={video} autoPlay loop  muted playsInline></video>
        </div>
    </section>
  )
}

export default VideoPlayer
