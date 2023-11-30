import Logo from "./ui/Logo";
import Laptop from "./ui/Laptop";
import Mobile from "./ui/Mobile";
import Flowers from "./ui/Flowers";
import Hands from "./ui/Hands";
import ProjectHero from "@/components/ProjectHero";
import Result from "@/components/Result";
import Outro from "@/components/Outro";
import { getNextProject } from "@/utils/data/getData";

export default async function Page() {
  const project = await getNextProject();

  return (
    <div className="Klei">
      <ProjectHero />
      {/* Content starts here */}
      <Logo />
      <Laptop />
      <Mobile />
      <Flowers />
      <Hands />
      {/* Content ends here */}
      <Result />
      <Outro project={project} />
    </div>
  );
}
