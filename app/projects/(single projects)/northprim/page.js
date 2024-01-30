import VideoSection from "./ui/VideoSection";
import Brand from "./ui/Brand";
import Sprint from "./ui/Sprint";
import Taglines from "./ui/Taglines";
import Skate from "./ui/Skate";
import CoreThemes from "./ui/CoreThemes";
import Parallax from "./ui/Parallax";
import WebDesign from "./ui/WebDesign";
import ScrollSequence from "./ui/ScrollSequence";
import WebDevelopment from "./ui/WebDevelopment";
import SocialMedia from "./ui/SocialMedia";
import Print from "./ui/Print";
import Slider from "./ui/Slider";
import Coffee from "./ui/Coffee";
import ProjectHero from "@/components/ProjectHero";
import Result from "@/components/Result";
import Outro from "@/components/Outro";
import {
  getNextProject,
  getProjectMeta,
  getCurrentProject,
} from "@/utils/data/getData";

export const metadata = getProjectMeta("northprim");

export default async function Page() {
  const project = await getCurrentProject("northprim");
  const nextProject = await getNextProject();

  return (
    <div className="Northprim">
      <ProjectHero project={project} />
      {/* Content starts here */}
      <VideoSection />
      <Brand />
      <Sprint />
      <Taglines />
      <Skate />
      <CoreThemes />
      <Parallax />
      <WebDesign />
      <ScrollSequence />
      <WebDevelopment />
      <SocialMedia />
      <Print />
      <Slider />
      <Coffee />
      {/* Content ends here */}
      <Result project={project} />
      <Outro project={nextProject} />
    </div>
  );
}
