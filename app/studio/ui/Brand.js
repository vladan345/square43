"use client";
import React from "react";
import styles from "./styles/Brand.module.css";
import Image from "next/image";

export default function Brand() {
  return (
    <>
      <div className={styles.brand}>
        <div className={styles.brandName}>
          <div className={styles.brandNameContainer}>
            <h3>Behind the Brand</h3>
            <p>Mistakes had been made</p>
          </div>
        </div>
        <div className={styles.brandContent}>
          <p>
            In 2012, our founder NT opened an agency with a couple of his
            friends. With the right amount of peer pressure, he agreed to name
            the agency NUL Apps.
          </p>
          <p>
            In 2023, it was high time for a rebrand, the first thought being: we
            need a new name.
          </p>
        </div>
      </div>

      <div className={styles.squareVisualExplanation}>
        <div className={styles.squareContainerLeft}>
          <div className={styles.inner}>
            <div className={styles.innerGradient}></div>
          </div>
          <div className={styles.horizontalLine}></div>
        </div>
        <div className={styles.squareContainerMiddle}>
          <div className={styles.innerTop}>
            <p>Why Square?</p>
          </div>
          <div className={styles.verticalLine}></div>
          <div className={styles.innerMiddle}>
            <Image
              src={"/images/43black.svg"}
              width={400}
              height={400}
              alt="43"
            />
          </div>
          <div className={styles.verticalLine}></div>
          <div className={styles.innerBottom}>
            <p>Why 43?</p>
          </div>
        </div>
        <div className={styles.squareContainerRight}>
          <div className={styles.inner}>
            <p>43</p>
          </div>
          <div className={styles.horizontalLine}></div>
        </div>
      </div>

      <div className={styles.brandOrigin}>
        <div className={styles.brandLeft}>
          <div className={styles.brandLeftContainer}>
            <p>Long story short: we saw a sign.</p>
            <p>Literally.</p>
          </div>
        </div>
        <div className={styles.brandRight}>
          <p>
            As we were leaving our office building afer another name
            brainstorming session, our gaze fell on a simple sign on the
            building wall:
          </p>
        </div>
      </div>

      <div className={styles.squareOrigin}>
        <Image
          src={"/images/Znak 2.png"}
          width={980}
          height={257}
          alt="znak1"
        />
        <Image
          src={"/images/Znak 1.png"}
          width={300}
          height={257}
          alt="znak2"
        />
      </div>
    </>
  );
}
