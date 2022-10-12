import React, { useState, useEffect, useLayoutEffect } from "react"; // eslint-disable-line no-unused-vars
import Link from "next/link";
import styles from "../styles/component-css/ProjectHero.module.css";

import Spinner from "../components/Spinner";
import Image from "next/image";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveOut,
  Sticky,
  ZoomOut,
} from "react-scroll-motion";

function ProjectHero(props) {
  const [isLoading, setLoading] = useState(false); // eslint-disable-line no-unused-vars

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  // }, []);
  // useLayoutEffect(() => {
  //   if (isLoading) {
  //     console.log("laoding");
  //     document.body.setAttribute(
  //       "style",
  //       "overflow-y: hidden !important; height: 100vh !important"
  //     );
  //   }

  //   if (!isLoading) {
  //     console.log("not laoding");
  //     document.body.setAttribute(
  //       "style",
  //       "overflow-y: auto !important; height: auto !important"
  //     );
  //   }
  // }, [isLoading]);
  const {
    // name,
    color,
    heroOverlay,
    slogan,
    // heroImage,
    heroVideo,
    logoImage,
    missionShort,
    solutionShort,
    missionLong,
    solutionLong,
    leftColor,
    rightColor,
    leftText,
    rightText,
    services,
  } = props.project;

  return (
    //this div needs to have gradient overlay:
    //linear-gradient(#20202080, #20202080)
    <div
      className={styles.ProjectHero}
      style={isLoading ? { height: "100vh" } : { height: "auto" }}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <div style={{ animation: "fadeIn 2s forwards" }}>
          <ScrollContainer>
            <ScrollPage>
              <Animator
                animation={batch(
                  Fade(),
                  Sticky(),
                  MoveOut(0, -100),
                  ZoomOut(1, 1.15)
                )}
              >
                <div className="project-background">
                  <video width="1920" height="1080" autoPlay muted loop>
                    <source src={heroVideo} type="video/mp4" />
                  </video>
                  <div
                    className={styles.overlay}
                    style={{ background: heroOverlay }}
                  ></div>
                </div>
              </Animator>
              <Animator
                animation={batch(FadeOut(1, 0), Sticky(), MoveOut(0, -200))}
              >
                <div className={`wrapper ${styles.heroWrapper}`}>
                  <div className={styles.heroContent}>
                    <h1
                      className={styles.projectLogo}
                      style={{
                        animation: "1s fadeInRight forwards ease-in-out",
                      }}
                    >
                      <Image
                        src={logoImage}
                        alt=""
                        width="686"
                        height="172"
                        priority
                      />
                    </h1>
                    <p
                      className={styles.slogan}
                      style={{
                        animation: "1s 1s fadeInUp forwards ease-in-out",
                      }}
                      dangerouslySetInnerHTML={{ __html: slogan }}
                    ></p>
                  </div>

                  <div className={styles.servicesTags}>
                    {services.map((service, key) => {
                      let counter = 200;
                      return (
                        <Link key={key} href={"/services/" + service}>
                          <a
                            style={{
                              animation: `fadeIn 1s ${
                                counter * key + 500
                              }ms forwards ease-in-out`,
                              opacity: 0,
                              background: color,
                            }}
                            className={styles.serviceLink}
                          >
                            {service.split("-").join(" ")}
                          </a>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </Animator>
            </ScrollPage>
            <ScrollPage>
              <div className={styles.missionSolution}>
                <div className={styles.backgroundSplit}>
                  <div
                    className={styles.splitLeft}
                    style={{ background: leftColor }}
                  ></div>
                  <div
                    className={styles.splitRight}
                    style={{ background: rightColor }}
                  ></div>
                </div>
                <Animator
                  animation={batch(
                    FadeIn(0, 1),
                    Move(0, -100, 0, 0),
                    FadeOut(1, 0)
                  )}
                >
                  <div className="wrapper">
                    <div className={styles.row}>
                      <div className={styles.col}>
                        <h2
                          className={styles.missionSolutionHeading}
                          style={{ color: color }}
                        >
                          Mission
                        </h2>
                        <p
                          className={styles.description}
                          style={{ color: leftText }}
                        >
                          {missionShort}
                        </p>
                      </div>
                      <div className={styles.col}>
                        <p
                          className={styles.description}
                          style={{ color: rightText }}
                        >
                          {missionLong}
                        </p>
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.col}>
                        <h2
                          className={styles.missionSolutionHeading}
                          style={{ color: color }}
                        >
                          Solution
                        </h2>
                        <p
                          className={styles.description}
                          style={{ color: leftText }}
                        >
                          {solutionShort}
                        </p>
                      </div>
                      <div className={styles.col}>
                        <p
                          className={styles.description}
                          style={{ color: rightText }}
                        >
                          {solutionLong}
                        </p>
                      </div>
                    </div>
                  </div>
                </Animator>
              </div>
            </ScrollPage>
          </ScrollContainer>
        </div>
      )}
    </div>
  );
}

export default ProjectHero;
