import React, { useEffect, useState } from "react";
import styles from "../styles/component-css/Outro.module.css";
import Image from "next/image";

import { getAllProjects } from "../utils/data/getData";

function Outro(props) {
  const [project, setProject] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      let projects = getAllProjects();
      let currentId = projects.findIndex((obj) => obj.id === props.projectId);
      currentId === projects.length - 1 ? (currentId = 0) : (currentId += 1);
      setProject(projects[currentId]);
      setLoading(false);
    }, 500);
  }, [props.projectId]);

  return (
    <>
      {isLoading ? null : (
        <div className={styles.Outro}>
          <div className={`${styles.wrapper} wrapper`}>
            <video className={styles.video} playsInline autoPlay muted loop>
              <source src={project.heroVideo} type="video/mp4" />
            </video>
            <div className={styles.content}>
              <p className={styles.next}>Next project</p>
              <h2 className={styles.name}>{project.name}</h2>
              <p className={styles.slogan}>{project.slogan}</p>

              <a className={styles.arrowLink} href={`/projects/${project.id}`}>
                <div className={styles.arrow}>
                  <Image
                    src="/images/outro-arrow.svg"
                    alt="arrow icon"
                    width={40}
                    height={40}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Outro;
