import ServiceList from "./ui/ServiceList";
import Taglines from "./ui/Taglines";
import Achievements from "./ui/Achievements";
import { getAllServices } from "@/utils/data/getData";

export const metadata = {
  openGraph: {
    title: "Square43 Studio | Services",
    description:
      "Let us paint you a picture - Our services range from all things digital to artistry you can feel",
    images: [{ url: "/images/Services.png" }],
    url: "https://square43.com/services",
  },
  title: "Square43 Studio | Services",
  description:
    "Let us paint you a picture - Our services range from all things digital to artistry you can feel",
  metadataBase: new URL("https://square43.com/"),
};

export default async function Page() {
  const services = await getAllServices();
  return (
    <div>
      <main>
        <ServiceList services={services} />
        <Taglines />
        <Achievements />
      </main>
    </div>
  );
}
