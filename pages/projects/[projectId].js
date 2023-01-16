import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCurrentProject } from "../../utils/data/getData";

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

function Project({ meta, project }) {
  const router = useRouter();
  const { setLoading } = useLoading();
  const { projectId } = router.query;
  // const [project, setProject] = useState();

  useEffect(() => {
    // setProject(getCurrentProject(projectId));
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

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />

        <meta name="title" content={meta.title} />

        <meta property="og:url" content={meta.link} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={meta.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="square43.com" />
        <meta property="twitter:url" content={meta.link} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
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
      { params: { projectId: "northprim" } },
      { params: { projectId: "ownnew" } },
      { params: { projectId: "joker" } },
      { params: { projectId: "imunoshop" } },
      { params: { projectId: "dib-travel" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  let users = {
    northprim: {
      description:
        "Transforming just another outsourcing tech company into a unique, provocative brand brimming with energy, emotion and the ever-wanted X factor.",
      title: "Square43 Studio - Northprim",
      pageTitle: "Square43 Studio | Northprim",
      link: "https://square43.com/projects/northprim",
      image: "https://www.square43.com/images/northprim/heroNorthprim.png",
    },
    ownnew: {
      description:
        "A Fresh Start-up Project straight from London. See how we helped OwnNew make their market debut across the UK.",
      title: "Square43 Studio - Own New",
      pageTitle: "Square43 Studio | Own New",
      link: "https://square43.com/projects/ownnew",
      image: "https://www.square43.com/images/ownnew/heroOwnnew.webp",
    },
    joker: {
      description:
        "Designing the MVP of energy drinks: our ultimate success story.",
      title: "Square43 Studio - Joker",
      pageTitle: "Square43 Studio | Joker",
      link: "https://square43.com/projects/joker",
      image: "https://www.square43.com/images/joker/heroJoker.png",
    },
    "dib-travel": {
      description:
        "Business travel made better: a comprehensive case study of DIB Travel.",
      title: "Square43 Studio - DIB Travel",
      pageTitle: "Square43 Studio | DIB Travel",
      link: "https://square43.com/projects/dib-travel",
      image: "https://www.square43.com/images/dib-travel/heroDib.webp",
    },
    imunoshop: {
      description:
        "How to develop a new brand and a seamless online shop from scratch - the story of Imuno shop.",
      title: "Square43 Studio - Imuno Shop",
      pageTitle: "Square43 Studio | Imuno Shop",
      link: "https://square43.com/projects/imunoshop",
      image: "https://www.square43.com/images/imunoshop/heroImunoshop.webp",
    },
  };
  const meta = users[params.projectId];

  const project = getCurrentProject(params.projectId);

  return { props: { meta, project } };
}

export default Project;
