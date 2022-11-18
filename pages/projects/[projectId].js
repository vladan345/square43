import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCurrentProject } from "../../utils/data/getData";

import Northprim from "./Northprim";
import OwnNew from "./OwnNew";
import Joker from "./Joker";
import DibTravel from "./DibTravel";
import Imunoshop from "./Imunoshop";

import Head from "next/head";
import ProjectHero from "../../components/ProjectHero";
import Outro from "../../components/Outro";
import Result from "../../components/Result";
import { useLoading } from "../../utils/hooks/LoadingContext";

function Project() {
  const router = useRouter();
  const { setLoading } = useLoading();
  const { projectId } = router.query;
  const [project, setProject] = useState();

  useEffect(() => {
    setProject(getCurrentProject(projectId));
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [projectId]);
  const renderPage = () => {
    switch (projectId) {
      case "northprim":
        return <Northprim />;
      case "ownnew":
        return <OwnNew />;
      case "joker":
        return <Joker />;
      case "dib-travel":
        return <DibTravel />;
      case "imunoshop":
        return <Imunoshop />;
      default:
        return null;
    }
  };
  let title = `Square43 Studio | ${project?.name}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={project?.missionShort} />

        <meta name="title" content={`Square43 Studio - ${project?.name}`} />

        <meta
          property="og:url"
          content={`https://square43.com/projects/${project?.id}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`https://www.square43.com${project?.heroImage}`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="square43.com" />
        <meta
          property="twitter:url"
          content={`https://square43.com/projects/${project?.id}`}
        />
        <meta
          name="twitter:title"
          content={`Square43 Studio - ${project?.name}`}
        />
        <meta name="twitter:description" content={project?.missionShort} />
        <meta
          name="twitter:image"
          content={`https://www.square43.com${project?.heroImage}`}
        />
      </Head>
      <div>
        {project && (
          <div style={{ overflow: "hidden" }}>
            <ProjectHero project={project} />
            {renderPage()}
            <Result project={project} />
            <Outro projectId={projectId} />
          </div>
        )}
      </div>
    </>
  );
}

export default Project;
