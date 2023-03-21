import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import Link from "next/link";
import styles from "../styles/component-css/ProjectHero.module.css";
import Spinner from "../components/Spinner";
import Image from "next/image";

function ProjectHero(props) {
  const [isLoading, setLoading] = useState(false); // eslint-disable-line no-unused-vars

  const {
    name,
    slogan,
    services,
    color,
    heroImage,
    heroVideo,
    heroArrow,
    missionShort,
    solutionShort,
    missionLong,
    solutionLong,
    resultShort,
    resultLong,
  } = props.project;

  return (
    <div
      className={styles.ProjectHero}
      style={isLoading ? { height: "100vh" } : { height: "auto" }}
    >
      <div className={styles.hero}>
        <video className={styles.heroVideo} playsInline autoPlay muted loop>
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="wrapper">
          <h1 className={styles.projectName}>{name}</h1>
          <h2 className={styles.slogan}>{slogan}</h2>

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
          <div className={styles.arrow}>
            <div className={styles.iconOverlay}></div>
            <div className={styles.icon}>
              <Image
                src={heroArrow}
                width={40}
                height={40}
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
