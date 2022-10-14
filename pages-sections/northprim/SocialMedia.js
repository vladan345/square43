import React from "react";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import styles from "../../styles/section-css/northprim/SocialMedia.module.css";

function SocialMedia() {
  return (
    <div className={styles.SocialMedia}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.col}>
          <h2>Social Media</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet non
            sollicitudin arcu integer. Nulla cras pellentesque habitant tortor
            donec bibendum volutpat.
          </p>
          <p className={styles.description}>
            Tincidunt leo sit interdum maecenas leo. Dolor amet convallis
            senectus aliquet turpis amet ultrices sagittis, tincidunt. Sed
            dignissim nulla nisl purus congue.
          </p>
          <div style={{ marginTop: 120 }}>
            <Image
              src="/images/northprim/northprim-phone.webp"
              alt="instagram mockup Northprim feed"
              width={520}
              height={969}
            />
          </div>
        </div>
        <div className={styles.col}>
          <Parallax speed={10} className={styles.secondSlide}>
            <Image
              src="/images/northprim/social-mobile1.webp"
              alt="instagram feed northprim slide"
              width={289}
              height={1906}
            />
          </Parallax>
          <Parallax speed={-10} className={styles.secondSlide}>
            <Image
              src="/images/northprim/social-mobile2.webp"
              alt="instagram feed northprim slide"
              width={289}
              height={1906}
            />
          </Parallax>
        </div>
      </div>
      <div className={styles.socialSection}>
        <div className="wrapper">
          <p className={styles.description}>They look even better online!</p>
          <p className={styles.description}>
            Take a look at how we handled Northprim&apos;s socials and feel free
            to follow them or like and comment your impressions. We&apos;re all
            ears (and eyes)!
          </p>
          <div className={styles.icons}>
            <a href="#?" className={styles.link}>
              <div className={styles.icon}>
                <Image
                  src="/images/northprim/NP_Insta.svg"
                  alt="Instagram icon"
                  width={45}
                  height={45}
                />
              </div>
            </a>
            <a href="#?" className={styles.link}>
              <div className={styles.icon}>
                <Image
                  src="/images/northprim/NP_FB.svg"
                  alt="Facebook icon"
                  width={45}
                  height={45}
                />
              </div>
            </a>
            <a href="#?" className={styles.link}>
              <div className={styles.icon}>
                <Image
                  src="/images/northprim/NP_Linkedin.svg"
                  alt="Linkedin icon"
                  width={45}
                  height={45}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
