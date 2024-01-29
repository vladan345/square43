import ProjectHero from "@/components/ProjectHero";
import Result from "@/components/Result";
import Outro from "@/components/Outro";
import { getNextProject, getProjectMeta } from "@/utils/data/getData";

import Logo from "./ui/Logo";
import Colors from "./ui/Colors";
import Graphics from "./ui/Graphics";
import Visuals from "./ui/Visuals";
import Web from "./ui/Web";

export const metadata = getProjectMeta("gogaudi");

export default async function Page() {
  const project = await getNextProject();

  return (
    <div className="GoGaudi">
      <ProjectHero />
      {/* Content starts here */}
      <Logo />
      <Colors />
      {/* Placeholder video */}
      <Graphics />
      <Visuals />
      <Web />
      {/* Content ends here */}
      <Result />
      <Outro project={project} />
    </div>
  );
}
