import React, { useState } from "react";
import styles from "../../styles/section-css/home/Hero.module.css";
import Square from "../../components/Square";

export default function Hero() {
  const [count, setCount] = useState(0);
  const stamps = ["Digital", "Creative", "Studio."];
  const stamps2 = ["Modern", "experience", "for", "tomorrow", "brands."];

  return (
    <div className={styles.Hero}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Square43</h1>
        <p className={styles.stamp}>
          {stamps2.map((stamp, key) => {
            let counter = 300;
            const style = {
              animation: `translateUp 1s ${
                counter * key
              }ms forwards ease-in-out`,
              transform: "translateY(100%)",
            };
            return (
              <span key={key} style={style} className="word">
                {stamp}&nbsp;
              </span>
            );
          })}
        </p>
        <Square image="/square-temp.webp" height={560} />
      </div>
    </div>
  );
}
