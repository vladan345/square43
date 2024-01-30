import DesktopVideo from "./ui/DesktopVideo";
import Dual from "./ui/Dual";
import Highlights from "./ui/Highlights";
import London from "./ui/London";
import Phones from "./ui/Phones";
import Web from "./ui/Web";
import ProjectHero from "@/components/ProjectHero";
import Result from "@/components/Result";
import Outro from "@/components/Outro";
import {
  getNextProject,
  getProjectMeta,
  getCurrentProject,
} from "@/utils/data/getData";

export const metadata = getProjectMeta("distributed-services");

export default async function Page() {
  const project = await getCurrentProject("distributed-services");
  const nextProject = await getNextProject();

  return (
    <div className="DistributedServices">
      <ProjectHero project={project} />
      {/* Content starts here */}
      <Web />
      <DesktopVideo />
      <Phones />
      <Highlights />
      <Dual />
      <London />
      {/* Content ends here */}
      <Result project={project} />
      <Outro project={nextProject} />
    </div>
  );
}
