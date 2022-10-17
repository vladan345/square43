import React from "react";
import styles from "../../styles/section-css/ownnew/DesktopVideo.module.css";
function DesktopVideo() {
  return (
    <div class={styles.DesktopVideo}>
      <div className={styles.background}></div>
      <div className="wrapper">
        <div className={styles.videoWrap}>
          <div className={styles.topBar}>
            <div className={`${styles.circle} ${styles.fill}`}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
          </div>
          <video className={styles.video} type="video/mp4" autoPlay muted>
            <source src="/images/ownnew/desktop-video.mp4"></source>
          </video>
        </div>
      </div>
    </div>
  );
}

export default DesktopVideo;
