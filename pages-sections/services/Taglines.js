import React from "react";
import styles from "../../styles/section-css/services/Taglines.module.css";
import CountUp from "react-countup";
import { MotionAnimate } from "react-motion-animate";
import { InView } from "react-intersection-observer";
function Taglines() {
  return (
    <div className={styles.Taglines}>
      <div className="wrapper">
        <MotionAnimate speed={0.7} reset={true} animation="fadeInUp">
          <div style={{ height: "200vh", paddingTop: "100px" }}>
            <h2 className={styles.tagline}>
              <span className={styles.gradientText}>
                <InView as="span">
                  {({ inView, ref }) => (
                    <span ref={ref}>
                      {inView ? (
                        <CountUp
                          useEasing={true}
                          start={0.0}
                          end={99.9}
                          decimals={1}
                        />
                      ) : null}
                    </span>
                  )}
                </InView>
                %
              </span>{" "}
              of our
              <br />
              clients came through stellar reviews.
            </h2>
          </div>
        </MotionAnimate>
        <MotionAnimate speed={0.7} reset={true} animation="fadeInUp">
          <div style={{ height: "200vh" }}>
            <h2 className={styles.tagline}>
              We developed over{" "}
              <span className={styles.gradientText}>
                <InView as="span">
                  {({ inView, ref }) => (
                    <span ref={ref}>
                      {inView ? (
                        <CountUp useEasing={true} start={0} end={400} />
                      ) : null}
                    </span>
                  )}
                </InView>{" "}
                websites
              </span>{" "}
              from scratch.
            </h2>
          </div>
        </MotionAnimate>
        <MotionAnimate speed={0.7} reset={true} animation="fadeInUp">
          <div style={{ height: "200vh" }}>
            <h2 className={styles.tagline}>
              Authored over
              <br />
              <span className={styles.gradientText}>
                <InView as="span">
                  {({ inView, ref }) => (
                    <span ref={ref}>
                      {inView ? (
                        <CountUp useEasing={true} start={0} end={700} />
                      ) : null}
                    </span>
                  )}
                </InView>{" "}
                blog
              </span>{" "}
              posts.
            </h2>
          </div>
        </MotionAnimate>
        <MotionAnimate speed={0.7} reset={true} animation="fadeInUp">
          <div style={{ height: "200vh" }}>
            <h2 className={styles.tagline}>
              Make up to{" "}
              <span className={styles.gradientText}>
                <InView as="span">
                  {({ inView, ref }) => (
                    <span ref={ref}>
                      {inView ? (
                        <CountUp useEasing={true} start={0} end={3} />
                      ) : null}
                    </span>
                  )}
                </InView>{" "}
                brandbooks
              </span>{" "}
              per month.
            </h2>
          </div>
        </MotionAnimate>
        <MotionAnimate speed={0.7} reset={true} animation="fadeInUp">
          <div style={{ height: "200vh" }}>
            <h2 className={styles.tagline}>
              Digitally transformed over{" "}
              <span className={styles.gradientText}>
                <InView as="span">
                  {({ inView, ref }) => (
                    <span ref={ref}>
                      {inView ? (
                        <CountUp useEasing={true} start={0} end={60} />
                      ) : null}
                    </span>
                  )}
                </InView>{" "}
                companies
              </span>{" "}
              across Europe.
            </h2>
          </div>
        </MotionAnimate>
        <MotionAnimate speed={0.7} reset={true} animation="fadeInUp">
          <div style={{ height: "200vh" }}>
            <h2 className={styles.tagline}>
              All done by using
              <br />
              <span className={styles.gradientText}>
                <InView as="span">
                  {({ inView, ref }) => (
                    <span ref={ref}>
                      {inView ? (
                        <CountUp useEasing={true} start={100} end={0} />
                      ) : null}
                    </span>
                  )}
                </InView>{" "}
                shortcuts.
              </span>
            </h2>
          </div>
        </MotionAnimate>
      </div>
    </div>
  );
}

export default Taglines;
