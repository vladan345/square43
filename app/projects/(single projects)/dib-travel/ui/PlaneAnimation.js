import styles from "./styles/PlaneAnimation.module.css";
import Image from "next/image";

function PlaneAnimation() {
  return (
    <div className={styles.planeWrap}>
      <div className={styles.background}>
        <Image
          src="/images/dib-travel/airportBg.svg"
          alt="Airport Background"
          width={1920}
          height={1080}
          style={{ objectFit: "cover" }}
          className="w-full !max-w-none"
        />
      </div>
      <div className={styles.plane}>
        <Image
          src="/images/dib-travel/plane.svg"
          alt="Airport Background"
          width={1000}
          height={533}
          className="w-[42vw]"
        />
      </div>
      <div className={styles.foreground}>
        <Image
          src="/images/dib-travel/airportFg.svg"
          alt="Airport Background"
          width={1920}
          height={1080}
          style={{ objectFit: "cover" }}
          className="w-full !max-w-none"
        />
      </div>
      <div className={styles.suitcaseWrap}>
        <div className={styles.suitcase}>
          <Image
            src="/images/dib-travel/Tekst.svg"
            alt="Airport Background"
            width={7000}
            height={648}
          />
        </div>
        <div className={styles.suitcase}>
          <Image
            src="/images/dib-travel/Tekst.svg"
            alt="Airport Background"
            width={7000}
            height={648}
          />
        </div>
      </div>
    </div>
  );
}

export default PlaneAnimation;
