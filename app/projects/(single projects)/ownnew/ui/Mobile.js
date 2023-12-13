"use client";
import { useEffect, useRef } from "react";
import styles from "./styles/Mobile.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Mobile() {
  const main = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".leftPhone", {
        y: -75,
        scrollTrigger: {
          trigger: ".ownnewMobiles",
          scrub: true,
        },
      });
      gsap.to(".rightPhone", {
        y: 75,
        scrollTrigger: {
          trigger: ".ownnewMobiles",
          scrub: true,
        },
      });
    }, main.current);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.Mobile} ref={main}>
      <div className="wrapper ownnewMobiles">
        <div className={styles.phoneWrap}>
          <div className={styles.phones}>
            <div className={`${styles.phone1} leftPhone`}>
              <Image
                src="/images/ownnew/phone1.webp"
                alt="Ownnew phone mockup"
                width={290}
                height={687}
              />
            </div>
            <div className={`${styles.phone1} rightPhone`}>
              <Image
                src="/images/ownnew/phone2.webp"
                alt="Ownnew phone mockup"
                width={290}
                height={687}
              />
            </div>
          </div>
          <div className={styles.textWrap}>
            <p className={styles.description}>
              A mobile-first website design was a priority among all other
              requests!
            </p>
            <p className={styles.description}>
              At the age when most websites are accessed via smartphones, it is
              essential for your website to be fully adapted for this format too
              - ideally without sacrificing anything from the original design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
