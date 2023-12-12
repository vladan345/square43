"use client";
import React, { useEffect } from "react";
import styles from "./styles/Social.module.css";
import Image from "next/image";

import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";

function Social() {
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      gsap.to(".phoneImageL", {
        left: 0,
        duration: 2,
        ease: "power4",
      });
      gsap.to(".phoneImageR", {
        right: 0,
        duration: 2,
        ease: "power4",
      });
    }
  }, [inView]);
  return (
    <div className={styles.Social}>
      <div className={styles.stripe}></div>
      <div className="wrapper">
        <div className={styles.socialWrap}>
          <div className={styles.textBox}>
            <h2>Social Media</h2>
            <p className={styles.description}>
              Naturally, social media content needed to reflect the same idea
              and aesthetics - even more so! KEIKO was provided with our monthly
              social media plan, every section of their feed planned out: from
              post category to every individual hashtag. Our aim was to combine
              product promotion with informative posts that provide valuable
              insight into unique brand points that truly set KEIKO apart form
              the rest on the market.
            </p>
          </div>
          <div className={styles.mobiles} ref={ref}>
            <div className={`${styles.phone} phoneImageR`}>
              <Image
                src="/images/keiko/phone-3.webp"
                alt="Phone mockup 3"
                width={271}
                height={553}
              />
            </div>
            <div className={`${styles.phone}`}>
              <Image
                src="/images/keiko/phone-2.webp"
                alt="Phone mockup 2"
                width={302}
                height={615}
              />
            </div>
            <div className={`${styles.phone} phoneImageL`}>
              <Image
                src="/images/keiko/phone-1.webp"
                alt="Phone mockup 1"
                width={271}
                height={553}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
