import Taglines from "./ui/Taglines";
import Scooter from "./ui/Scooter";
import WebDesign from "./ui/WebDesign";
import SocialMedia from "./ui/SocialMedia";
import NewClients from "./ui/NewClients";
import PlaneAnimation from "./ui/PlaneAnimation";
import ProjectHero from "@/components/ProjectHero";
import Result from "@/components/Result";
import Outro from "@/components/Outro";
import { getNextProject } from "@/utils/data/getData";

export default async function Page() {
  const project = await getNextProject();

  return (
    <div className="DibTravel">
      <ProjectHero />
      {/* Content starts here */}
      <Taglines />
      <Scooter />
      <WebDesign />
      <SocialMedia />
      <NewClients />
      <PlaneAnimation />
      {/* Content ends here */}
      <Result />
      <Outro project={project} />
    </div>
  );
}
