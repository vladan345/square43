import React, { useState, useEffect } from "react";
import styles from "../../styles/section-css/home/Hero.module.css";
import Square from "../../components/Square";
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
  });
  function fireAnimation() {
    gsap.from(".word", {
      duration: 1.5,
      yPercent: 100,
      ease: "power4",
      stagger: 0.1,
    });
    gsap.to(".word", {
      duration: 1.5,
      yPercent: 0,
      ease: "power4",
      stagger: 0.1,
    });
    setTimeout(() => {
      gsap.to(".word", {
        duration: 0.5,
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
            return (
              <span key={key} className="mask">
                <span className="word">{word == " " ? "I" : word}</span>
              </span>
            );
          })}
        </p>
        {/* <Square image="/square-temp.webp" height={560} /> */}
      </div>
    </div>
  );
}
