import StudioContent from "./ui/StudioContent";

export const metadata = {
  openGraph: {
    title: "Square43 Studio | About",
    description:
      "Building is believing - and we'll build a bright future in front of you.",
    images: [{ url: "/images/About.png" }],
    url: "https://square43.com/studio",
  },
  title: "Square43 Studio | About",
  description:
    "Building is believing - and we'll build a bright future in front of you.",
  metadataBase: new URL("https://square43.com/studio"),
};

export default function Page() {
  return (
    <>
      <StudioContent />
    </>
  );
}
