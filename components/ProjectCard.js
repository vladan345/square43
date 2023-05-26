import React from "react";
import Link from "next/link";
import styles from "../styles/component-css/ProjectCard.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useLoading } from "../utils/hooks/LoadingContext";

function ProjectCard(props) {
  const router = useRouter();
  const { setLoading } = useLoading();

  const handleClick = (e) => {
    setLoading(true);
    e.preventDefault();
    let link = e.currentTarget.attributes[1].value;
    setTimeout(() => {
      router.push(link);
    }, 1000);
  };

  return (
    <div className={styles.projectCard}>
      <Link
        onClick={handleClick}
        href={`/projects/${props.project.id}`}
        className={styles.link}
      >
        <div className={styles.heroImage}>
          <Image
            src={props.project.heroImage}
            alt={`${props.project.name} hero`}
            fill={true}
            sizes="100vw"
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
