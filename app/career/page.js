import CareerContent from "./ui/CareerContent";
import Links from "./ui/Links";

export const metadata = {
  openGraph: {
    title: "Square43 Studio | Career",
    description: "If you are the one show us what you got",
    images: [{ url: "/images/About.png" }],
    url: "https://square43.com/career",
  },
  title: "Square43 Studio | Career",
  description: "If you are the one show us what you got",
  metadataBase: new URL("https://square43.com/"),
};

export default function Page() {
  return (
    <>
      <CareerContent />
      <Links />
    </>
  );
}
