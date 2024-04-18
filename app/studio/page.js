import Hero from "./ui/Hero";
import Brand from "./ui/Brand";
import Buildings from "./ui/Buildings";
import Studio from "./ui/Studio";
import Members from "./ui/Members";
import MembersCards from "./ui/MembersCards";
import BlackWhite from "./ui/BlackWhite";

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
      <Hero />
      <Brand />
      <Buildings />
      <BlackWhite />
      <Studio />
      <Members />
      <MembersCards />
    </>
  );
}
