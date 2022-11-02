import React from "react";
import styles from "../../styles/section-css/services/Taglines.module.css";

import { MotionAnimate } from "react-motion-animate";

function Taglines() {
  return (
    <div className={styles.Taglines}>
      <div className="wrapper">
        <MotionAnimate speed={0.7} reset={true} animation="fadeInUp">
          <div style={{ height: "200vh", paddingTop: "100px" }}>
            <h2 className={styles.tagline}>
              <span className={styles.gradientText}>99.9%</span> of our clients
              came through recommendations.
            </h2>
          </div>
        </MotionAnimate>
        <MotionAnimate speed={0.7} reset={true} animation="fadeInUp">
          <div style={{ height: "200vh" }}>
            <h2 className={styles.tagline}>
              We developed over{" "}
              <span className={styles.gradientText}>400 websites</span> from
              scratch.
            </h2>
          </div>
        </MotionAnimate>
        <MotionAnimate speed={0.7} reset={true} animation="fadeInUp">
          <div style={{ height: "200vh" }}>
            <h2 className={styles.tagline}>
              Authored over{" "}
              <span className={styles.gradientText}>700 blog</span> posts.
            </h2>
          </div>
        </MotionAnimate>
        <MotionAnimate speed={0.7} reset={true} animation="fadeInUp">
          <div style={{ height: "200vh" }}>
            <h2 className={styles.tagline}>
              Make up to{" "}
              <span className={styles.gradientText}>3 brandbooks</span> per
              month.
            </h2>
          </div>
        </MotionAnimate>
        <MotionAnimate speed={0.7} reset={true} animation="fadeInUp">
          <div style={{ height: "200vh" }}>
            <h2 className={styles.tagline}>
              Digitally transformed over{" "}
              <span className={styles.gradientText}>60 companies</span> across
              Europe.
            </h2>
          </div>
        </MotionAnimate>
        <MotionAnimate speed={0.7} reset={true} animation="fadeInUp">
          <div style={{ height: "200vh" }}>
            <h2 className={styles.tagline}>
              All done by using{" "}
              <span className={styles.gradientText}>0 shortcuts.</span>
            </h2>
          </div>
        </MotionAnimate>
      </div>
    </div>
  );
}

export default Taglines;
