"use client";
import styles from "./styles/Colors.module.css";
import Image from "next/image";
import { gsap } from "gsap";
import { InView } from "react-intersection-observer";

function Colors() {
  const fireAnimation = () => {
    gsap.to(".colorImage", {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: "power4",
      stagger: 0.2,
    });
  };
  return (
    <div>
      <div className="wrapper">
        <div className={styles.colorsWrap}>
          <div className={styles.content}>
            <p className={styles.description}>
              Even our palette was carefully combined to flaunt this
              partnership. Do the first three colors seem familiar? If you
              recognized the brand colors of Denver Nuggets - Joker's NBA team -
              you're completely right!
            </p>
          </div>
          <div className={styles.colors}>
            <InView
              as="div"
              className={`${styles.color} colorImage`}
              onChange={(inView) => {
                if (inView) {
                  fireAnimation();
                }
              }}
              threshold={[0.3, 0.7]}
            >
              <Image
                src="/images/joker/color1.svg"
                alt="Guarana joker blue color"
                width={200}
                height={280}
              />
            </InView>
            <InView
              as="div"
              className={`${styles.color} colorImage`}
              onChange={(inView) => {
                if (inView) {
                  fireAnimation();
                }
              }}
              threshold={[0.3, 0.7]}
            >
              <Image
                src="/images/joker/color2.svg"
                alt="Guarana joker yellow color"
                width={200}
                height={280}
              />
            </InView>
            <InView
              as="div"
              className={`${styles.color} colorImage`}
              onChange={(inView) => {
                if (inView) {
                  fireAnimation();
                }
              }}
              threshold={[0.3, 0.7]}
            >
              <Image
                src="/images/joker/color3.svg"
                alt="Guarana joker red color"
                width={200}
                height={280}
              />
            </InView>
            <InView
              as="div"
              className={`${styles.color} colorImage`}
              onChange={(inView) => {
                if (inView) {
                  fireAnimation();
                }
              }}
              threshold={[0.3, 0.7]}
            >
              <Image
                src="/images/joker/color4.svg"
                alt="Guarana joker orange color"
                width={200}
                height={280}
              />
            </InView>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Colors;
