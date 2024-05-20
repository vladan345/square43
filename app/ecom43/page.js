import EcomContent from "./ui/EcomContent";

export const metadata = {
  openGraph: {
    title: "Square43 Studio | Ecom 43",
    description: "The best custom e-com solution on the web!",
    images: [{ url: "/images/Contact.png" }],
    url: "https://square43.com/ecom43",
  },
  title: "Square43 Studio | Ecom 43",
  description: "The best custom e-com solution on the web!",
  metadataBase: new URL("https://square43.com/"),
};

export default function Page() {
  return (
    <>
      <EcomContent />
    </>
  );
}
