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
  const renderHead = () => {
    switch (projectId) {
      case "northprim":
        return (
          <Head>
            <title>Square43 Studio | Northprim</title>
            <meta
              name="description"
              content="Transforming just another outsourcing tech company into a unique, provocative brand brimming with energy, emotion and the ever-wanted X factor."
            />

            <meta name="title" content="Square43 Studio - Northprim" />

            <meta
              property="og:url"
              content="https://square43.com/projects/northprim"
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:image"
              content="https://www.square43.com/images/northprim/heroNorthprim.png"
            />

            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="square43.com" />
            <meta
              property="twitter:url"
              content="https://square43.com/projects/northprim"
            />
            <meta name="twitter:title" content="Square43 Studio - Northprim" />
            <meta
              name="twitter:description"
              content="Transforming just another outsourcing tech company into a unique, provocative brand brimming with energy, emotion and the ever-wanted X factor."
            />
            <meta
              name="twitter:image"
              content="https://www.square43.com/images/northprim/heroNorthprim.png"
            />
          </Head>
        );
    }
  };
  return (
    <>
      {renderHead()}
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
