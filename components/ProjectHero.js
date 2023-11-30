"use client";
import React, { useRef, useEffect, Suspense } from "react"; // eslint-disable-line no-unused-vars
import Link from "next/link";
import styles from "@/styles/component-css/ProjectHero.module.css";
import Image from "next/image";
import { getCurrentProject } from "@/utils/data/getData";
import { usePathname } from "next/navigation";
import { useLoading } from "@/utils/hooks/LoadingContext";

function ProjectHero() {
  const { loading, setLoading } = useLoading();
  let hero = useRef(null);
  useEffect(() => {
    setLoading(false);
  }, []);

  const pathname = usePathname();
  const project = getCurrentProject(pathname.split("/").pop());

  const handleClick = () => {
    let heroHeight = hero.current;
    let html = document.querySelector("html");
    html.style.scrollBehavior = "smooth";
    window.scrollTo(0, heroHeight.offsetHeight);
    setTimeout(() => {
      html.style.scrollBehavior = "auto";
    }, 500);
  };

  return (
    <div
      className={styles.ProjectHero}
      style={loading ? { height: "100vh" } : { height: "auto" }}
    >
      <div className={styles.hero} ref={hero}>
        <video className={styles.heroVideo} playsInline autoPlay muted loop>
          <source src={project.heroVideo} type="video/mp4" />
        </video>

        <div className="wrapper">
          <h1 className={styles.projectName}>{project.name}</h1>
          <h2 className={styles.slogan}>{project.slogan}</h2>

          <p className={styles.serviceHead}>What we&apos;ve done </p>
          <div className={styles.services}>
            {project.services.map((service, key) => {
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
            <div onClick={handleClick} className={styles.icon}>
              <Image
                src={project.heroArrow}
                width={40}
                height={40}
                alt="arrow down icon"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.missionSolution}>
        <div className="wrapper">
          <div className={styles.missionWrap}>
            <div className={styles.content}>
              <h3 className={styles.heading}>Mission</h3>
              <p className={styles.description}>{project.missionShort}</p>
              <p className={styles.description}>{project.missionLong}</p>
            </div>
            <div className={styles.content}>
              <h3 className={styles.heading}>Solution</h3>
              <p className={styles.description}>{project.solutionShort}</p>
              <p className={styles.description}>{project.solutionLong}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectHero;
