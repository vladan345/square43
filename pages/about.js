import React from "react";
import styles from "../styles/About.module.css";
import Head from "next/head";
import { MotionAnimate } from "react-motion-animate";

function About() {
  return (
    <>
      <Head>
        <title>Square43 Studio | About</title>
        <meta
          name="description"
          content="Building is believing - and we'll build a bright future in front of you."
        />
      </Head>
      <main>
        <div className={styles.About}>
          <div className="wrapper">
            <MotionAnimate speed={0.7} reset={true} animation="fadeInUp">
              <div style={{ height: "200vh", paddingTop: "100px" }}>
                <p className={styles.statement}>
                  <span className={styles.gradientText}>
                    Building is believing
                  </span>{" "}
                  🙏 - and we&apos;ll build a bright future in front of you.
                </p>
              </div>
            </MotionAnimate>
            <MotionAnimate speed={0.7} reset={true} animation="fadeInUp">
              <div style={{ height: "200vh" }}>
                <p className={styles.statement}>
                  See your brand take its{" "}
                  <span className={styles.gradientText}>first breath.</span> 🐣
                </p>
              </div>
            </MotionAnimate>
            <MotionAnimate speed={0.7} reset={true} animation="fadeInUp">
              <div style={{ height: "200vh" }}>
                <p className={styles.statement}>
                  Word your{" "}
                  <span className={styles.gradientText}>copy well</span> 🔤 - it
                  speaks a thousand words.
                </p>
              </div>
            </MotionAnimate>
            <MotionAnimate speed={0.7} reset={true} animation="fadeInUp">
              <div style={{ height: "200vh" }}>
                <p className={styles.statement}>
                  Digital experience beyond your{" "}
                  <span className={styles.lineThrough}>expectations</span>{" "}
                  <span className={styles.gradientText}>imagination.</span> 💭
                </p>
              </div>
            </MotionAnimate>
            <MotionAnimate speed={0.7} reset={true} animation="fadeInUp">
              <div style={{ height: "200vh" }}>
                <p className={styles.statement}>
                  Socialize and get in{" "}
                  <span className={styles.gradientText}>touch</span> 👉👈 with
                  your audience.
                </p>
              </div>
            </MotionAnimate>
            <MotionAnimate speed={0.7} reset={true} animation="fadeInUp">
              <div style={{ height: "200vh" }}>
                <p className={styles.statement}>
                  Get your shop - there is a line in front, but{" "}
                  <span className={styles.gradientText}>
                    you&apos;re next up!
                  </span>{" "}
                  😀
                </p>
              </div>
            </MotionAnimate>
            <MotionAnimate speed={0.7} reset={true} animation="fadeInUp">
              <div style={{ height: "200vh" }}>
                <p className={styles.statement}>
                  Why go in circles? <br />
                  Go
                  <span className={styles.gradientText}> Square (43)</span>
                </p>
              </div>
            </MotionAnimate>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
