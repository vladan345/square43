import Image from "next/image";
import styles from "@/styles/section-css/zeder/Videos.module.css";

function Videos() {
  return (
    <section className={styles.Videos}>
      <div className={`wrapper ${styles.wrapper}`}>
        <video autoPlay playsInline muted loop className={styles.video}>
          <source src="/images/zeder/video1.mp4" type="video/mp4" />
        </video>
        <div className={styles.video}>
          <video autoPlay playsInline muted loop>
            <source src="/images/zeder/video2.mp4" type="video/mp4" />
          </video>
          <Image
            src="/images/zeder/symbol.svg"
            width={105}
            height={105}
            alt="Zeder logo"
          />
        </div>
      </div>
    </section>
  );
}

export default Videos;
