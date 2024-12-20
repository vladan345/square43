"use client";
import { useRef, useEffect } from "react";
import styles from "./styles/Hands.module.css";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hands() {
  const main = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".leftHand", {
        y: `-=300px`,
        scrollTrigger: {
          trigger: ".handsWrap",
          scrub: true,
          start: "-300px bottom",
        },
      });
      gsap.to(".rightHand", {
        y: `+=300px`,
        scrollTrigger: {
          trigger: ".handsWrap",
          scrub: true,
          start: "-300px bottom",
        },
      });
      gsap.to(".blob", {
        rotate: 120,
        scrollTrigger: {
          trigger: ".handsWrap",
          scrub: true,
          start: "-300px bottom",
        },
      });
    }, main.current);

    return () => ctx.revert();
  }, []);
  return (
    <section className={styles.Hands} ref={main}>
      <div className={`${styles.wrapper} handsWrap`}>
        <Image
          src="/images/klei/ruka2.webp"
          width={314}
          height={285}
          alt="Left hand Klei"
          className={`${styles.rightHand} rightHand h-auto max-w-none translate-y-[-200px]`}
        />
        <div className={`${styles.blobWrap}`}>
          <Image
            src="/images/klei/blob.svg"
            width={868}
            height={829}
            alt="Klei"
            className={`${styles.blob} blob`}
          />
          <Image
            src="/images/klei/text.svg"
            width={481}
            height={131}
            alt="A movement, not a brand."
            className={styles.text}
          />
        </div>
        <Image
          src="/images/klei/ruka1.webp"
          width={567}
          height={992}
          alt="Left hand Klei"
          className={`${styles.leftHand} leftHand translate-y-[100px]`}
        />
      </div>
    </section>
  );
}
