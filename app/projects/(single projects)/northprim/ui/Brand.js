"use client";
import React, { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import Image from "next/image";

import { useInView } from "react-intersection-observer";
import styles from "@/styles/section-css/northprim/Brand.module.css";
import lottieFile from "@/public/images/northprim/NP_Lottie_Logo.json";

function Brand() {
  const lottieRef = useRef(null);
  const { ref, inView } = useInView({ threshold: 0 });
  useEffect(() => {
    if (inView) {
      lottieRef.current.play();
    }
  }, [inView]);

  return (
    <div className={styles.Brand}>
      <div className="wrapper">
        <h2>Brand Elements</h2>
        <div>
          <div className={styles.row} ref={ref}>
            <div className={styles.col}>
              <Lottie
                className={styles.logoScheme}
                animationData={lottieFile}
                lottieRef={lottieRef}
                loop={false}
                autoplay={false}
              />
              <div className={styles.paragraphs}>
                <p className={styles.paragraph}>
                  We kept the logo light and clear, with the letters
                  representing the tech side and the green underline
                  representing the human touch.
                </p>
              </div>
            </div>
            <div className={styles.col}>
              {" "}
              <Image
                src="/images/northprim/colors.svg"
                alt="Northprim color scheme"
                width="280"
                height="280"
              />
              <div className={styles.fonts}>
                <Image
                  src="/images/northprim/fonts.svg"
                  alt="Northprim font scheme"
                  width="362"
                  height="341"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brand;
