import React, { useEffect } from "react";
import styles from "../../styles/section-css/glasstic/SocialMedia.module.css";
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
    <div className={styles.SocialMedia}>
      <div className="wrapper">
        <h2 className={styles.title}>Social media</h2>
        <div className={styles.textWrap}>
          <p className={styles.description}>
            All social channels needed to follow the website. Design-wise, their
            latest visuals needed to contain a new color palette, new glass-like
            imagery with direct, to-the-point copy to promote Glasstic’s
            refurbished website. Additionally, as our client, Glasstic received
            a neat monthly Social Media plan. This included the exact posting
            dynamics, captions and hashtags too! We made sure to vary the types
            of posts, the underlining message always focusing on the
            high-quality product.
          </p>
        </div>
        <div className={styles.row} ref={ref}>
          <Image
            className={`${styles.image} socialImage`}
            src="/images/glasstic/social1.webp"
            alt="Social media post DIB Travel"
            width={434}
            height={434}
          />
          <Image
            className={`${styles.image} socialImage`}
            src="/images/glasstic/social2.webp"
            alt="Social media post DIB Travel"
            width={434}
            height={434}
          />
          <Image
            className={`${styles.image} socialImage`}
            src="/images/glasstic/social3.webp"
            alt="Social media post DIB Travel"
            width={434}
            height={434}
          />
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
