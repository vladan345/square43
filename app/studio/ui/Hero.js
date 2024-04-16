"use client";
import React from "react";
import styles from "./styles/Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className={styles.heroDescription}>
        <h2 className={styles.tagline}>
          We are not an award-winning agency...{" "}
          <span className={styles.gradientText}>Yet!</span>
        </h2>
      </div>

      <div className={styles.heroImageContainer}>
        <Image
          className={styles.heroImage}
          alt="hero image"
          src={"/images/Home.png"}
          width={"400"}
          height={"100"}
        ></Image>
      </div>
    </>
  );
}
