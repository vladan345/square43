import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  getProjectsByService,
  getCurrentService,
} from "../../utils/data/getData";
import Spinner from "../../components/Spinner";
import ProjectCard from "../../components/ProjectCard";
import styles from "../../styles/section-css/projects/Projects.module.css";
import Link from "next/link";
import Image from "next/image";

function Service() {
  const router = useRouter();
  const [projects, setProjects] = useState([]);
  const [currentService, setCurrentService] = useState();
  const [isLoading, setLoading] = useState(false);
  const { service } = router.query;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setCurrentService(getCurrentService(service));
      setProjects(getProjectsByService(service));
      setLoading(false);
    }, 1000);
  }, [service]);

  return (
    <div className={styles.Projects}>
      <div className={styles.wrapper}>
        <div className={styles.projectsWrap}>
          <h1 className={styles.title}> {currentService?.name}</h1>
          <p className={styles.subheading}>{currentService?.description}</p>

          <section className={styles.projectGrid}>
            {isLoading ? (
              <Spinner visible={true} />
            ) : (
              <>
                <Spinner visible={false} />
                {projects.map((project, key) => {
                  let counter = 500;
                  const style = {
                    animation: `fadeInUp 1s ${
                      counter * key
                    }ms forwards ease-in-out`,
                    opacity: 0,
                  };
                  return (
                    <ProjectCard style={style} key={key} project={project} />
                  );
                })}
              </>
            )}
            <div className={styles.lastitem}>
              <h2 className={styles.projectName}>
                Well... this is awkward... You&apos;ve reached the end!
              </h2>
              <p className={styles.subheading}>
                If you like what you see, contact us and enter our project hall
                of fame!
              </p>
              <Link href="/contact" className="readMore">
                Contact us
                <div className="icon">
                  <Image
                    src="/images/arrow.svg"
                    alt="Arrow icon"
                    width={40}
                    height={40}
                  />
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Service;
