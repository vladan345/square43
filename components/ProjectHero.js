import React, { useState, useEffect, useLayoutEffect } from "react"; // eslint-disable-line no-unused-vars
import { Link } from "react-router-dom";
import styles from "../styles/component-css/ProjectHero.module.css";
import { logoImages, heroVideos } from "../utils/constants/projectImages";
import Spinner from "../Spinner/Spinner";

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
      className="ProjectHero"
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
                    <source src={heroVideos[heroVideo]} type="video/mp4" />
                  </video>
                  <div
                    className="overlay"
                    style={{ background: heroOverlay }}
                  ></div>
                </div>
              </Animator>
              <Animator
                animation={batch(FadeOut(1, 0), Sticky(), MoveOut(0, -200))}
              >
                <div className="wrapper hero-wrapper">
                  <div className="hero-content">
                    <h1 className="project-logo">
                      <img src={logoImages[logoImage]} alt="" />
                    </h1>
                    <p
                      className="slogan"
                      dangerouslySetInnerHTML={{ __html: slogan }}
                    ></p>
                  </div>

                  <div className="services-tags">
                    {services.map((service, key) => {
                      let counter = 200;
                      return (
                        <Link
                          style={{
                            animation: `fadeIn 1s ${
                              counter * key + 500
                            }ms forwards ease-in-out`,
                            opacity: 0,
                            background: color,
                          }}
                          key={key}
                          to={"/services/" + service}
                        >
                          {service.split("-").join(" ")}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </Animator>
            </ScrollPage>
            <ScrollPage>
              <div className="mission-and-solution">
                <div className="background-split">
                  <div
                    className="split-left"
                    style={{ background: leftColor }}
                  ></div>
                  <div
                    className="split-right"
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
                    <div className="row">
                      <div className="col">
                        <h2
                          className="mission-heading"
                          style={{ color: color }}
                        >
                          Mission
                        </h2>
                        <p style={{ color: leftText }}>{missionShort}</p>
                      </div>
                      <div className="col">
                        <p style={{ color: rightText }}>{missionLong}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <h2
                          className="mission-heading"
                          style={{ color: color }}
                        >
                          Solution
                        </h2>
                        <p style={{ color: leftText }}>{solutionShort}</p>
                      </div>
                      <div className="col">
                        <p style={{ color: rightText }}>{solutionLong}</p>
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
