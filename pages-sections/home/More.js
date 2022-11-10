import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import styles from "../../styles/section-css/home/More.module.css";

function More() {
  const [index, setIndex] = useState(0);
  const titles1 = ["More than a team", "More than a client"];
  const titles2 = ["Less stress", "Less crap"];
  const descriptions1 = [
    "Though we are few, we are a movement.",
    "We approach your project as our own, fair and square.",
  ];
  const descriptions2 = [
    "We keep our deadlines neat and alive - you'll never wait for us.",
    "We keep our communication clear and efficient: more time for greatness!",
  ];

  useEffect(() => {
    fireAnimation();
    const interval = setInterval(() => {
      if (index > 0) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 6000);
    return () => clearInterval(interval); //This is a cleanup function
  }, [index]);

  function fireAnimation() {
    gsap.from(".more", {
      skewX: -30,
      duration: 1.5,
      yPercent: 100,
      ease: "power4",
      stagger: 0.02,
    });
    gsap.to(".more", {
      skewX: 0,
      duration: 1.5,
      yPercent: 0,
      ease: "power4",
      stagger: 0.02,
    });
    setTimeout(() => {
      gsap.to(".more", {
        duration: 1.5,
        yPercent: 100,
        ease: "power4",
      });
    }, 5000);
  }

  return (
    <div className={styles.More}>
      <div className={styles.wrapper}>
        {/* <Square image="/images/square3.webp" height={560} /> */}
        <div className={styles.moreWrap}>
          <p className={styles.tag}>Behind our Drive</p>
          <h2 className={styles.title}>
            {titles1[index].split(/(\s+)/).map((word, key) => {
              if (word == " ") {
                return " ";
              } else {
                return (
                  <span key={key} className="mask">
                    <span className="more">{word}</span>
                  </span>
                );
              }
            })}
          </h2>
          <p className={styles.subheading}>
            {descriptions1[index].split(/(\s+)/).map((word, key) => {
              if (word == " ") {
                return " ";
              } else {
                return (
                  <span key={key} className="mask">
                    <span className="more">{word}</span>
                  </span>
                );
              }
            })}
          </p>
          <h2 className={styles.title}>
            {titles2[index].split(/(\s+)/).map((word, key) => {
              if (word == " ") {
                return " ";
              } else {
                return (
                  <span key={key} className="mask">
                    <span className="more">{word}</span>
                  </span>
                );
              }
            })}
          </h2>
          <p className={styles.subheading}>
            {descriptions2[index].split(/(\s+)/).map((word, key) => {
              if (word == " ") {
                return " ";
              } else {
                return (
                  <span key={key} className="mask">
                    <span className="more">{word}</span>
                  </span>
                );
              }
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default More;
