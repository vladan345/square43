import Hero from "./ui/Hero";
import Brand from "./ui/Brand";
import Buildings from "./ui/Buildings";
import Studio from "./ui/Studio";
import Members from "./ui/Members";
import MembersCards from "./ui/MembersCards";
import BlackWhite from "./ui/BlackWhite";
import Video from "./ui/Video";
import Links from "./ui/Links";

export const metadata = {
  openGraph: {
    title: "Square43 Studio | Studio",
    description:
      "Building is believing - and we'll build a bright future in front of you.",
    images: [{ url: "/images/zgradethumbnail.png" }],
    url: "https://square43.com/studio",
  },
  title: "Square43 Studio | Studio",
  description:
    "Building is believing - and we'll build a bright future in front of you.",
  metadataBase: new URL("https://square43.com/"),
};

export default function Page() {
  return (
    <>
      <Hero />
      <Brand />
      <Buildings />
      <Video />
      <BlackWhite />
      <Studio />
      <Members />
      <MembersCards />
      <Links />
    </>
  );
}
