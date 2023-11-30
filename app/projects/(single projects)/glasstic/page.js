import Laptop from "./ui/Laptop";
import Glass from "./ui/Glass";
import Ecom from "./ui/Ecom";
import SocialMedia from "./ui/SocialMedia";
import ProjectHero from "@/components/ProjectHero";
import Result from "@/components/Result";
import Outro from "@/components/Outro";
import { getNextProject } from "@/utils/data/getData";

export default async function Page() {
  const project = await getNextProject();

  return (
    <div className="Glasstic">
      <ProjectHero />
      {/* Content starts here */}
      <Laptop />
      <Glass />
      <Ecom />
      <SocialMedia />
      {/* Content ends here */}
      <Result />
      <Outro project={project} />
    </div>
  );
}
