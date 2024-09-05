import ProjectHero from "@/components/ProjectHero";
import Result from "@/components/Result";
import Outro from "@/components/Outro";
import {
  getNextProject,
  getProjectMeta,
  getCurrentProject,
} from "@/utils/data/getData";
import Brand from "./ui/Brand";
import Colors from "./ui/Colors";
import Parallax from "./ui/Parallax";
import Elements from "./ui/Elements";
import Elements2 from "./ui/Elements2";
import WebDesign from "./ui/WebDesign";
import Mobile from "./ui/Mobile";
import WebDev from "./ui/WebDev";

import Image from "next/image";

export const metadata = getProjectMeta("northprim-2-0");

export default async function Page() {
  const project = await getCurrentProject("northprim-2-0");
  const nextProject = await getNextProject();

  return (
    <div className="Northprim2">
      <ProjectHero project={project} />
      {/* Content starts here */}
      <Brand />
      <Colors />
      <Parallax />
      <Elements />
      <Elements2 />
      <WebDesign />
      <Mobile />
      <WebDev />
      {/* Content ends here */}
      <div className="relative">
        <Image
          src="/images/northprim2/blur6.webp"
          alt="Decorative background"
          width={1080}
          height={2151}
          className="absolute bottom-[40%] right-0 w-[1080px] max-w-none translate-y-1/2 xl:bottom-[25%] xl:max-w-[750px] md:max-w-[400px]"
        />
        <Image
          src="/images/northprim2/saturn2.webp"
          alt="Decorative background"
          width={298}
          height={174}
          className="float3 absolute right-[170px] top-[80px] xl:max-w-[200px] md:left-1/2 md:right-auto md:top-[-140px] md:max-w-[150px] md:-translate-x-1/2"
        />
        <Result project={project} />
      </div>
      <Outro project={nextProject} />
    </div>
  );
}
