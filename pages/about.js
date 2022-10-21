import React from "react";
import Image from "next/image";
import styles from "../styles/About.module.css";

function About() {
  return (
    <div className={styles.About}>
      <div className="wrapper">
        <p className={styles.statement}>
          <span className={styles.gradientText}>Building is believing</span> 🙏
          - and we&apos;ll build a bright future in front of you.
        </p>

        <p className={styles.statement}>
          See your brand take its{" "}
          <span className={styles.gradientText}>first breath.</span> 🐣
        </p>

        <p className={styles.statement}>
          Word your <span className={styles.gradientText}>copy well</span> 🔤 -
          it speaks a thousand words.
        </p>

        <p className={styles.statement}>
          Digital experience beyond your{" "}
          <span className={styles.lineThrough}>expectations</span>{" "}
          <span className={styles.gradientText}>imagination.</span> 💭
        </p>

        <p className={styles.statement}>
          Socialize and get in{" "}
          <span className={styles.gradientText}>touch</span> 👉👈 with your
          audience.
        </p>

        <p className={styles.statement}>
          Get your shop - there is a line in front, but{" "}
          <span className={styles.gradientText}>you&apos;re next up!</span> 😀
        </p>
      </div>
    </div>
  );
}

export default About;
