"use client";
import React from "react";
import styles from "./styles/Buildings.module.css";
import Image from "next/image";

export default function Buildings() {
  return (
    <>
      <div className={styles.conclusion}>
        <h2>It suddenly made sense.</h2>
        <p>
          Squares or blocks of identical appearence are symbols of New Belgrade
        </p>
        <div className={styles.buildingWrapper}>
          <Image
            src={"/images/Zgrada.png"}
            alt="zgrada"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100vw", height: "auto" }}
          />
        </div>
        <div className={styles.buildingGradient}></div>
        <div className={styles.underBuildings}>
          <p>
            On top of that, a square is a meeting point of multiple cross-roads,
            where you can meet and greet or miss and lose!
          </p>
        </div>
      </div>

      <div className={styles.videoSection}>
        <div className={styles.vid}>
          <div className={styles.top}></div>
          <div className={styles.middle}></div>
          <div className={styles.bottom}></div>
          <video
            src={"/images/S43_Skies.mp4"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100vw", height: "100vh" }}
            type="video/mp4"
            autoPlay
            loop
            playsInline
            muted
          ></video>
        </div>
        <div className={styles.buildingsConclusion}>
          <h2>In that light, Square43 Studio became a meeting point...</h2>
          <p>
            ...where business meets creativity, as well as a meeting point for
            all creatives of the world.
          </p>
        </div>
      </div>
    </>
  );
}
