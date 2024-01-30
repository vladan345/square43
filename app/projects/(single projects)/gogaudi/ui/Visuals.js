"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./styles/Visuals.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Visuals() {
  const main = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const banners = gsap.utils.toArray(".banner");
      banners.forEach((banner) => {
        gsap.to(banner, {
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: banner,
            start: "center bottom",
          },
        });
      });

      gsap.to(".bannerRowImage", {
        opacity: 1,
        stagger: 0.2,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".bannerRow",
          start: "center bottom",
        },
      });
    }, main.current);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.Visuals} ref={main}>
      <div className={`wrapper visuals ${styles.wrapper}`}>
        <h2>Key visuals</h2>
        <Image
          src="/images/gogaudi/banner1.png"
          alt="banner 1"
          width={1110}
          height={620}
          className="banner"
        />
        <Image
          src="/images/gogaudi/banner2.png"
          alt="banner 2"
          width={1110}
          height={620}
          className="banner"
        />
        <div className={`${styles.bannerWrap} bannerRow`}>
          <Image
            src="/images/gogaudi/banner3.png"
            alt="banner 3"
            width={588}
            height={736}
            className="bannerRowImage"
          />
          <Image
            src="/images/gogaudi/banner4.png"
            alt="banner 4"
            width={434}
            height={736}
            className="bannerRowImage"
          />
          <Image
            src="/images/gogaudi/banner5.png"
            alt="banner 5"
            width={353}
            height={736}
            className="bannerRowImage"
          />
        </div>
      </div>
    </section>
  );
}
