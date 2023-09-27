import { useEffect } from "react";
import Head from "next/head";
import { useLoading } from "@/utils/hooks/LoadingContext";
import Hero from "@/pages-sections/ecom43/Hero";

function Ecom43() {
  const { setLoading } = useLoading();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <Head>
        <title>Square43 Studio | Ecom 43</title>
        <meta
          name="description"
          content="The best custom e-com solution on the web!"
        />

        <meta name="title" content="Square43 Studio - Ecom 43" />
        <meta
          name="description"
          content="The best custom e-com solution on the web!"
        />
        <meta property="og:url" content="https://square43.com/ecom43" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://square43.com/images/Contact.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="square43.com" />
        <meta property="twitter:url" content="https://square43.com/ecom43" />
        <meta name="twitter:title" content="Square43 Studio - Ecom 43" />
        <meta
          name="twitter:description"
          content="The best custom e-com solution on the web!"
        />
        <meta
          name="twitter:image"
          content="https://square43.com/images/Contact.png"
        />
      </Head>
      <main>
        <Hero />
      </main>
    </>
  );
}

export default Ecom43;
