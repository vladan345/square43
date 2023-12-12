"use client";
import styles from "./styles/DesktopVideo.module.css";
function DesktopVideo() {
  return (
    <div className={styles.DesktopVideo}>
      <div className={styles.background}></div>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.videoWrap}>
          <div className={styles.topBar}>
            <div className={`${styles.circle} ${styles.fill}`}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
          </div>
          <video playsInline className={styles.video} autoPlay muted loop>
            <source
              src="/images/ownnew/desktop-video.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </div>
    </div>
  );
}

export default DesktopVideo;
