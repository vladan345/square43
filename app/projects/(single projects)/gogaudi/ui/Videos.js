import styles from "./styles/Videos.module.css";
import Image from "next/image";

export default function Videos() {
  return (
    <section className={styles.Videos}>
      <video autoPlay playsInline muted loop className={styles.video}>
        <source src="/images/gogaudi/desktop.mp4" type="video/mp4" />
      </video>
      <div className={styles.videoGrid}>
        <div className={styles.tile}>
          <video autoPlay playsInline muted loop>
            <source src="/images/gogaudi/mobile1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles.tile}>
          <video autoPlay playsInline muted loop>
            <source src="/images/gogaudi/mobile2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles.tile}>
          <video autoPlay playsInline muted loop>
            <source src="/images/gogaudi/mobile3.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles.tile}>
          <video autoPlay playsInline muted loop>
            <source src="/images/gogaudi/mobile4.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles.tile}>
          <video autoPlay playsInline muted loop>
            <source src="/images/gogaudi/mobile5.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles.tile}>
          <video autoPlay playsInline muted loop>
            <source src="/images/gogaudi/mobile6.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
