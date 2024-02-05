"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles/Project.module.css";

function Project({ latestProjects }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextSlide = (active + 1) % 3;
      setActive(nextSlide);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [active]);

  return (
    <div className={styles.Project}>
      <div className={styles.sliderWrap}>
        {latestProjects &&
          latestProjects.map((project, index) => {
            return (
              <div
                className={`${styles.wrapper} ${
                  active == index ? styles.active : null
                }`}
                key={index}
              >
                <div className={styles.projectWrap}>
                  <p className={styles.tag}>Projects</p>
                  <h2 className={styles.title}>{project.title}</h2>
                  <p
                    className={styles.subheading}
                    dangerouslySetInnerHTML={{ __html: project.slogan }}
                  />
                  <div className={styles.linkWrap}>
                    <Link
                      href={`/projects/${project.slug.current}`}
                      className="readMore"
                    >
                      Project
                      <div className="icon">
                        <Image
                          src="/images/arrow.svg"
                          alt="Arrow icon"
                          width={40}
                          height={40}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className={styles.video}>
                  <video autoPlay playsInline muted loop>
                    <source src={project.heroVideo} type="video/mp4" />
                  </video>
                </div>
              </div>
            );
          })}
        <div className={styles.arrowWrap}>
          <Image
            className={styles.prevArrow}
            src="/images/arrow.svg"
            alt="Arrow icon"
            width={40}
            height={40}
            onClick={() => setActive(active == 0 ? 2 : active - 1)}
          />
          {latestProjects &&
            latestProjects.map((project, index) => (
              <div
                key={index}
                className={`${styles.dot} ${
                  active == index ? styles.dotActive : null
                }`}
                onClick={() => setActive(index)}
              ></div>
            ))}
          <Image
            src="/images/arrow.svg"
            alt="Arrow icon"
            width={40}
            height={40}
            onClick={() => setActive(active == 2 ? 0 : active + 1)}
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
