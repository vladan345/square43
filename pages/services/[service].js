import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getProjectsByService } from "../../utils/data/getData";
import Spinner from "../../components/Spinner";
import ProjectCard from "../../components/ProjectCard";
import styles from "../../styles/Service.module.css";

function Service() {
  const router = useRouter();
  const [projects, setProjects] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const { service } = router.query;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setProjects(getProjectsByService(service));
      setLoading(false);
    }, 1000);
  }, [service]);
  return (
    <div className="Service">
      <div className="wrapper">
        <h1
          className={styles.title}
          style={{
            animation: `fadeInRight 1s forwards ease-in-out`,
            opacity: 0,
          }}
        >
          {service}
        </h1>
        <section className="projects-section">
          {isLoading ? (
            <Spinner />
          ) : (
            projects.map((project, key) => {
              let counter = 500;
              const style = {
                animation: `fadeInUp 1s ${
                  counter * key
                }ms forwards ease-in-out`,
                opacity: 0,
              };
              return <ProjectCard style={style} key={key} project={project} />;
            })
          )}
        </section>
      </div>
    </div>
  );
}

export default Service;
