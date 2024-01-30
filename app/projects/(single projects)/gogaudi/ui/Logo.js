import Image from "next/image";
import styles from "./styles/Logo.module.css";

function Logo() {
  return (
    <section className={styles.Logo}>
      <div className="wrapper">
        <h2>Logo</h2>
        <p>
          Soft edges, clear, thick typography in a playful font - this was the
          starting point of our design. Our solution includes the abbreviated
          version which can come in hand for sections or merchandise with
          limited space.
        </p>
        <div className={styles.compare}>
          <div className={styles.col}>
            <div className={styles.imageBackground}>
              <Image
                width={339}
                height={115}
                alt="old logo"
                src="/images/gogaudi/logo-old.svg"
              />
            </div>
            <span className={styles.caption}>OLD</span>
          </div>
          <div className={styles.col}>
            <div className={styles.imageBackground}>
              <Image
                width={417}
                height={78}
                alt="new logo"
                src="/images/gogaudi/logo-new.svg"
              />
            </div>
            <span className={styles.caption}>NEW</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Logo;
