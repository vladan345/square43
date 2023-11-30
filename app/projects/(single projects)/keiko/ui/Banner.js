import styles from "@/styles/section-css/keiko/Banner.module.css";
import Image from "next/image";

function Banner() {
  return (
    <div className={styles.Banner}>
      <div className={styles.stripe}></div>
      <Image
        src="/images/keiko/bannerWave.svg"
        alt="Decorative wave Keiko"
        fill
        style={{ objectFit: "cover" }}
        className={styles.splash}
      />

      <Image
        className={styles.bannerImage}
        src="/images/keiko/beba-keiko.webp"
        alt="Keiko Baby"
        width={800}
        height={800}
      />

      <div className={styles.wrapper}>
        <Image
          src="/images/keiko/knitted-clouds.svg"
          alt="Knitted clouds"
          width={845}
          height={100}
          className={styles.text}
        />
      </div>
    </div>
  );
}

export default Banner;
