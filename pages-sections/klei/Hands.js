import { useRef, useEffect } from "react";
import styles from "@/styles/section-css/klei/Hands.module.css";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hands() {
  const main = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".leftHand", {
        y: -300,
        scrollTrigger: {
          trigger: ".handsWrap",
          scrub: true,
          start: "-300px bottom",
        },
      });
      gsap.to(".rightHand", {
        y: 300,
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
    <section className={styles.Hands}>
      <div className={`handsWrap wrapper ${styles.wrapper}`}>
        <div className={styles.row}>
          <Image
            src="/images/klei/ruka1.webp"
            alt="Hand Klei"
            width={535}
            height={934}
            className={`${styles.leftHand} leftHand`}
          />
          <div className={styles.blobWrap}>
            <Image
              src="/images/klei/blob.svg"
              alt="Hand Klei"
              width={868}
              height={829}
              className="blob"
            />
            <Image
              src="/images/klei/text.svg"
              alt="A movement, not a brand"
              width={481}
              height={131}
              className={styles.textImage}
            />
          </div>
          <Image
            src="/images/klei/ruka2.webp"
            alt="Hand Klei"
            width={286}
            height={811}
            className={`${styles.rightHand} rightHand`}
          />
        </div>
      </div>
    </section>
  );
}
