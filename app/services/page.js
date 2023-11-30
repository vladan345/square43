import Head from "next/head";
import ServiceList from "./ui/ServiceList";
import Taglines from "./ui/Taglines";
import Achievements from "./ui/Achievements";
import { getAllServices } from "@/utils/data/getData";

export default async function Page() {
  const services = await getAllServices();
  return (
    <div>
      <Head>
        <title>Square43 Studio | Services</title>
        <meta
          name="description"
          content="Let us paint you a picture
          - Our services range from all things digital to artistry you can feel"
        />

        <meta name="title" content="Square43 Studio - Services" />

        <meta property="og:url" content="https://square43.com/services" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://square43.com/images/Services.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="square43.com" />
        <meta property="twitter:url" content="https://square43.com/services" />
        <meta name="twitter:title" content="Square43 Studio - Services" />
        <meta
          name="twitter:description"
          content="Let us paint you a picture
          - Our services range from all things digital to artistry you can feel"
        />
        <meta
          name="twitter:image"
          content="https://square43.com/images/Services.png"
        />
      </Head>
      <main>
        <ServiceList services={services} />
        <Taglines />
        <Achievements />
      </main>
    </div>
  );
}
