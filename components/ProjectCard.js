import React from "react";
import Link from "next/link";
import styles from "../styles/component-css/ProjectCard.module.css";

function ProjectModule(props) {
  return (
    <div className={styles.ProjectCard} style={props.style}>
      <h2 className={styles.title}>{props.project.id}</h2>
      <Link href={"/projects/" + props.project.id}>
        <a className={styles.link}>See project</a>
      </Link>
    </div>
  );
}

export default ProjectModule;
