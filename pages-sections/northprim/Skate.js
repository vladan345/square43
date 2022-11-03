import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../../styles/section-css/northprim/Skate.module.css";

import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";

function Skate() {
  const splash = useRef(null);
  const skateF = useRef(null);
  const skateM = useRef(null);
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      const el1 = splash.current;
      const el2 = skateF.current;
      const el3 = skateM.current;
      gsap.fromTo(
        el1,
        {
          scale: 0.5,
          duration: 2,
          ease: "power1",
        },
        {
          scale: 1,
          duration: 1,
          ease: "power1",
        }
      );
      gsap.fromTo(
        el2,
        {
          scale: 0.4,
          duration: 1.5,
          ease: "power1",
        },
        {
          scale: 1,
          duration: 1,
          ease: "power1",
        }
      );
      gsap.fromTo(
        el3,
        {
          scale: 0.3,
          duration: 1,
          delay: 3,
          ease: "power1",
        },
        {
          scale: 1,
          duration: 1,
          ease: "power1",
        }
      );
    }
  }, [inView]);
  return (
    <div className={styles.Skate}>
      <div className="wrapper">
        <div className={styles.row}>
          <div className={styles.col}>
            <p className={styles.description}>
              In the sea of various companies offering exquisite IT services, we
              needed to make Northprim shine like no other.
            </p>
            <p className={styles.statement}>
              All that glitters isn&apos;t gold - so we went with neon!
            </p>
            <div className={styles.skaters} ref={ref}>
              <div className={styles.splash} ref={splash}>
                <Image
                  src="/images/northprim/splash.svg"
                  alt="Spray splash Northprim"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.skateF} ref={skateF}>
                <Image
                  src="/images/northprim/skateboarder-f-1.webp"
                  alt="Skateboarder femaile Northprim"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.skateM} ref={skateM}>
                <Image
                  src="/images/northprim/skateboarder-m-1.webp"
                  alt="Skateboarder male Northprim"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <Image
              src="/images/northprim/future.webp"
              alt="Spray splash Northprim"
              width={600}
              height={600}
              className={styles.david}
            />
            <p className={styles.description}>
              In terms of imagery, we focused on the art that modern coding is
              and that&apos;s how the ancient and modern theme fully came to
              life! We gave praise and glory to the art of coding, because the
              modern digital world is simply unimaginable without it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skate;
