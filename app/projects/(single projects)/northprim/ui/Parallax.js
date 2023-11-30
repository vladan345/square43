"use client";
import { useRef, useEffect } from "react";
import styles from "@/styles/section-css/northprim/Parallax.module.css";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Paralax() {
  const main = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".background",
        {
          scrollTrigger: {
            trigger: ".background",
            scrub: true,
          },
          scale: 1,
        },
        {
          scrollTrigger: {
            trigger: ".background",
            scrub: true,
          },
          scale: 1.2,
        }
      );
      gsap.to(".wave", {
        scrollTrigger: {
          trigger: ".wave",
          scrub: true,
        },
        scale: 0.7,
        rotate: 15,
      });
      gsap.fromTo(
        ".star",
        {
          scrollTrigger: {
            trigger: ".star",
            scrub: true,
          },
          scale: 0.2,
          rotate: 0,
        },
        {
          scrollTrigger: {
            trigger: ".star",
            scrub: true,
          },
          scale: 1,
          rotate: -45,
        }
      );
    }, main.current);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.Parallax} ref={main}>
      <div className={`${styles.background} background`}>
        <Image
          src="/images/northprim/NP_Wave_Background.png"
          alt="Northprim wave art parallax"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={`${styles.wave} wave`}>
        <Image
          src="/images/northprim/NP_The_Wave.png"
          alt="Northprim wave art parallax"
          // width={1920}
          // height={995}
          fill
        />
      </div>

      <div className={`${styles.star} star`}>
        <Image
          src="/images/northprim/NP_Northstar.png"
          alt="Northprim wave art parallax"
          width={369}
          height={380}
        />
      </div>
    </div>
  );
}

export default Paralax;
