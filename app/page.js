import HomeContent from "./ui/HomeContent";

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

export default function Page() {
  return (
    <>
      <HomeContent />
    </>
  );
}
