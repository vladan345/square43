import Banner from "./ui/Banner";
import Motions from "./ui/Motions";
import Social from "./ui/Social";
import Taglines from "./ui/Taglines";
import ProjectHero from "@/components/ProjectHero";
import Result from "@/components/Result";
import Outro from "@/components/Outro";
import {
  getNextProject,
  getProjectMeta,
  getCurrentProject,
} from "@/utils/data/getData";

export const metadata = getProjectMeta("keiko");

export default async function Page() {
  const project = await getCurrentProject("keiko");
  const nextProject = await getNextProject();

  return (
    <div className="Keiko">
      <ProjectHero project={project} />
      {/* Content starts here */}
      <Taglines />
      <Social />
      <Motions />
      <Banner />
      {/* Content ends here */}
      <Result project={project} />
      <Outro project={nextProject} />
    </div>
  );
}
