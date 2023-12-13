import Brand from "./ui/Brand";
import Laptop from "./ui/Laptop";
import DesignDev from "./ui/DesignDev";
import Social from "./ui/Social";
import Posts from "./ui/Posts";
import Motions from "./ui/Motions";
import Banner from "./ui/Banner";
import ProjectHero from "@/components/ProjectHero";
import Result from "@/components/Result";
import Outro from "@/components/Outro";
import { getNextProject, getProjectMeta } from "@/utils/data/getData";

export const metadata = getProjectMeta("imunoshop");

export default async function Page() {
  const project = await getNextProject();

  return (
    <div className="ImunoShop">
      <ProjectHero />
      {/* Content starts here */}
      <Brand />
      <Laptop />
      <DesignDev />
      <Social />
      <Posts />
      <Motions />
      <Banner />
      {/* Content ends here */}
      <Result />
      <Outro project={project} />
    </div>
  );
}
