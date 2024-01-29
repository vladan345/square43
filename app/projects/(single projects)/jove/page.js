import Name from "./ui/Name";
import Logo from "./ui/Logo";
import Negative from "./ui/Negative";
import Web from "./ui/Web";
import Packaging from "./ui/Packaging";
import Scheme from "./ui/Scheme";
import ProjectHero from "@/components/ProjectHero";
import Result from "@/components/Result";
import Outro from "@/components/Outro";
import {
  getNextProject,
  getProjectMeta,
  getCurrentProject,
} from "@/utils/data/getData";

export const metadata = getProjectMeta("jove");

export default async function Page() {
  const project = await getCurrentProject("jove");
  const nextProject = await getNextProject();

  return (
    <div className="Joker">
      <ProjectHero project={project} />
      {/* Content starts here */}
      <Name />
      <Logo />
      <Negative />
      <Web />
      <Packaging />
      <Scheme />
      {/* Content ends here */}
      <Result project={project} />
      <Outro project={nextProject} />
    </div>
  );
}
