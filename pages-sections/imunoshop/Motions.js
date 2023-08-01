import styles from "../../styles/section-css/imunoshop/Motions.module.css";
import Image from "next/image";

function Motions() {
  return (
    <div>
      <div className="wrapper">
        <h2 className={styles.title}>Promotional motion graphics</h2>
        <div className={styles.row}>
          <video playsInline autoPlay muted loop className={styles.video}>
            <source src="/images/imunoshop/motion1.mp4" type="video/mp4" />
          </video>
          <video playsInline autoPlay muted loop className={styles.video}>
            <source src="/images/imunoshop/motion2.mp4" type="video/mp4" />
          </video>
          <video playsInline autoPlay muted loop className={styles.video}>
            <source src="/images/imunoshop/motion3.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Motions;
