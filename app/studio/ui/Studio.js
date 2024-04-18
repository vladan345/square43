"use client";
import React from "react";
import styles from "./styles/Studio.module.css";

export default function Studio() {
  return (
    <>
      <div className={styles.studioExplanation}>
        <div className={styles.credo}>
          <h1 className={styles.ourCredo}>
            <span>O</span>
            <span>U</span>
            <span>R</span>
            <span className={styles.noshow}>_</span>
            <span>C</span>
            <span>R</span>
            <span>E</span>
            <span>D</span>
            <span>O</span>
          </h1>
          <h1 className={styles.honesty}>
            <span>H</span>
            <span>O</span>
            <span>N</span>
            <span>E</span>
            <span>S</span>
            <span>T</span>
            <span>Y</span>
          </h1>
          <h1 className={styles.perfection}>
            <span>P</span>
            <span>E</span>
            <span>R</span>
            <span>F</span>
            <span>E</span>
            <span>C</span>
            <span>T</span>
            <span>I</span>
            <span>O</span>
            <span>N</span>
          </h1>
          <h1 className={styles.dedication}>
            <span>D</span>
            <span>E</span>
            <span>D</span>
            <span>I</span>
            <span>C</span>
            <span>A</span>
            <span>T</span>
            <span>I</span>
            <span>O</span>
            <span>N</span>
          </h1>
          <h1 className={styles.teamwork}>
            <span>T</span>
            <span>E</span>
            <span>A</span>
            <span>M</span>
            <span>W</span>
            <span>O</span>
            <span>R</span>
            <span>K</span>
          </h1>
        </div>
      </div>
    </>
  );
}
