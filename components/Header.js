import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styles from "../styles/component-css/Header.module.css";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

import { useLoading } from "../utils/hooks/LoadingContext";
//All comments are for page transition delay
import { useRouter } from "next/router";

export default function Header() {
  const [opened, setOpened] = useState(false);
  const router = useRouter();
  const { setLoading } = useLoading();
  const elem = useRef();

  //Mobile menu
  useEffect(() => {
    if (opened) {
      elem.current.classList.add(`${styles.opened}`);
    } else {
      elem.current.classList.remove(`${styles.opened}`);
    }
    opened
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [opened]);
  //***************************** */

  //Link delay & page transition
  const handleClick = (e) => {
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

  //Mobile menu
  const openedStyle = {
    height: "100vh",
    padding: "30px 20px 80px 20px",
  };
  const closedStyle = {
    height: "0",
    padding: "0",
  };
  const handleToggle = (e) => {
    e.preventDefault();
    const element = e.currentTarget;
    elem.current.style.pointerEvents = "none";
    setOpened(!opened);
    setTimeout(() => {
      element.style.pointerEvents = "auto";
    }, 600);
  };
  //********************* */
  return (
    <div className={styles.HeaderWrap}>
      {opened ? (
        <MobileMenu style={openedStyle} stateChange={setOpened} />
      ) : (
        <MobileMenu style={closedStyle} />
      )}
      <div className={`${styles.Header}`}>
        <div className={`wrapper ${styles.wrapper}`}>
          <div className={styles.leftNav}>
            <Link
              onClick={handleClick}
              className={styles.headerLink}
              href="/projects"
            >
              Work
            </Link>
            <Link
              href="/services"
              onClick={handleClick}
              className={styles.headerLink}
            >
              Services
            </Link>
            <Link
              onClick={handleClick}
              href="/career"
              className={styles.headerLink}
            >
              Career
            </Link>
          </div>
          <Link href="/" className={styles.logo} onClick={handleClick}>
            <Image
              src="/logo.svg"
              alt="square43 logo"
              width="40"
              height="40"
              priority
            />
          </Link>
          <div className={styles.rightNav}>
            <Link
              onClick={handleClick}
              href="/inside"
              className={styles.headerLink}
            >
              Inside
            </Link>

            <Link
              href="/memos"
              onClick={handleClick}
              className={styles.headerLink}
            >
              Thoughts
            </Link>
            <Link
              onClick={handleClick}
              href="/contact"
              className={styles.headerLink}
            >
              Contact
            </Link>
          </div>
          <div className={styles.hamNav} onClick={handleToggle} ref={elem}>
            <span className={`${styles.leftDotEx} ${styles.dot}`}></span>
            <span className={`${styles.leftDot} ${styles.dot}`}></span>
            <span className={`${styles.center} ${styles.dot}`}></span>
            <span className={`${styles.rightDotEx} ${styles.dot}`}></span>
            <span className={`${styles.rightDot} ${styles.dot}`}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
