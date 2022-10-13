import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/component-css/Header.module.css";
import Image from "next/image";

//All comments are for page transition delay
// import { useRouter } from "next/router";

export default function Header() {
  const [blend, setBlend] = useState(false);
  // const router = useRouter();

  //used for adding blend mode on scroll
  //add this to header classname
  //${blend ? styles.blend : ""}

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.addEventListener("scroll", () => setBlend(window.scrollY > 200));
  //   }
  // }, []);

  //Add to onClick on the element you want to delay
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.attributes.href);
  //   setTimeout(() => {
  //     router.push("/services");
  //   }, 3000);
  // };
  return (
    <div className={`${styles.Header}`}>
      <div className={`wrapper ${styles.wrapper}`}>
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
