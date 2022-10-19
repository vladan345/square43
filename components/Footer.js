import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/component-css/Footer.module.css";

function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={`wrapper ${styles.wrapper}`}>
        <Link href="/">
          <a className={styles.logo}>square43</a>
        </Link>
        <nav className={styles.nav}>
          <a className={styles.footerLink} href="?#">
            Instagram
          </a>
          <a className={styles.footerLink} href="?#">
            Facebook
          </a>
          <a className={styles.footerLink} href="?#">
            Linked In
          </a>
        </nav>
        <p className={styles.copy}>&copy; 2022 Square43</p>
      </div>
    </div>
  );
}

export default Footer;
