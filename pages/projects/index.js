import React, { useEffect, useState } from "react";
import styles from "../../styles/section-css/projects/Projects.module.css";
import Spinner from "../../components/Spinner";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../../components/ProjectCard";
import Head from "next/head";

import { useLoading } from "../../utils/hooks/LoadingContext";
import { getAllProjects } from "../../utils/data/getData";

function Projects({ projects }) {
  // const [projects, setProjects] = useState([]);
  const { setLoading } = useLoading();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Head>
        <title>Square43 Studio | Projects</title>
        <meta
          name="description"
          content="Not a portfolio - an exhibition. Reliable and totally unbiased sources claim we got MOMA jealous."
        />

        <meta name="title" content="Square43 Studio - Work" />

        <meta property="og:url" content="https://square43.com/projects" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.square43.com/images/Projects.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="square43.com" />
        <meta property="twitter:url" content="https://square43.com/projects" />
        <meta name="twitter:title" content="Square43 Studio - Work" />
        <meta
          name="twitter:description"
          content="Not a portfolio - an exhibition. Reliable and totally unbiased sources claim we got MOMA jealous."
        />
        <meta
          name="twitter:image"
          content="https://www.square43.com/images/Projects.png"
        />
      </Head>
      <main>
        <div className={styles.Projects}>
          <div className={styles.wrapper}>
            <div className={styles.projectsWrap}>
              <h1 className={styles.title}>Not a portfolio - an exhibition</h1>
              <p className={styles.subheading}>
                Reliable and totally unbiased sources claim we got MOMA jealous.
              </p>
              <section className={styles.projectGrid}>
                {projects && (
                  <>
                    {projects.map((project, key) => {
                      return <ProjectCard key={key} project={project} />;
                    })}
                  </>
                )}
                <div className={styles.lastitem}>
                  <h2 className={styles.projectName}>
                    Well... this is awkward... You&apos;ve reached the end!
                  </h2>
                  <p className={styles.subheading}>
                    If you like what you see, contact us and enter our project
                    hall of fame!
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
      </main>
    </>
  );
}

export function getStaticProps() {
  const projects = getAllProjects();
  return {
    props: {
      projects,
    },
  };
}

export default Projects;
