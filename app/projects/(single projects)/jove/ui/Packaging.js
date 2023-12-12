"use client";
import { useEffect, useRef } from "react";
import styles from "./styles/Packaging.module.css";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Packaging() {
  const main = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".heading", {
        duration: 1,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".trigger",
          start: "top 80%",
        },
      });
      gsap.set(".tegla", {
        duration: 1,
        x: "-40%",
      });
      gsap.to(".tegla", {
        duration: 1,
        x: "-50%",
        opacity: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".trigger",
          start: "top 80%",
        },
      });
    }, main.current);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.Packaging} ref={main}>
      <h2 className={`${styles.heading} heading`}>
        And
        <br /> finally
      </h2>
      <div className="wrapper trigger">
        <div className={styles.rowWrap}>
          <div className={styles.textBox}>
            <h2>Packaging</h2>
            <p>
              Premium look. Exceptional products.
              <br />
              <br />
              Our choice of the label's color palette adds to the luxurious look
              and feel. Thanks to the elegant dark shade of the label paired
              with golden lettering, buyers can rest assured that the product
              inside the packaging is of unparalleled quality.
            </p>
          </div>
          <Image
            src="/images/jove/truffle-jar.webp"
            alt="truffle jar"
            width={640}
            height={640}
            className="tegla"
          />
        </div>
      </div>
    </div>
  );
}

export default Packaging;
