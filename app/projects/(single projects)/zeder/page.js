import Logo from "./ui/Logo";
import Web from "./ui/Web";
import Videos from "./ui/Videos";
import Banner from "./ui/Banner";
import ProjectHero from "@/components/ProjectHero";
import Result from "@/components/Result";
import Outro from "@/components/Outro";
import { getNextProject, getProjectMeta } from "@/utils/data/getData";

export const metadata = getProjectMeta("zeder");

export default async function Page() {
  const project = await getNextProject();

  return (
    <div className="Zeder">
      <ProjectHero />
      {/* Content starts here */}
      <Logo />
      <Web />
      <Videos />
      <Banner />
      {/* Content ends here */}
      <Result />
      <Outro project={project} />
    </div>
  );
}
