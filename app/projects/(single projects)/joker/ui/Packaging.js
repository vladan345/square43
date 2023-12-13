"use client";
import Image from "next/image";
import styles from "./styles/Packaging.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Packaging() {
  const main = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".jokic", {
        y: -230,
        scrollTrigger: {
          scrub: true,
          markers: true,
          trigger: ".packagingTrigger",
        },
      });
      gsap.to(".leftCan", {
        x: 100,
        scrollTrigger: {
          scrub: true,
          markers: true,
          trigger: ".packagingTrigger",
        },
      });
      gsap.to(".rightCan", {
        x: -100,
        scrollTrigger: {
          scrub: true,
          markers: true,
          trigger: ".packagingTrigger",
        },
      });
    }, main.current);

    return () => ctx.revert();
  }, []);
  return (
    <div className={styles.Packaging} ref={main}>
      <div className={`${styles.wrapper} packagingTrigger`}>
        <div className={`${styles.jokic} jokic`}>
          <Image
            src="/images/joker/nikola-jokic.png"
            alt="Nikola Jokic Guarana Joker"
            width={560}
            height={781}
          />
        </div>
        <div className={styles.contentWrap}>
          <div className={styles.col}>
            <h2>Packaging Design</h2>
            <p className={styles.description}>
              Guarana is a well-known brand of energy drinks in the Balkans with
              a wide range of products that each represents a different flavor
              and different approach. What every energy drink by Guarana has in
              common is the daring and direct tone of voice that is usually
              embodied in the product name.
            </p>
            <p className={styles.description}>
              Guarana set a challenge for all willing to participate: come up
              with an original concept for packaging design that would showcase
              their newly signed collab with none other than the iconic Nikola
              Jokic, the Joker. Spoiler: we won the challenge.
            </p>
          </div>
          <div className={styles.col}>
            <div className={styles.canWrap}>
              <div className={`${styles.can} leftCan ${styles.left}`}>
                <Image
                  src="/images/joker/leva.webp"
                  alt="Guarana Joker can"
                  width={311}
                  height={648}
                />
              </div>

              <div className={`${styles.can} rightCan ${styles.right}`}>
                <Image
                  src="/images/joker/desna.webp"
                  alt="Guarana Joker can"
                  width={412}
                  height={679}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packaging;
