import React from "react";
import styles from "../../styles/section-css/joker/Video.module.css";

function Video() {
  return (
    <div className={styles.Video}>
      <video className={styles.video} autoPlay muted loop>
        <source src="/images/joker/heroJoker.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
}

export default Video;
