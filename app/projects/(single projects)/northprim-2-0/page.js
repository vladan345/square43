import ProjectHero from "@/components/ProjectHero";
import Result from "@/components/Result";
import Outro from "@/components/Outro";
import {
  getNextProject,
  getProjectMeta,
  getCurrentProject,
} from "@/utils/data/getData";
import Brand from "./ui/Brand";

export const metadata = getProjectMeta("northprim-2-0");

export default async function Page() {
  const project = await getCurrentProject("northprim-2-0");
  const nextProject = await getNextProject();

  return (
    <div className="Northprim2">
      <ProjectHero project={project} />
      {/* Content starts here */}
      <Brand />
      {/* Content ends here */}
      <Result project={project} />
      <Outro project={nextProject} />
    </div>
  );
}
