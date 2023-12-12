import Image from "next/image";
import styles from "./styles/Banner.module.css";

function Banner() {
  return (
    <section className={styles.Banner}>
      <div className="wrapper">
        <div className={styles.flex}>
          <Image
            src="/images/zeder/logo.svg"
            alt="Logotype"
            width={307}
            height={40}
          />
          <Image
            src="/images/zeder/shield.svg"
            alt="Logotype"
            width={307}
            height={374}
          />
          <Image
            src="/images/zeder/text.svg"
            alt="Logotype"
            width={350}
            height={268}
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
