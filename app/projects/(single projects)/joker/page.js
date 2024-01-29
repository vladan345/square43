import Packaging from "./ui/Packaging";
import Video from "./ui/Video";
import Logo from "./ui/Logo";
import Colors from "./ui/Colors";
import Scheme from "./ui/Scheme";
import Pattern from "./ui/Pattern";
import Roll from "./ui/Roll";
import ProjectHero from "@/components/ProjectHero";
import Result from "@/components/Result";
import Outro from "@/components/Outro";
import {
  getNextProject,
  getProjectMeta,
  getCurrentProject,
} from "@/utils/data/getData";

export const metadata = getProjectMeta("joker");

export default async function Page() {
  const project = await getCurrentProject("joker");
  const nextProject = await getNextProject();

  return (
    <div className="Joker">
      <ProjectHero project={project} />
      {/* Content starts here */}
      <Packaging />
      <Video />
      <Logo />
      <Colors />
      <Scheme />
      <Pattern />
      <Roll />
      {/* Content ends here */}
      <Result project={project} />
      <Outro project={nextProject} />
    </div>
  );
}
