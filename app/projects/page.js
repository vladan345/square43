import styles from "@/components/styles/Projects.module.css";
import ProjectList from "./ui/ProjectList";
import { getAllProjects } from "@/utils/data/getData";

export const metadata = {
  openGraph: {
    title: "Square43 Studio | Work",
    description:
      "Not a portfolio - an exhibition. Reliable and totally unbiased sources claim we got MOMA jealous.",
    images: [{ url: "/images/Projects.png" }],
    url: "https://square43.com/projects",
  },
  title: "Square43 Studio | Work",
  description:
    "Not a portfolio - an exhibition. Reliable and totally unbiased sources claim we got MOMA jealous.",
  metadataBase: new URL("https://square43.com/projects"),
};

export default async function Page() {
  const projects = await getAllProjects();
  return (
    <>
      <main>
        <div className={styles.Projects}>
          <div className={styles.wrapper}>
            <div className={styles.projectsWrap}>
              <h1 className={styles.title}>Not a portfolio - an exhibition</h1>
              <p className={styles.subheading}>
                Reliable and totally unbiased sources claim we got MOMA jealous.
              </p>
              <ProjectList projects={projects.reverse()} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
