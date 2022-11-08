import React from "react";
import styles from "../../styles/section-css/imunoshop/Posts.module.css";
import Image from "next/image";

import { InView } from "react-intersection-observer";
import { gsap } from "gsap";
function Posts() {
  return (
    <div>
      <div className="wrapper">
        <div className={styles.row}>
          <InView
            as="div"
            onChange={(inView) => {
              if (inView) {
                gsap.to(".post1", {
                  y: 0,
                  opacity: 1,
                  duration: 2,
                  ease: "power4",
                });
              }
            }}
          >
            <Image
              src="/images/imunoshop/post1.webp"
              alt="Social media Imunoshop post 1"
              width={755}
              height={373}
              className={`${styles.postImage} post1`}
            />
            <Image
              src="/images/imunoshop/mobilePost1.webp"
              alt="Social media Imunoshop post 1"
              width={370}
              height={750}
              className={`${styles.mobilePost1} post1`}
            />
          </InView>
          <div className={styles.paragraphs}>
            <p className={styles.description}>
              Some behind-the-sheets insight: the key is to vary content in such
              a way that it remains relevant for your brand - this is why Imuno
              shop does not post solely product promo.
            </p>
            <p className={styles.description}>
              Our content creators made sure to include helpful health-related
              tips, quick and healthy recipes, relevant trends and occasional
              product promo!
            </p>
          </div>
        </div>
        <div className={styles.row}>
          <InView
            as="div"
            onChange={(inView) => {
              if (inView) {
                gsap.to(".post2", {
                  y: 0,
                  opacity: 1,
                  duration: 2,
                  ease: "power4",
                });
                console.log("Visible");
              }
            }}
          >
            <Image
              src="/images/imunoshop/post2.webp"
              alt="Social media Imunoshop post 2"
              width={755}
              height={373}
              className={`${styles.postImage} post2`}
            />
            <Image
              src="/images/imunoshop/mobilePost2.webp"
              alt="Social media Imunoshop post 2"
              width={370}
              height={750}
              className={`${styles.mobilePost2} post2`}
            />
          </InView>
          <div className={styles.paragraphs}>
            <p className={styles.description}>
              In our creative studio, we like to keep it dynamic. Varied content
              is important, but so are varied types of visuals.
            </p>
            <p className={styles.description}>
              Though static visuals with clear copy are a safe choice, videos
              and motion graphics are indisputably becoming more popular.
              Keeping up with trends is also an important part of our work, so
              we made sure to include eye-catching animations to make Imuno shop
              stand out even more!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
