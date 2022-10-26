import React, { useState, useEffect, useLayoutEffect } from "react"; // eslint-disable-line no-unused-vars
import Link from "next/link";
import styles from "../styles/component-css/ProjectHero.module.css";

import Spinner from "../components/Spinner";
import Image from "next/image";

import { DispatchCursor, CURSOR_COLOR } from "haspr-cursor";

function ProjectHero(props) {
  const [isLoading, setLoading] = useState(false); // eslint-disable-line no-unused-vars

  const dispatch = DispatchCursor();
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
    name,
    slogan,
    services,
    color,
    heroImage,
    heroVideo,
    missionShort,
    solutionShort,
    missionLong,
    solutionLong,
  } = props.project;

  return (
    <div
      className={styles.ProjectHero}
      style={isLoading ? { height: "100vh" } : { height: "auto" }}
    >
      <div className={styles.hero}>
        <video className={styles.heroVideo} autoPlay muted loop>
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="wrapper">
          <h1 className={styles.projectName}>{name}</h1>
          <h2
            onMouseEnter={() => CURSOR_COLOR("WHITE")}
            onMouseLeave={() => CURSOR_COLOR("END")}
            className={styles.slogan}
          >
            {slogan}
          </h2>

          <p className={styles.serviceHead}>What we&apos;ve done </p>
          <div className={styles.services}>
            {services.map((service, key) => {
              let counter = 200;
              return (
                <Link
                  key={key}
                  href={"/services/" + service}
                  style={{
                    animation: `fadeIn 1s ${
                      counter * key + 500
                    }ms forwards ease-in-out`,
                    opacity: 0,
                  }}
                  className={styles.serviceLink}
                >
                  {service.split("-").join(" ")}
                </Link>
              );
            })}
          </div>
          <div className={styles.arrow} style={{ background: color }}>
            <div className={styles.iconOverlay}></div>
            <div className={styles.icon}>
              <Image
                src="/images/arrow-down-solid.svg"
                width={30}
                height={30}
                alt="arrow down icon"
              />
            </div>
          </div>
        </div>
        {isLoading ? <Spinner /> : <div></div>}
      </div>
      <div className={styles.missionSolution}>
        <div className="wrapper">
          <div className={styles.missionWrap}>
            <div className={styles.content}>
              <h3 className={styles.heading}>Mission</h3>
              <p className={styles.description}>{missionShort}</p>
              <p className={styles.description}>{missionLong}</p>
            </div>
            <div className={styles.content}>
              <h3 className={styles.heading}>Solution</h3>
              <p className={styles.description}>{solutionShort}</p>
              <p className={styles.description}>{solutionLong}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectHero;
