import React, { useEffect } from "react";
import styles from "../../styles/section-css/dib-travel/NewClients.module.css";
import Image from "next/image";

import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
function NewClients() {
  const { ref, inView } = useInView({ threshold: [0.3, 0.7] });

  useEffect(() => {
    if (inView) {
      gsap.to(".mobileMockup", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1",
        stagger: 0.2,
      });
    }
  }, [inView]);
  return (
    <div className={styles.NewClients}>
      <div className={`${styles.wrapper} wrapper`}>
        <h2 className={styles.title}>Welcoming new clients</h2>
        <div className={styles.videoWrap}>
          <video autoPlay muted loop className={styles.video}>
            <source src="/images/dib-travel/welcome.mp4" type="video/mp4" />
          </video>
          <Image
            src="/images/dib-travel/dib-laptop.png"
            alt="Laptop frame with video in it"
            fill
            className={styles.laptopImage}
          />
        </div>
        <div className={styles.textWrap}>
          <p className={styles.description}>
            New partnerships are one of the key driving forces when it comes to
            growing your brand.
            <br />
            <br />
            Being aware of this, we introduced a new post type for DIB Travel:
            each Friday, DIB Travel celebrates their new partnerships.
          </p>
          <p className={styles.description}>
            Each partner company is presented in a dedicated post with fully
            customized visual and caption done in the usual DIB Travel tone and
            manner!
          </p>
        </div>
        <div className={styles.mobiles} ref={ref}>
          <Image
            className={`${styles.mobileImage} mobileMockup`}
            src="/images/dib-travel/mobile1.webp"
            alt="mobile mockup DIB Travel"
            width={539}
            height={820}
          />
          <Image
            className={`${styles.mobileImage} mobileMockup`}
            src="/images/dib-travel/mobile2.webp"
            alt="mobile mockup DIB Travel"
            width={539}
            height={820}
          />
          <Image
            className={`${styles.mobileImage} mobileMockup`}
            src="/images/dib-travel/mobile3.webp"
            alt="mobile mockup DIB Travel"
            width={539}
            height={820}
          />
        </div>
      </div>
      <div className={styles.mobileDescription}>
        <div className="wrapper">
          <div className={styles.mobileWrap}>
            <p className={styles.description}>
              Above and beyond!
              <br />
              <br />
              DIB Travel's social media channels include Instagram, Facebook and
              LinkedIn, all with very different types of audiences.
              <br />
              <br />
              In order to accomodate these differences, we approach social media
              planning with great attention when it comes to relevant content
              suitable for a particular type of audience.
            </p>
            <p className={styles.description}>
              Our social media content ranges from static visuals and
              eye-catching headliners to top tier animations and insightful blog
              posts that address relevant topics in respective industries - we
              do our own research too!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewClients;
