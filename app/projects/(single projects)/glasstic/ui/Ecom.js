"use client";
import { useEffect, useRef } from "react";

import Image from "next/image";
import styles from "./styles/Ecom.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Ecom() {
  const main = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      mm.add("(min-width: 950px)", () => {
        gsap.to(".product", {
          y: 200,
          scrollTrigger: {
            trigger: ".trigger",
            scrub: 1,
            start: "top bottom",
          },
        });
        gsap.to(".cart", {
          y: -140,
          scrollTrigger: {
            trigger: ".trigger",
            scrub: true,
            start: "top bottom",
          },
        });
      });
    }, main.current);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.Ecom} ref={main}>
      <div className="wrapper trigger">
        <div className={styles.row}>
          <div className={styles.col}>
            <Image
              src="/images/glasstic/e-com.png"
              al="Screenshot from a live website"
              width={837}
              height={1021}
              className="product"
            />
          </div>
          <div className={styles.col}>
            <div className={styles.textBox}>
              <h2>E-commerce</h2>
              <p>
                Leaving such unique products without a fully-equipped online
                shop would be incredibly underwhelming. So we decided to go
                above and beyond to create an intuitive shopping platform for a
                smooth experience with a minimal bounce rate!
              </p>
              <p>
                Glasstic was provided with a card payment integration shop,
                enabled through WooCommerce, which happens to be our specialty.
                <a href="https://glasstic.rs">Take a look</a> for yourself!
              </p>
            </div>
            <Image
              src="/images/glasstic/cart.svg"
              alt="Cart screenshot"
              width={440}
              height={717}
              className="cart"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecom;
