import Image from "next/image";
import styles from "./styles/Laptop.module.css";

export default function Laptop() {
  return (
    <section className={styles.Laptop}>
      <div className="wrapper">
        <h2>
          Web Design
          <br /> & Development
        </h2>
        <div className={styles.textRow}>
          <p>
            Digital presence has become an indispensable step in the development
            of a new brand. Returning to stage 1, we aimed to apply the ideal of
            minimalism and all things artistic: grainy, even smudged textures,
            breathtaking visuals of top-tier pottery - everything that is an
            irreplaceable part of the pottery creation process.
          </p>
          <p>
            In terms of web development, we ensured that the website was
            presented in all its glory and uniqueness for all device types.
            Recognizing the critical importance of an adaptable interface in
            today's dynamic online ecosystem, our team undertook a comprehensive
            approach to ensure optimal user experience across various devices.
            Klei Works is now available for desktop, tablet and mobile.
          </p>
        </div>
      </div>

      <div className={styles.background}>
        <Image
          src="/images/klei/laptop_bg.webp"
          alt="Background laptop"
          fill
          className={styles.laptopBg}
        />
        <Image
          src="/images/klei/laptop.webp"
          alt="Laptop"
          width={1279}
          height={1007}
          className={styles.laptopImage}
        />
        <video playsInline autoPlay muted loop className={styles.video}>
          <source src="/images/klei/laptop-video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
