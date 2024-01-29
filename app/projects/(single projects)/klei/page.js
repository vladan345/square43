import Logo from "./ui/Logo";
import Laptop from "./ui/Laptop";
import Mobile from "./ui/Mobile";
import Flowers from "./ui/Flowers";
import Hands from "./ui/Hands";
import ProjectHero from "@/components/ProjectHero";
import Result from "@/components/Result";
import Outro from "@/components/Outro";
import {
  getNextProject,
  getProjectMeta,
  getCurrentProject,
} from "@/utils/data/getData";

export const metadata = getProjectMeta("klei");

export default async function Page() {
  const project = await getCurrentProject("klei");
  const nextProject = await getNextProject();

  return (
    <div className="Klei">
      <ProjectHero project={project} />
      {/* Content starts here */}
      <Logo />
      <Laptop />
      <Mobile />
      <Flowers />
      <Hands />
      {/* Content ends here */}
      <Result project={project} />
      <Outro project={nextProject} />
    </div>
  );
}
