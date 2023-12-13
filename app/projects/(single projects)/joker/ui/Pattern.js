"use client";
import styles from "./styles/Pattern.module.css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Pattern() {
  const main = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".patternImage", {
        y: -150,
        scrollTrigger: {
          trigger: ".patternTrigger",
          scrub: true,
        },
      });
    }, main.current);

    return () => ctx.revert();
  }, []);

  return (
    <div className="Pattern" ref={main}>
      <div className={`${styles.wrapper} wrapper patternTrigger`}>
        <div className={styles.patternFlex}>
          <div className={styles.content}>
            <p className={styles.description}>
              A champion deserves his own logo. This is why we created one
              especially for this purpose and discreetly included it as a
              patterned background on the can.
            </p>
          </div>
          <div className={styles.patternWrap}>
            <div className={styles.pattern}>
              <div className="patternImage">
                <Image
                  src="/images/joker/pattern.svg"
                  alt="Guarana joker blue color"
                  width={1080}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pattern;
