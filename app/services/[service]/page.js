import { getProjectsByService, getCurrentService } from "@/utils/data/getData";

import styles from "@/components/styles/Projects.module.css";
import ServiceContent from "./ui/ServiceContent";

export async function generateMetadata({ params }, parent) {
  // read route params
  const currentService = getCurrentService(params.service);

  return {
    openGraph: {
      title: `Square43 | ${currentService.name}`,
      description: currentService.excerpt,
      images: [{ url: "/images/Services.png" }],
      url: `https://square43.com/services/${params.service}`,
    },
    title: `Square43 | ${currentService.name}`,
    description: currentService.excerpt,
    metadataBase: new URL(`https://square43.com/services/${params.service}`),
  };
}

export default function Page({ params }) {
  const currentService = getCurrentService(params.service);
  const projects = getProjectsByService(params.service);

  return (
    <>
      <main>
        <div className={styles.Projects}>
          <div className={styles.wrapper}>
            <div className={styles.projectsWrap}>
              <h1 className={styles.title}> {currentService?.name}</h1>
              <p className={styles.subheading}>{currentService?.description}</p>
              <ServiceContent projects={projects} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
