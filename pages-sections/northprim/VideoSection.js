import styles from "../../styles/section-css/northprim/VideoSection.module.css";
function VideoSection() {
  return (
    <div className={styles.videoWrap}>
      <video playsInline width="1920" autoPlay muted className={styles.video}>
        <source src="/images/northprim/S43_Astro_Video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoSection;
