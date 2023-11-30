import styles from "@/styles/section-css/projects/Projects.module.css";
import Head from "next/head";
import ProjectList from "./ui/ProjectList";
import { getAllProjects } from "@/utils/data/getData";

export default async function Page() {
  const projects = await getAllProjects();

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
          content="https://square43.com/images/Projects.png"
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
          content="https://square43.com/images/Projects.png"
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
              <ProjectList projects={projects} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
