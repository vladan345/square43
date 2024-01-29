import { getCurrentService } from "@/utils/data/getData";

import styles from "@/components/styles/Projects.module.css";
import ServiceContent from "./ui/ServiceContent";

export async function generateMetadata({ params }, parent) {
  // read route params
  const currentService = await getCurrentService(params.service);

  return {
    openGraph: {
      title: `Square43 | ${currentService.name}`,
      description: currentService.description,
      images: [{ url: "/images/Services.png" }],
      url: `https://square43.com/services/${params.service}`,
    },
    title: `Square43 | ${currentService.name}`,
    description: currentService.description,
    metadataBase: new URL(`https://square43.com/services/${params.service}`),
  };
}

export default async function Page({ params }) {
  const currentService = await getCurrentService(params.service);

  return (
    <>
      <main>
        <div className={styles.Projects}>
          <div className={styles.wrapper}>
            <div className={styles.projectsWrap}>
              <h1 className={styles.title}> {currentService?.name}</h1>
              <p className={styles.subheading}>{currentService?.description}</p>
              <ServiceContent projects={currentService.projects} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
