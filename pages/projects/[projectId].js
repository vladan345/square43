import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCurrentProject } from "../../utils/data/getData";

import Northprim from "./Northprim";
import OwnNew from "./OwnNew";

import ProjectHero from "../../components/ProjectHero";

function Project() {
  const router = useRouter();
  const { projectId } = router.query;
  const [project, setProject] = useState();

  useEffect(() => {
    let [temp] = getCurrentProject(projectId);
    setProject(temp);
  }, [projectId]);

  const renderPage = () => {
    switch (projectId) {
      case "northprim":
        return <Northprim />;
      case "ownnew":
        return <OwnNew />;
      default:
        return null;
    }
  };
  return (
    <div>
      {project && (
        <>
          <ProjectHero project={project} />
          {renderPage()}
        </>
      )}
    </div>
  );
}

export default Project;
