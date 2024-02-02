"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles/Project.module.css";

function Project() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the next slide index, looping back to the first slide if needed
      const nextSlide = (active + 1) % 3;
      setActive(nextSlide);
    }, 5000); // Change slide every 5 seconds

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [active]);

  const projects = [
    {
      id: 0,
      title: "Northprim",
      description:
        "How to create a shining brand image for a company within the highly competitive IT industry.",
      link: "/projects/northprim",
      video: "/images/northprim/Northprim-hero.mp4",
    },
    {
      id: 1,
      title: "GoGaudi",
      description:
        "How to create a shining brand image for a company within the highly competitive IT industry.",
      link: "/projects/gogaudi",
      video: "/images/gogaudi/heroGogaudi.mp4",
    },
    {
      id: 2,
      title: "Klei Works",
      description:
        "How to create a shining brand image for a company within the highly competitive IT industry.",
      link: "/projects/klei",
      video: "/images/klei/heroKlei.mp4",
    },
  ];
  return (
    <div className={styles.Project}>
      <div className={styles.sliderWrap}>
        {projects.map((project, index) => {
          console.log(project.link);
          return (
            <div
              className={`${styles.wrapper} ${
                active == index ? styles.active : null
              }`}
              key={index}
            >
              {/* <div className={styles.linkWrapMobile}>
                <Link href="/projects" className="readMore">
                  Our work
                  <div className="icon">
                    <Image
                      src="/images/arrow.svg"
                      alt="Arrow icon"
                      width={40}
                      height={40}
                    />
                  </div>
                </Link>
              </div> */}
              {/* <Square image="/images/square4.webp" height={560} /> */}

              <div className={styles.projectWrap}>
                <p className={styles.tag}>Projects</p>
                <h2 className={styles.title}>{project.title}</h2>
                <p className={styles.subheading}>{project.description}</p>
                <div className={styles.linkWrap}>
                  <Link href={project.link} className="readMore">
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
                  <source src={project.video} type="video/mp4" />
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
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${styles.dot} ${
                active == project.id ? styles.dotActive : null
              }`}
              onClick={() => setActive(project.id)}
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
