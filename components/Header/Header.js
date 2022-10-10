import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

import Image from "next/image";

export default function Header() {
  const [blend, setBlend] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setBlend(window.scrollY > 200));
    }
  }, []);

  return (
    <div className={`${styles.Header} ${blend ? styles.blend : ""}`}>
      <div className={styles.wrapper}>
        <div className={styles.leftNav}>
          <a className={styles.headerLink} href="?#">
            Work
          </a>
          <Link href="/services">
            <a className={styles.headerLink}>Services</a>
          </Link>
        </div>
        <Link href="/">
          <a className={styles.logo}>
            <Image src="/logo.svg" alt="square43 logo" width="45" height="45" />
          </a>
        </Link>
        <div className={styles.rightNav}>
          <a className={styles.headerLink} href="?#">
            Contact
          </a>
          <a className={styles.headerLink} href="?#">
            News
          </a>
          <Link className={styles.headerLink} href="/about">
            <a className={styles.headerLink}>About</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
