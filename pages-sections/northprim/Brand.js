import React, { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import Image from "next/image";

import { useInView } from "react-intersection-observer";
import styles from "../../styles/section-css/Brand.module.css";
// import logoScheme from "./assets/logo-scheme.svg";
import lottieFile from "../../public/images/northprim/NP_Lottie_Logo.json";

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
        <h2>Brand Identity</h2>
        <div>
          <div className={styles.row} ref={ref}>
            <Lottie
              className={styles.logoScheme}
              animationData={lottieFile}
              lottieRef={lottieRef}
              loop={false}
              autoplay={false}
            />
            <h2>{inView}</h2>
            <Image
              src="/images/northprim/colors.svg"
              alt="Northprim color scheme"
              width="550"
              height="200"
            />
          </div>

          <div className={styles.row}>
            <div className={styles.paragraphs}>
              <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                non sollicitudin arcu integer. Nulla cras pellentesque habitant
                tortor donec bibendum volutpat.
              </p>
              <p className={styles.paragraph}>
                Tincidunt leo sit interdum maecenas leo. Dolor amet convallis
                senectus aliquet turpis amet ultrices sagittis, tincidunt. Sed
                dignissim nulla nisl purus congue.
              </p>
            </div>
            <Image
              className="fonts"
              src="/images/northprim/fonts.svg"
              alt="Northprim font scheme"
              width="507"
              height="420"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brand;
