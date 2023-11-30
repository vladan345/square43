import React, { useState, useEffect } from "react";
import styles from "../../styles/section-css/home/Hero.module.css";
import { gsap } from "gsap";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const stamps = [
    "Digital Creative Studio.",
    "Everything we do is treated as art.",
    "Modern experience for tomorrow's brands.",
  ];

  useEffect(() => {
    fireAnimation();
    const interval = setInterval(() => {
      if (index > 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 3500);

    return () => clearInterval(interval); //This is a cleanup function
  }, [index]);
  function fireAnimation() {
    gsap.from(".word", {
      skewX: -30,
      duration: 1.5,
      yPercent: 100,
      ease: "power4",
      stagger: 0.05,
    });
    gsap.to(".word", {
      skewX: 0,
      duration: 1.5,
      yPercent: 0,
      ease: "power4",
      stagger: 0.05,
    });
    setTimeout(() => {
      gsap.to(".word", {
        duration: 1.5,
        yPercent: 100,
        ease: "power4",
      });
    }, 3000);
  }
  return (
    <div className={styles.Hero}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Square43</h1>
        <p className={styles.stamp}>
          {stamps[index].split(/(\s+)/).map((word, key) => {
            if (word == " ") {
              return " ";
            } else {
              return (
                <span key={key} className="mask">
                  <span className="word">{word}</span>
                </span>
              );
            }
          })}
        </p>
        {/* <Square image="/square-temp.webp" height={560} /> */}
      </div>
    </div>
  );
}
