import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/component-css/Footer.module.css";

function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={`wrapper ${styles.wrapper}`}>
        <Link href="/">
          <a className={styles.logo}>
            <Image src="/logo.svg" width="45" height="45" alt="square43 logo" />
          </a>
        </Link>
        <nav className={styles.nav}>
          <a className={styles.footerLink} href="?#">
            Work
          </a>
          <Link href="/services">
            <a className={styles.footerLink}>Services</a>
          </Link>
          <a className={styles.footerLink} href="?#">
            News
          </a>
          <Link href="/about">
            <a className={styles.footerLink}>About</a>
          </Link>
          <a className={styles.footerLink} href="?#">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
