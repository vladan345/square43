"use client";
import React, { useEffect } from "react";
import styles from "./styles/SocialMedia.module.css";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import Image from "next/image";

function SocialMedia() {
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      gsap.to(".socialImage", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1",
        stagger: 0.2,
      });
    }
  }, [inView]);
  return (
    <div>
      <div className="wrapper">
        <h2 className={styles.title}>Social media</h2>
        <div className={styles.row} ref={ref}>
          <Image
            className={`${styles.image} socialImage`}
            src="/images/dib-travel/social1.webp"
            alt="Social media post DIB Travel"
            width={434}
            height={434}
          />
          <Image
            className={`${styles.image} socialImage`}
            src="/images/dib-travel/social2.webp"
            alt="Social media post DIB Travel"
            width={434}
            height={434}
          />
          <Image
            className={`${styles.image} socialImage`}
            src="/images/dib-travel/social3.webp"
            alt="Social media post DIB Travel"
            width={434}
            height={434}
          />
        </div>
        <div className={styles.textWrap}>
          <p className={styles.description}>
            Online presence is key.
            <br />
            <br />
            Naturally, all social media channels needed to be in line with the
            new brand image. From witty statement posts to relevant industry
            news and promoting DIB's services, it was necessary to cover it all.
          </p>
          <p className={styles.description}>
            Each month, DIB Travel receives an entire sheet with every single
            post planned out to the very detail: visual, copy, caption, hashtags
            - you name it!
            <br />
            <br />
            Mind you, this sheet is much more than a mere presentation. Each
            post is carefully crafted to raise brand awareness, but also provide
            valuable leads and position DIB Travel as a leading company in the
            travel industry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
