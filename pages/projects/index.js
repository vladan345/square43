import React, { useEffect, useState } from "react";
import styles from "../../styles/section-css/projects/Projects.module.css";
import Spinner from "../../components/Spinner";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../../components/ProjectCard";

import { getAllProjects } from "../../utils/data/getData";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setProjects(getAllProjects());
      setLoading(false);
    }, 1000);
  }, [projects]);

  return (
    <div className={styles.Projects}>
      <div className={styles.wrapper}>
        <div className={styles.projectsWrap}>
          <h1 className={styles.title}>Not a portfolio - an exhibition</h1>
          <p className={styles.subheading}>
            Pretium, malesuada nullam non urna eu pellentesque amet enim
            consectetur.
          </p>
          <section className={styles.projectGrid}>
            {isLoading ? (
              <Spinner />
            ) : (
              projects.map((project, key) => {
                return <ProjectCard key={key} project={project} />;
              })
            )}
            <div className={styles.lastitem}>
              <h2 className={styles.projectName}>
                Well... this is awkward... You&apos;ve reached the end!
              </h2>
              <p className={styles.subheading}>
                If you like what you see, contact us and enter our project hall
                of fame!
              </p>
              <Link href="/">
                <a className="readMore">
                  Contact us
                  <div className="icon">
                    <Image
                      src="/images/arrow.svg"
                      alt="Arrow icon"
                      width={40}
                      height={40}
                    />
                  </div>
                </a>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Projects;