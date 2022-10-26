import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styles from "../styles/component-css/Header.module.css";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { DispatchCursor, CURSOR_COLOR } from "haspr-cursor";
//All comments are for page transition delay
import { useRouter } from "next/router";

export default function Header() {
  const dispatch = DispatchCursor();
  const [blend, setBlend] = useState(false);
  const [opened, setOpened] = useState(false);
  const router = useRouter();

  //used for adding blend mode on scroll
  //add this to header classname
  //${blend ? styles.blend : ""}

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.addEventListener("scroll", () => setBlend(window.scrollY > 200));
  //   }
  // }, []);

  // Add to onClick on the element you want to delay
  const handleClick = (e) => {
    e.preventDefault();
    setTimeout(() => {
      router.push("/services");
    }, 1000);
  };
  const elem = useRef();
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
              onMouseEnter={() => CURSOR_COLOR("WHITE")}
              onMouseLeave={() => CURSOR_COLOR("END")}
              className={styles.headerLink}
              href="/projects"
            >
              Work
            </Link>
            <Link
              href="/services"
              onClick={handleClick}
              onMouseEnter={() => CURSOR_COLOR("WHITE")}
              onMouseLeave={() => CURSOR_COLOR("END")}
              className={styles.headerLink}
            >
              Services
            </Link>
          </div>
          <Link
            href="/"
            onMouseEnter={() => CURSOR_COLOR("WHITE")}
            onMouseLeave={() => CURSOR_COLOR("END")}
            className={styles.logo}
            onClick={() => setOpened(false)}
          >
            <Image
              src="/logo.svg"
              alt="square43 logo"
              width="45"
              height="45"
              priority
            />
          </Link>
          <div className={styles.rightNav}>
            <Link
              href="/contact"
              onMouseEnter={() => CURSOR_COLOR("WHITE")}
              onMouseLeave={() => CURSOR_COLOR("END")}
              className={styles.headerLink}
            >
              Contact
            </Link>

            <Link
              href="/about"
              onMouseEnter={() => CURSOR_COLOR("WHITE")}
              onMouseLeave={() => CURSOR_COLOR("END")}
              className={styles.headerLink}
            >
              About
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
