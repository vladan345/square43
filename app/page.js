import HomeContent from "./ui/HomeContent";
import { getLatestProjects, getAllServices } from "@/utils/data/getData";

export const metadata = {
  openGraph: {
    title: "Square43 Studio",
    description: "Everything we do is treated as art.",
    images: [{ url: "/images/Home.png" }],
    url: "https://square43.com",
  },
  title: "Square43 Studio",
  description: "Everything we do is treated as art.",
  metadataBase: new URL("https://square43.com"),
};

export default async function Page() {
  const projects = await getLatestProjects();
  const services = await getAllServices();
  return (
    <>
      <HomeContent projects={projects} services={services} />
    </>
  );
}
