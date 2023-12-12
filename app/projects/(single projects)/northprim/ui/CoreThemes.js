"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";

import styles from "./styles/CoreThemes.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function CoreThemes() {
  const woman = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      woman.current,
      {
        scrollTrigger: {
          trigger: woman.current,
          start: "top bottom",
          toggleActions: "restart none none none",
          scrub: true,
        },
        y: 100,
        ease: "power1",
      },
      {
        scrollTrigger: {
          trigger: woman.current,
          start: "top bottom",
          toggleActions: "restart none none none",
          scrub: true,
        },
        y: -150,
        ease: "power1",
      }
    );

    // return () => tween.revert(); // <- cleanup!
  }, []);
  return (
    <div className={styles.CoreThemes}>
      <div className="wrapper">
        <div>
          <h2 className={styles.heading}>Core Themes</h2>
          <div className={styles.row}>
            <div className={styles.list}>
              <div className={styles.listItem}>
                <div className={styles.listItemImage}>
                  <Image
                    src="/images/northprim/spray-icon.svg"
                    alt="Northprim icon spray"
                    width={160}
                    height={160}
                  />
                </div>
                <div>
                  <h3 className={styles.title}>Cheeky approach</h3>
                  <p className={styles.description}>
                    Why so serious? Even the largest of companies are made out
                    of real people, plus there is no reason to keep work and fun
                    apart!
                  </p>
                </div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.listItemImage}>
                  <Image
                    src="/images/northprim/bug-icon.svg"
                    alt="Northprim icon bug"
                    width={160}
                    height={160}
                  />
                </div>
                <div>
                  <h3 className={styles.title}>Expect the unexpected</h3>
                  <p className={styles.description}>
                    Stereotypes exist and, yes, you would expect an IT company
                    to keep things to the point and very technical. We offered
                    quite a twist.
                  </p>
                </div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.listItemImage}>
                  <Image
                    src="/images/northprim/arm-icon.svg"
                    alt="Northprim icon arm"
                    width={160}
                    height={160}
                  />
                </div>
                <div>
                  <h3 className={styles.title}>Undisputed skill</h3>
                  <p className={styles.description}>
                    Adding a fun, casual twist to a company full of exceptional
                    talent without underestimating their skill is a fine art.
                    Luckily, we&apos;re all artists here in Square43.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.imageWrap}>
              <div className={styles.keyboard} ref={woman}>
                <Image
                  src="/images/northprim/S43_NP_Keyboard.png"
                  alt="Northprim woman with a keyboard"
                  fill
                  sizes="100vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.frame}>
                <Image
                  src="/images/northprim/picture_frame.png"
                  alt="frame Northprim"
                  fill
                  sizes="100vw"
                  className={styles.frameImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoreThemes;
