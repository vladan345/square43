import { useRef, useEffect } from "react";
import styles from "./styles/OurServices.module.css";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function OurServices() {
  const main = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".bgImage", {
        width: "120%",
        scrollTrigger: {
          trigger: ".homeServices",
          scrub: true,
          end: "70% center",
        },
      });
      gsap.to(".wrapper", {
        paddingLeft: "20px",
        scrollTrigger: {
          trigger: ".homeServices",
          scrub: true,
          end: "70% center",
        },
      });
    }, main.current);

    return () => ctx.revert();
  }, []);

  return (
    <div className={`${styles.OurServices} `} ref={main}>
      <div className={`${styles.trigger} homeServices`}>
        <div className={`${styles.bgImage} bgImage`}>
          <Image
            src="/images/starry-night.png"
            alt="Ripple background image"
            fill
          />
          <div className={styles.overlay}></div>
        </div>
        <div className={`${styles.wrapper} wrapper`}>
          <div className={styles.linkWrapMobile}>
            <Link href="/services" className="readMore">
              Our services
              <div className="icon">
                <Image
                  src="/images/arrow.svg"
                  alt="Arrow icon"
                  width={40}
                  height={40}
                />
              </div>
            </Link>
          </div>
          {/* <Square image="/images/square2.webp" height={560} /> */}
          <div className={styles.ourServicesWrap}>
            <h2 className={styles.statement}>
              We think outside the square. With us - you will too.
            </h2>
            <div className={styles.linkWrap}>
              <Link href="/services" className="readMore">
                Our services
                <div className="icon">
                  <Image
                    src="/images/arrow.svg"
                    alt="Arrow icon"
                    width={40}
                    height={40}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
