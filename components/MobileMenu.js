import React from "react";
import styles from "../styles/component-css/MobileMenu.module.css";
import Link from "next/link";

function MobileMenu({ stateChange, ...props }) {
  return (
    <div style={props.style} className={styles.MobileMenu}>
      <p className={styles.name}>square43</p>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.listItem}>
            <Link href="/projects">
              <a
                className={styles.link}
                onClick={() => {
                  document.body.style.overflow = "auto";
                  return stateChange(false);
                }}
              >
                Work
              </a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/services">
              <a
                className={styles.link}
                onClick={() => {
                  document.body.style.overflow = "auto";
                  return stateChange(false);
                }}
              >
                Services
              </a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/contact">
              <a
                className={styles.link}
                onClick={() => {
                  document.body.style.overflow = "auto";
                  return stateChange(false);
                }}
              >
                Contact
              </a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/about">
              <a
                className={styles.link}
                onClick={() => {
                  document.body.style.overflow = "auto";
                  return stateChange(false);
                }}
              >
                About
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.socials}>
        <a className={styles.socialLink} href="#?">
          Instagram
        </a>

        <a className={styles.socialLink} href="#?">
          Facebook
        </a>

        <a className={styles.socialLink} href="#?">
          Linked In
        </a>
      </div>
    </div>
  );
}

export default MobileMenu;
