import Logo from "./ui/Logo";
import Web from "./ui/Web";
import Videos from "./ui/Videos";
import Banner from "./ui/Banner";
import ProjectHero from "@/components/ProjectHero";
import Result from "@/components/Result";
import Outro from "@/components/Outro";
import {
  getNextProject,
  getProjectMeta,
  getCurrentProject,
} from "@/utils/data/getData";

export const metadata = getProjectMeta("zeder");

export default async function Page() {
  const project = await getCurrentProject("zeder");
  const nextProject = await getNextProject();

  return (
    <div className="Zeder">
      <ProjectHero project={project} />
      {/* Content starts here */}
      <Logo />
      <Web />
      <Videos />
      <Banner />
      {/* Content ends here */}
      <Result project={project} />
      <Outro project={nextProject} />
    </div>
  );
}
