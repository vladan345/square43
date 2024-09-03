"use client";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
export default function Campaigns() {
  const main = useRef(null);

  useGSAP(
    () => {
      gsap.from(".phone", {
        y: "-=100px",
        scrollTrigger: {
          scrub: true,
          trigger: ".trigger",
        },
      });
      gsap.to(".heartR", {
        rotate: "-80deg",
        scrollTrigger: {
          scrub: true,
          trigger: ".trigger",
        },
      });
      gsap.to(".heartL", {
        rotate: "80deg",
        scrollTrigger: {
          scrub: true,
          trigger: ".trigger",
        },
      });
    },
    { scope: main }
  );

  return (
    <section className="Campaigns mt-[180px] mb-[80px] md:mt-[80px]" ref={main}>
      <div className="wrapper flex trigger md:flex-col-reverse md:overflow-hidden">
        <div className="w-1/2 flex justify-start md:w-full md:justify-center md:py-[80px]">
          <div className="relative xl:max-w-[300px]">
            <Image
              src="/images/mogyi/mobile.webp"
              alt="Promotional Campaign"
              width={450}
              height={871}
              className="phone translate-y-[50px]"
            />
            <Image
              src="/images/mogyi/packets.webp"
              alt="Promotional Campaign"
              width={501}
              height={415}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none xl:max-w-[350px]"
            />
            <Image
              src="/images/mogyi/heartR.svg"
              alt="Promotional Campaign"
              width={180}
              height={180}
              className="absolute top-[60px] right-[-70px] heartR max-w-[120px]"
            />
            <Image
              src="/images/mogyi/heartL.svg"
              alt="Promotional Campaign"
              width={160}
              height={160}
              className="absolute bottom-[60px] left-[-60px] heartL max-w-[120px]"
            />
          </div>
        </div>
        <div className="w-1/2  flex flex-col justify-center md:w-full">
          <div className="max-w-[600px]">
            <h2 className="!mb-[60px] md:!mb-[40px]">Promotional Campaigns</h2>
            <p>
              Injecting a healthy dose of excitement into everyday life is our
              top priority. By combining lighthearted content with fun
              promotions, we've turned a simple brand story into an
              unforgettable experience for the whole family.
            </p>
            <p className="my-[30px]">
              Our campaigns spotlight interactive giveaways, focusing on putting
              products right where they belong - into the hands of eager
              consumers. This approach not only amplifies brand visibility but
              also fosters a sense of community. We worked our magic, captured
              the public's attention, and the response has been nothing short of
              fantastic!
            </p>
            <p>
              The giveaways generated an impressive influx of participants,
              resulting in a dramatic increase in engagement, proving that our
              creative touch can turn any campaign into a social media
              sensation!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
