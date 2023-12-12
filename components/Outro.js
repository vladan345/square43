"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles/Outro.module.css";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { getAllProjects } from "../utils/data/getData";

function Outro({ project }) {
  const pathname = usePathname();
  const projectId = pathname.split("/").pop();

  const [isLoading, setLoading] = useState(false);

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
