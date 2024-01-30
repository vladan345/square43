"use client";
import React, { useState } from "react";
import styles from "./styles/Outro.module.css";
import Image from "next/image";

function Outro({ project }) {
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
              <h2 className={styles.name}>{project.title}</h2>
              <p
                className={styles.slogan}
                dangerouslySetInnerHTML={{ __html: project.slogan }}
              />

              <a
                className={styles.arrowLink}
                href={`/projects/${project.slug.current}`}
              >
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
