import AboutContent from "./ui/AboutContent";

export const metadata = {
  openGraph: {
    title: "Square43 Studio | About",
    description:
      "Building is believing - and we'll build a bright future in front of you.",
    images: [{ url: "/images/About.png" }],
    url: "https://square43.com/inside",
  },
  title: "Square43 Studio | About",
  description:
    "Building is believing - and we'll build a bright future in front of you.",
  metadataBase: new URL("https://square43.com/inside"),
};

export default function Page() {
  return (
    <>
      <AboutContent />
    </>
  );
}
