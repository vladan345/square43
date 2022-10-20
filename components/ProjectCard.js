import React from "react";
import Link from "next/link";
import styles from "../styles/component-css/ProjectCard.module.css";
import Image from "next/image";

function ProjectCard(props) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.heroImage}>
        <Image
          src={props.project.heroImage}
          alt={`${props.project.name} hero`}
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.overlay}></div>
      </div>
      <Link href={`/projects/${props.project.id}`}>
        <a className={styles.link}>
          <h2 className={styles.projectName}>{props.project.name}</h2>
          <Image
            src="/images/arrow-white-r.svg"
            alt="Arrow white right"
            width={40}
            height={40}
          />
        </a>
      </Link>
    </div>
  );
}

export default ProjectCard;
