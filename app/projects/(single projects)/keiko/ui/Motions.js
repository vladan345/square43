import styles from "@/styles/section-css/keiko/Motions.module.css";

function Motions() {
  return (
    <div>
      <div className="wrapper">
        <h2 className={styles.title}>Promotional motion graphics</h2>
        <div className={styles.row}>
          <video playsInline autoPlay muted loop className={styles.video}>
            <source src="/images/keiko/Anim2.mp4" type="video/mp4" />
          </video>
          <video playsInline autoPlay muted loop className={styles.video}>
            <source src="/images/keiko/Anim3.mp4" type="video/mp4" />
          </video>
          <video playsInline autoPlay muted loop className={styles.video}>
            <source src="/images/keiko/Anim1.mp4" type="video/mp4" />
          </video>
        </div>
        <p className={styles.description}>
          Why stop at static images? There's no denying that short video formats
          are now a preferred format, so our production followed suit! There is
          additional freedom and creativity in the world of motion graphics,
          which allowed us to send a clear message to potential buyers: this
          product combines natural, organic materials, elegant design and
          unparalleled comfort - do NOT miss out.
        </p>
      </div>
    </div>
  );
}

export default Motions;
