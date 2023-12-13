import DesktopVideo from "./ui/DesktopVideo";
import Components from "./ui/Components";
import Mobile from "./ui/Mobile";
import Parallax from "./ui/Parallax";
import WebDevelopment from "./ui/WebDevelopment";
import ProjectHero from "@/components/ProjectHero";
import Result from "@/components/Result";
import Outro from "@/components/Outro";
import { getNextProject, getProjectMeta } from "@/utils/data/getData";

export const metadata = getProjectMeta("ownnew");

export default async function Page() {
  const project = await getNextProject();

  return (
    <div className="OwnNew">
      <ProjectHero />
      {/* Content starts here */}
      <DesktopVideo />
      <Components />
      <Mobile />
      <Parallax />
      <WebDevelopment />
      {/* Content ends here */}
      <Result />
      <Outro project={project} />
    </div>
  );
}
