import ProjectHero from "@/components/ProjectHero";
import Result from "@/components/Result";
import Outro from "@/components/Outro";

import {
  getNextProject,
  getProjectMeta,
  getCurrentProject,
} from "@/utils/data/getData";
import Approach from "./ui/Approach";
import Pictures from "./ui/Pictures";
import Popcorn from "./ui/Popcorn";
import Animation from "./ui/Animation";
import Campaigns from "./ui/Campaigns";
import Tiktok from "./ui/Tiktok";

export const metadata = getProjectMeta("mogyi");

export default async function Page() {
  const project = await getCurrentProject("mogyi");
  const nextProject = await getNextProject();

  return (
    <div className="Mogyi">
      <ProjectHero project={project} />
      {/* Content starts here */}
      <Approach />
      <Pictures />
      <Popcorn />
      <Animation />
      <Campaigns />
      <Tiktok />
      {/* Content ends here */}
      <Result project={project} />
      <Outro project={nextProject} />
    </div>
  );
}
