import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/component-css/Outro.module.css";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { getAllProjectsExcept } from "../utils/data/getData";

function Outro(props) {
  const [projects, setProjects] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setProjects(getAllProjectsExcept(props.projectId));
      setLoading(false);
    }, 500);
  }, [props.projectId]);

  return (
    <Splide
      aria-label="Featured projects slider"
      options={{
        speed: 1000,
        perPage: 1,
        type: "loop",
        perMove: 1,
        arrows: false,
        autoplay: true,
        interval: 4000,
        pauseOnHover: true,
        easing: "ease-in-out",
        pagination: true,
      }}
    >
      {isLoading
        ? null
        : projects.map((project, key) => (
            <SplideSlide key={key}>
              <div className={styles.Outro}>
                <div className={`${styles.wrapper} wrapper`}>
                  <video className={styles.video} autoPlay muted loop>
                    <source src={project.heroVideo} type="video/mp4" />
                  </video>
                  <div className={styles.content}>
                    <p className={styles.next}>Next project</p>
                    <h2 className={styles.name}>{project.name}</h2>
                    <p className={styles.slogan}>{project.slogan}</p>

                    <a href={`/projects/${project.id}`}>
                      <div className={styles.arrow}>
                        <Image
                          src="/images/arrow-down-solid.svg"
                          alt="arrow icon"
                          width={30}
                          height={30}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
    </Splide>
  );
}

export default Outro;
