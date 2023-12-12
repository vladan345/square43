import styles from "./styles/Video.module.css";

function Video() {
  return (
    <div className={styles.Video}>
      <div className={`${styles.wrapper} wrapper`}>
        <video playsInline className={styles.video} autoPlay muted loop>
          <source src="/images/joker/heroJoker.mp4" type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
}

export default Video;
