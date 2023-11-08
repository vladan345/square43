import { useRef, useEffect } from "react";
import styles from "@/styles/section-css/klei/Flowers.module.css";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Flowers() {
  const main = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".circle", {
        stagger: 0.3,
        duration: 0.5,
        opacity: 1,
        delay: 1,
        scrollTrigger: {
          trigger: ".wrapper",
          start: "center bottom",
        },
      });

      gsap.to(".circle", {
        duration: 5,
        rotate: 360,
        ease: "none",
        repeat: -1,
        stagger: 0.3,
      });

      gsap.to(".flower", {
        duration: 1,
        opacity: 1,
        bottom: 0,
        scrollTrigger: {
          trigger: ".wrapper",
          start: "center bottom",
        },
      });
    }, main.current);

    return () => ctx.revert();
  }, []);
  return (
    <section className={styles.Flowers} ref={main}>
      <Image
        src="/images/klei/back.webp"
        alt="background"
        fill
        className={styles.back}
      />
      <div className={`wrapper ${styles.row}`}>
        <div className={styles.col}>
          <h2>
            Approach
            <br />& Philosophy
          </h2>
          <p>
            Lacus eu sed faucibus bibendum pulvinar. Est et tincidunt facilisi
            dapibus laoreet turpis dolor. Vel mattis tellus scelerisque tortor
            condimentum purus. Tortor vitae quam facilisis faucibus. Viverra
            vitae purus lectus pharetra vel pharetra pharetra ultrices. Lacus
            elementum ultrices enim arcu. Senectus.
          </p>
          <p>
            Lacus eu sed faucibus bibendum pulvinar. Est et tincidunt facilisi
            dapibus laoreet turpis dolor. Vel mattis tellus scelerisque tortor
            condimentum purus. Tortor vitae quam facilisis faucibus.
          </p>
        </div>
        <div className={styles.col}>
          <div className={styles.circles}>
            <Image
              src="/images/klei/krug1.svg"
              alt="circle"
              width={414}
              height={414}
              className="circle"
            />
            <Image
              src="/images/klei/krug2.svg"
              alt="circle"
              width={565}
              height={555}
              className="circle"
            />
            <Image
              src="/images/klei/krug3.svg"
              alt="circle"
              width={652}
              height={710}
              className="circle"
            />
          </div>
          <Image
            src="/images/klei/flower.webp"
            alt="flower girl"
            width={684}
            height={1045}
            className={`${styles.flower} flower`}
          />
        </div>
      </div>
      <Image
        src="/images/klei/front.webp"
        alt="front"
        fill
        className={styles.front}
      />
    </section>
  );
}
