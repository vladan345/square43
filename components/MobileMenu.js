import React from "react";
import styles from "../styles/component-css/MobileMenu.module.css";
import Link from "next/link";
import { useLoading } from "../utils/hooks/LoadingContext";
import { useRouter } from "next/router";

function MobileMenu({ stateChange, ...props }) {
  const { setLoading } = useLoading();
  const router = useRouter();

  const handleClick = (e) => {
    document.body.style.overflow = "auto";
    stateChange(false);
    setLoading(true);
    e.preventDefault();
    let link = e.currentTarget.attributes[1].value;
    setTimeout(() => {
      if (link === "/services" || link === "/projects") {
        router.push(link);
      } else if (link === "/") {
        router.push(link);
        setOpened(false);
        setLoading(false);
      } else {
        router.push(link);
        setLoading(false);
      }
    }, 2000);
  };

  return (
    <div style={props.style} className={styles.MobileMenu}>
      <p className={styles.name}>square43</p>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.listItem}>
            <Link
              href="/projects"
              className={styles.link}
              onClick={handleClick}
            >
              Work
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link
              href="/services"
              className={styles.link}
              onClick={handleClick}
            >
              Services
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/contact" className={styles.link} onClick={handleClick}>
              Contact
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/inside" className={styles.link} onClick={handleClick}>
              Inside
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.socials}>
        <a
          className={styles.socialLink}
          target="_blank"
          href="https://www.instagram.com/square43studio/"
        >
          Instagram
        </a>

        <a
          className={styles.socialLink}
          target="_blank"
          href="https://www.facebook.com/Square43-Studio-110282941905781/"
        >
          Facebook
        </a>

        <a
          className={styles.socialLink}
          target="_blank"
          href="https://www.linkedin.com/company/square43"
        >
          Linked In
        </a>
      </div>
    </div>
  );
}

export default MobileMenu;
