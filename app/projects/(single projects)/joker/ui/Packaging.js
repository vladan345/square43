"use client";
import Image from "next/image";
import styles from "./styles/Packaging.module.css";
import { Parallax } from "react-scroll-parallax";
function Packaging() {
  return (
    <div className={styles.Packaging}>
      <div className={styles.wrapper}>
        <Parallax className={styles.jokic} speed={15}>
          <Image
            src="/images/joker/nikola-jokic.png"
            alt="Nikola Jokic Guarana Joker"
            width={560}
            height={781}
          />
        </Parallax>
        <div className={styles.contentWrap}>
          <div className={styles.col}>
            <h2>Packaging Design</h2>
            <p className={styles.description}>
              Guarana is a well-known brand of energy drinks in the Balkans with
              a wide range of products that each represents a different flavor
              and different approach. What every energy drink by Guarana has in
              common is the daring and direct tone of voice that is usually
              embodied in the product name.
            </p>
            <p className={styles.description}>
              Guarana set a challenge for all willing to participate: come up
              with an original concept for packaging design that would showcase
              their newly signed collab with none other than the iconic Nikola
              Jokic, the Joker. Spoiler: we won the challenge.
            </p>
          </div>
          <div className={styles.col}>
            <div className={styles.canWrap}>
              <Parallax
                className={`${styles.can} ${styles.left}`}
                translateX={["0px", "100px"]}
                speed={5}
              >
                <Image
                  src="/images/joker/leva.webp"
                  alt="Guarana Joker can"
                  width={311}
                  height={648}
                />
              </Parallax>
              <Parallax
                className={`${styles.can} ${styles.right}`}
                translateX={["0px", "-100px"]}
              >
                <Image
                  src="/images/joker/desna.webp"
                  alt="Guarana Joker can"
                  width={412}
                  height={679}
                />
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packaging;
