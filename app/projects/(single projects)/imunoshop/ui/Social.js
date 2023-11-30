"use client";
import React, { useEffect } from "react";
import styles from "@/styles/section-css/imunoshop/Social.module.css";
import Image from "next/image";

import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";

function Social() {
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      gsap.to(".phoneImage", {
        marginRight: -60,
        duration: 2,
        ease: "power4",
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
            Promoting your online shop on various channels is essential for
            raising brand awareness and generating leads and, eventually, sales.
          </p>
          <p className={styles.description}>
            Custom content, detailed social media plans on a monthly basis,
            targeted paid campaigns: this is our winning combo. Imuno shop now
            has a carefully crafted feed that generates visits to their website
            every day!
          </p>
          <div className={styles.mobiles} ref={ref}>
            <div className={`${styles.phone} phoneImage`}>
              <Image
                src="/images/imunoshop/Phone3.webp"
                alt="Phone mockup 3"
                width={306}
                height={625}
              />
            </div>
            <div className={`${styles.phone} phoneImage`}>
              <Image
                src="/images/imunoshop/Phone2.webp"
                alt="Phone mockup 2"
                width={329}
                height={673}
              />
            </div>
            <div className={`${styles.phone} phoneImage`}>
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
