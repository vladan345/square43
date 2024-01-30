import styles from "./styles/Videos.module.css";
import Image from "next/image";

export default function Videos() {
  return (
    <section className={styles.Videos}>
      <div className={styles.tile}>
        <Image
          src="/images/gogaudi/person_1.webp"
          alt="GoGaudi senior"
          width={436}
          height={470}
        />
      </div>
      <div className={styles.tile}>
        <Image
          src="/images/gogaudi/person_2.webp"
          alt="GoGaudi senior"
          width={638}
          height={489}
        />
      </div>
      <div className={styles.tile}>
        <Image
          src="/images/gogaudi/person_3.webp"
          alt="GoGaudi senior"
          width={514}
          height={470}
        />
      </div>
      <div className={styles.tile}>
        <Image
          src="/images/gogaudi/person_4.webp"
          alt="GoGaudi senior"
          width={471}
          height={498}
        />
      </div>
      <div className={styles.tile}>
        <Image
          src="/images/gogaudi/person_5.webp"
          alt="GoGaudi senior"
          width={592}
          height={503}
        />
      </div>
      <div className={styles.tile}>
        <Image
          src="/images/gogaudi/person_6.webp"
          alt="GoGaudi senior"
          width={476}
          height={481}
        />
      </div>
    </section>
  );
}
