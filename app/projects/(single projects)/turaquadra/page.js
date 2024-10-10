import ProjectHero from "@/components/ProjectHero";
import Result from "@/components/Result";
import Outro from "@/components/Outro";
import {
  getNextProject,
  getProjectMeta,
  getCurrentProject,
} from "@/utils/data/getData";
import Paid from "./ui/Paid";
import Motion from "./ui/Motion";
import Mobiles from "./ui/Mobiles";

export const metadata = getProjectMeta("turaquadra");

export default async function Page() {
  const project = await getCurrentProject("turaquadra");
  const nextProject = await getNextProject();

  return (
    <div className="Turaquadra">
      <ProjectHero project={project} />
      {/* Content starts here */}
      <Paid />
      <Motion />
      <Mobiles />
      {/* Content ends here */}
      <Result project={project} />
      <Outro project={nextProject} />
    </div>
  );
}
