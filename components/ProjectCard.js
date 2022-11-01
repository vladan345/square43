import React from "react";
import Link from "next/link";
import styles from "../styles/component-css/ProjectCard.module.css";
import Image from "next/image";

function ProjectCard(props) {
  return (
    <div className={styles.projectCard}>
      <Link href={`/projects/${props.project.id}`} className={styles.link}>
        <div className={styles.heroImage}>
          <Image
            src={props.project.heroImage}
            alt={`${props.project.name} hero`}
            fill={true}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            priority
            className={styles.image}
          />
          <div className={styles.overlay}></div>
        </div>

        <h2 className={styles.projectName}>{props.project.name}</h2>
        <div className={styles.iconWrap}>
          <Image
            src="/images/arrow-white-r.svg"
            alt="Arrow white right"
            width={40}
            height={40}
          />
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
