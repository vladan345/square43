import styles from "@/styles/section-css/dib-travel/Taglines.module.css";

function Taglines() {
  return (
    <div>
      <video autoPlay muted loop playsInline className={styles.video}>
        <source src="/images/dib-travel/tagline-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Taglines;
