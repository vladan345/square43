import React, { useEffect, useState } from "react";
import { getCurrentProject } from "@/utils/data/getData";
import Northprim from "@/pages-sections/projectMain/Northprim";
import OwnNew from "@/pages-sections/projectMain/OwnNew";
import Joker from "@/pages-sections/projectMain/Joker";
import DibTravel from "@/pages-sections/projectMain/DibTravel";
import Imunoshop from "@/pages-sections/projectMain/Imunoshop";
import Keiko from "@/pages-sections/projectMain/Keiko";
import Glasstic from "@/pages-sections/projectMain/Glasstic";
import Jove from "@/pages-sections/projectMain/Jove";
import Distributed from "@/pages-sections/projectMain/Distributed";

import Head from "next/head";
import ProjectHero from "@/components/ProjectHero";
import Outro from "@/components/Outro";
import Result from "@/components/Result";
import { useLoading } from "@/utils/hooks/LoadingContext";

function Project({ project, projectId }) {
  const { setLoading } = useLoading();
  setLoading(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

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
      case "keiko":
        return <Keiko />;
      case "glasstic":
        return <Glasstic />;
      case "jove":
        return <Jove />;
      case "distributed-services":
        return <Distributed />;
      default:
        return null;
    }
  };

  return (
    <>
      <Head>
        <title>{project?.meta.title}</title>

        <meta name="description" content={project?.meta.description} />

        <meta name="title" content={project?.meta.title} />

        <meta property="og:url" content={project?.meta.link} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={project?.meta.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="square43.com" />
        <meta property="twitter:url" content={project?.meta.link} />
        <meta name="twitter:title" content={project?.meta.title} />
        <meta name="twitter:description" content={project?.meta.description} />
        <meta name="twitter:image" content={project?.meta.image} />
      </Head>
      <div>
        {project && (
          <>
            <ProjectHero project={project} />
            {renderPage()}
            <Result project={project} />
            <Outro projectId={projectId} />
          </>
        )}
      </div>
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: [
      { params: { id: "northprim" } },
      { params: { id: "ownnew" } },
      { params: { id: "joker" } },
      { params: { id: "imunoshop" } },
      { params: { id: "dib-travel" } },
      { params: { id: "keiko" } },
      { params: { id: "glasstic" } },
      { params: { id: "jove" } },
      { params: { id: "distributed-services" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const projectId = await params.id;
  const project = getCurrentProject(params.id);
  return { props: { project, projectId } };
}

export default Project;
