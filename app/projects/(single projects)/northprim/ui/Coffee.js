"use client";
import styles from "./styles/Coffee.module.css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Coffee() {
  const main = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".spill", {
        y: -150,
        scrollTrigger: {
          trigger: ".coffeeTrigger",
          scrub: true,
        },
      });
    }, main.current);

    return () => ctx.revert();
  }, []);
  return (
    <div className={styles.Coffee}>
      <div className="wrapper coffeeTrigger">
        <div className={styles.row}>
          <div className={styles.merchImages}>
            <div className={styles.image}>
              <Image
                width={904}
                height={720}
                src="/images/northprim/back.png"
                alt="Northprim merchendise"
              />
            </div>
            <div className={`${styles.spill} ${styles.image} spill`}>
              <Image
                width={904}
                height={720}
                src="/images/northprim/spill.png"
                alt="Northprim merch coffee spill"
              />
            </div>
            <div className={styles.image}>
              <Image
                width={904}
                height={720}
                src="/images/northprim/front.png"
                alt="Northprim merchendise"
              />
            </div>
          </div>
          <div className={styles.coffeeContent}>
            <p className={styles.description}>
              From comfy hoodies to neonlicious mugs -Northprim&apos;s brand new
              merch line has it all! And thanks to the signature colors and
              style, there&apos;s no mistaking them for any other IT company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coffee;
