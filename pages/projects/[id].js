import React, { useEffect, useState } from "react";
import { getCurrentProject } from "../../utils/data/getData";
import metaData from "../../utils/constants/metaData.json";
import Northprim from "../../pages-sections/projectMain/Northprim";
import OwnNew from "../../pages-sections/projectMain/OwnNew";
import Joker from "../../pages-sections/projectMain/Joker";
import DibTravel from "../../pages-sections/projectMain/DibTravel";
import Imunoshop from "../../pages-sections/projectMain/Imunoshop";

import Head from "next/head";
import ProjectHero from "../../components/ProjectHero";
import Outro from "../../components/Outro";
import Result from "../../components/Result";
import { useLoading } from "../../utils/hooks/LoadingContext";

function Project({ singleMeta, project, projectId }) {
  console.log(singleMeta);
  const { setLoading } = useLoading();
  // const [project, setProject] = useState();
  setLoading(false);
  // useEffect(() => {
  //   // setProject(getCurrentProject(projectId));
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, [projectId]);

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

  return (
    <>
      <Head>
        <title>{singleMeta.pageTitle}</title>

        {/* <meta name="description" content={singleMeta.description} />

 <meta name="title" content={meta.title} />

        <meta property="og:url" content={meta.link} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={meta.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="square43.com" />
        <meta property="twitter:url" content={meta.link} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} /> */}
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

export function getStaticPaths() {
  return {
    paths: [
      { params: { id: "northprim" } },
      { params: { id: "ownnew" } },
      { params: { id: "joker" } },
      { params: { id: "imunoshop" } },
      { params: { id: "dib-travel" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const projectId = await params.id;
  const { meta } = metaData;
  const project = getCurrentProject(params.id);
  const singleMeta = meta[projectId];

  return { props: { singleMeta, project, projectId } };
}

export default Project;
