import Laptop from "./ui/Laptop";
import Glass from "./ui/Glass";
import Ecom from "./ui/Ecom";
import SocialMedia from "./ui/SocialMedia";
import ProjectHero from "@/components/ProjectHero";
import Result from "@/components/Result";
import Outro from "@/components/Outro";
import {
  getNextProject,
  getProjectMeta,
  getCurrentProject,
} from "@/utils/data/getData";

export const metadata = getProjectMeta("glasstic");

export default async function Page() {
  const project = await getCurrentProject("glasstic");
  const nextProject = await getNextProject();

  return (
    <div className="Glasstic">
      <ProjectHero project={project} />
      {/* Content starts here */}
      <Laptop />
      <Glass />
      <Ecom />
      <SocialMedia />
      {/* Content ends here */}
      <Result project={project} />
      <Outro project={nextProject} />
    </div>
  );
}
