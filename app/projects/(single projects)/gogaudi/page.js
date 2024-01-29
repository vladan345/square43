import ProjectHero from "@/components/ProjectHero";
import Result from "@/components/Result";
import Outro from "@/components/Outro";
import Logo from "./ui/Logo";
import Colors from "./ui/Colors";
import Graphics from "./ui/Graphics";
import Visuals from "./ui/Visuals";
import Web from "./ui/Web";

import {
  getNextProject,
  getProjectMeta,
  getCurrentProject,
} from "@/utils/data/getData";

export const metadata = getProjectMeta("gogaudi");

export default async function Page() {
  const project = await getCurrentProject("gogaudi");
  const nextProject = await getNextProject();

  return (
    <div className="GoGaudi">
      <ProjectHero project={project} />
      {/* Content starts here */}
      <Logo />
      <Colors />
      {/* Placeholder video */}
      <Graphics />
      <Visuals />
      <Web />
      {/* Content ends here */}
      <Result project={project} />
      <Outro project={nextProject} />
    </div>
  );
}
