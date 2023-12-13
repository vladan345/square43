import Banner from "./ui/Banner";
import Motions from "./ui/Motions";
import Social from "./ui/Social";
import Taglines from "./ui/Taglines";
import ProjectHero from "@/components/ProjectHero";
import Result from "@/components/Result";
import Outro from "@/components/Outro";
import { getNextProject, getProjectMeta } from "@/utils/data/getData";

export const metadata = getProjectMeta("keiko");

export default async function Page() {
  const project = await getNextProject();

  return (
    <div className="Keiko">
      <ProjectHero />
      {/* Content starts here */}
      <Taglines />
      <Social />
      <Motions />
      <Banner />
      {/* Content ends here */}
      <Result />
      <Outro project={project} />
    </div>
  );
}
