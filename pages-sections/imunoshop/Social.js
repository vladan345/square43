import React, { useEffect, useRef } from "react";
import styles from "../../styles/section-css/imunoshop/Social.module.css";
import Image from "next/image";

import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";

function Social() {
  const mobile1 = useRef(null);
  const mobile2 = useRef(null);
  const mobile3 = useRef(null);
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    console.log(mobile1);
    if (inView) {
      const el = mobile1.current;
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "power1",
      });
      const el2 = mobile2.current;
      gsap.to(el2, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "power1",
      });
      const el3 = mobile3.current;
      gsap.to(el3, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "power1",
      });
    }
  }, [inView]);
  return (
    <div className={styles.Social}>
      <div className={styles.stripe}></div>
      <div className="wrapper">
        <div className={styles.socialWrap}>
          <h2>Social Media</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet non
            sollicitudin arcu integer. Nulla cras pellentesque habitant tortor
            donec bibendum volutpat.
          </p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet non
            sollicitudin arcu integer. Nulla cras pellentesque habitant tortor
            donec bibendum volutpat.
          </p>
          <div className={styles.mobiles} ref={ref}>
            <div className={`${styles.phone} ${styles.third}`} ref={mobile3}>
              <Image
                src="/images/imunoshop/Phone3.webp"
                alt="Phone mockup 3"
                width={306}
                height={625}
              />
            </div>
            <div className={`${styles.phone} ${styles.second}`} ref={mobile2}>
              <Image
                src="/images/imunoshop/Phone2.webp"
                alt="Phone mockup 2"
                width={329}
                height={673}
              />
            </div>
            <div className={`${styles.phone} ${styles.first}`} ref={mobile1}>
              <Image
                src="/images/imunoshop/Phone1.webp"
                alt="Phone mockup 1"
                width={291}
                height={713}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
