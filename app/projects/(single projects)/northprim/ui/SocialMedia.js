"use client";
import Image from "next/image";
import styles from "./styles/SocialMedia.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SocialMedia() {
  const main = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".leftSlide", {
        y: 200,
        scrollTrigger: {
          trigger: ".socialTrigger",
          scrub: true,
        },
      });
      gsap.to(".rightSlide", {
        y: -200,
        scrollTrigger: {
          trigger: ".socialTrigger",
          scrub: true,
        },
      });
    }, main.current);

    return () => ctx.revert();
  }, []);
  return (
    <div className={`${styles.SocialMedia} socialTrigger`}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.col}>
          <h2>Social Media</h2>
          <p className={styles.description}>
            Funny, eye-catching and pun-filled, we keep it tight on the socials,
            letting everyone know what our client Northprim is up to with fresh
            posts regularly.
          </p>

          <div className={styles.mobileImageWrap}>
            <Image
              src="/images/northprim/northprim-phone.webp"
              alt="instagram mockup Northprim feed"
              width={520}
              height={969}
            />
          </div>
        </div>
        <div className={styles.col}>
          <div className={`${styles.secondSlide} leftSlide`}>
            <Image
              src="/images/northprim/social-media-slide1.webp"
              alt="instagram feed northprim slide"
              width={289}
              height={1906}
            />
          </div>
          <div className={`${styles.secondSlide} rightSlide`}>
            <Image
              src="/images/northprim/social-media-slide2.webp"
              alt="instagram feed northprim slide"
              width={289}
              height={1906}
            />
          </div>
        </div>
      </div>
      <div className={styles.socialSection}>
        <div className="wrapper">
          <p className={styles.description}>They look even better online!</p>
          <p className={styles.description}>
            Take a look at how we handled Northprim&apos;s socials and feel free
            to follow them or like and comment your impressions.
          </p>
          <p className={styles.description}>We&apos;re all ears (and eyes)!</p>
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
