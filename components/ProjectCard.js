"use client";
import Link from "next/link";
import styles from "./styles/ProjectCard.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLoading } from "../utils/hooks/LoadingContext";

function ProjectCard({ project }) {
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
        href={`/projects/${project.slug.current}`}
        className={styles.link}
      >
        <div className={styles.heroImage}>
          <Image
            src={project.heroImage}
            alt={`${project.title} hero`}
            fill={true}
            sizes="100vw"
            priority
            className={styles.image}
          />
          <div className={styles.overlay}></div>
        </div>

        <h2 className={styles.projectName}>{project.title}</h2>
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
