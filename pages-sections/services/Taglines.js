import dynamic from "next/dynamic";
const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);
import {
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  MoveIn,
  MoveOut,
  Sticky,
} from "react-scroll-motion";

import React from "react";
import styles from "../../styles/section-css/services/Taglines.module.css";

import { MotionAnimate } from "react-motion-animate";

function Taglines() {
  const FadeUp = batch(Fade(), MoveIn(0, 200), MoveOut(0, -500), Sticky());
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <div className={styles.Taglines}>
      <div className="wrapper">
        <MotionAnimate speed={0.7} reset={true} animation="fadeInUp">
          <div style={{ height: "100vh" }}>
            <h2 className={styles.tagline}>
              <span className={styles.gradientText}>99.9%</span> of our clients
              came through recommendations.
            </h2>
          </div>
        </MotionAnimate>
        <MotionAnimate speed={0.7} reset={true} animation="fadeInUp">
          <div style={{ height: "100vh" }}>
            <h2 className={styles.tagline}>
              We developed over{" "}
              <span className={styles.gradientText}>400 websites</span> from
              scratch.
            </h2>
          </div>
        </MotionAnimate>
        <MotionAnimate speed={0.7} reset={true} animation="fadeInUp">
          <div style={{ height: "100vh" }}>
            <h2 className={styles.tagline}>
              Authored over{" "}
              <span className={styles.gradientText}>700 blog</span> posts.
            </h2>
          </div>
        </MotionAnimate>
        <MotionAnimate speed={0.7} reset={true} animation="fadeInUp">
          <div style={{ height: "100vh" }}>
            <h2 className={styles.tagline}>
              Make up to{" "}
              <span className={styles.gradientText}>3 brandbooks</span> per
              month.
            </h2>
          </div>
        </MotionAnimate>
        <MotionAnimate speed={0.7} reset={true} animation="fadeInUp">
          <div style={{ height: "100vh" }}>
            <h2 className={styles.tagline}>
              Digitally transformed over{" "}
              <span className={styles.gradientText}>60 companies</span> across
              Europe.
            </h2>
          </div>
        </MotionAnimate>
        <MotionAnimate speed={0.7} reset={true} animation="fadeInUp">
          <div style={{ height: "100vh" }}>
            <h2 className={styles.tagline}>
              All done by using{" "}
              <span className={styles.gradientText}>0 shortcuts.</span>
            </h2>
          </div>
        </MotionAnimate>
        {/* <ScrollContainer>
      <ScrollPage>
        <Animator animation={FadeUp}>
        <h2 className={styles.tagline}>
            <span className={styles.gradientText}>99.9%</span> of our clients
            came through recommendations.
          </h2>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <h2 className={styles.tagline}>
            We developed over
            <span className={styles.gradientText}>400 websites</span> from
            scratch.{" "}
          </h2>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <h2 className={styles.tagline}>
            Authored over <span className={styles.gradientText}>700 blog</span>{" "}
            posts.
          </h2>{" "}
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <h2 className={styles.tagline}>
            {" "}
            Make up to <span className={styles.gradientText}>
              3 brandbooks
            </span>{" "}
            per month.
          </h2>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <h2 className={styles.tagline}>
            Digitally transformed over
            <br />
            <span className={styles.gradientText}>60 companies</span> across
            Europe.
          </h2>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <h2 className={styles.tagline}>
            All done by using{" "}
            <span className={styles.gradientText}>0 shortcuts.</span>
          </h2>
        </Animator>
      </ScrollPage>
    </ScrollContainer> */}
      </div>
    </div>
  );
}

export default Taglines;
