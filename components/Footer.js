import Link from "next/link";
import Image from "next/image";

import styles from "./styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.Footer}>
      <div className="wrapper">
        <div className={styles.row}>
          <Link className={styles.contactLink} href="/contact">
            Work with us.
            <span className={styles.icon}>
              <Image
                src="/images/arrow.svg"
                alt="arrow icon"
                width={40}
                height={40}
              />
            </span>
          </Link>
        </div>
        <div className={styles.wrapper}>
          <Link className={styles.logo} href="/">
            square43
          </Link>
          <nav className={styles.nav}>
            <a
              className={styles.footerLink}
              target="_blank"
              href="https://www.instagram.com/square43studio/"
            >
              Instagram
            </a>
            <a
              className={styles.footerLink}
              target="_blank"
              href="https://www.facebook.com/Square43-Studio-110282941905781/"
            >
              Facebook
            </a>
            <a
              className={styles.footerLink}
              target="_blank"
              href="https://www.linkedin.com/company/square43"
            >
              Linked In
            </a>
          </nav>
          <p className={styles.copy}>&copy; 2023 Square43</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
