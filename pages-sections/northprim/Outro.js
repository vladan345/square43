import React from "react";
import Link from "next/link";
import styles from "../../styles/section-css/Outro.module.css";

function Outro() {
  return (
    <div className={styles.Outro}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <h2 className={styles.title}>
          Check out our other work, if you so please!
        </h2>
        <p className={styles.description}>
          We ain&apos;t no one trick pony! Take a look a the variety of other
          work we&apos;ve done with many excellent companies.
        </p>
        <div className={styles.links}>
          <Link href="/">
            <a className={styles.outroLink}>Projects</a>
          </Link>
          <Link href="/services">
            <a className={styles.outroLink}>Services</a>
          </Link>
          <Link href="/">
            <a className={styles.outroLink}>Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Outro;
