"use client";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Popcorn() {
  const main = useRef(null);

  useGSAP(
    () => {
      gsap.to(".frameImage", {
        y: "-15%",
        scrollTrigger: {
          trigger: ".frame",
          scrub: true,
        },
      });
      gsap.from(".frame", {
        autoAlpha: 0,
        y: "-=50",
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".frame",
          start: "top center",
          end: "bottom center",
        },
      });
    },
    { scope: main }
  );
  return (
    <section className="Popcorn mt-[60px]" ref={main}>
      <div className="wrapper">
        <h2 className="!text-[28px] !mb-[40px]">Popcorny day</h2>
        <div className="flex gap-[120px] md:flex-col md:gap-[30px]">
          <p className="max-w-[520px]">
            Our very first stop was Mogyi's most popular product: popcorn. The
            very essence of the campaign was a catchy phrase in Serbian, which
            translates to “Just your average popcorny day”.
          </p>
          <p className="max-w-[520px]">
            Instead of showcasing the product in its packaging on shelves or in
            a microwave, our team decided to approach this task differently, by
            making everything revolve around popcorn.
          </p>
        </div>
      </div>
      <div className="wrapper !h-[540px] flex gap-[40px] !mt-[120px] md:!mt-[80px] xl:!h-[350px] md:!h-auto md:flex-col md:items-center">
        <div className="w-1/3 md:w-full md:max-w-[350px] md:h-[520px] h-full rounded-[40px] overflow-hidden flex justify-center items-start after:shadow-[inset_0_10px_20px_10px_rgba(0,0,0,0.25)] after:w-full after:h-full after:absolute after:top-0 after:left-0 relative after:rounded-[40px] frame">
          <Image
            src="/images/mogyi/popcorn1.webp"
            alt="Popcorn post 1"
            width={440}
            height={690}
            className="frameImage md:h-[120%] md:object-cover"
          />
        </div>
        <div className="w-1/3 md:w-full md:max-w-[350px] md:h-[520px] h-full rounded-[40px] overflow-hidden flex justify-center items-start after:shadow-[inset_0_10px_20px_10px_rgba(0,0,0,0.25)] after:w-full after:h-full after:absolute after:top-0 after:left-0 relative after:rounded-[40px] frame">
          <Image
            src="/images/mogyi/popcorn2.webp"
            alt="Popcorn post 2"
            width={440}
            height={690}
            className="frameImage md:h-[120%] md:object-cover"
          />
        </div>
        <div className="w-1/3 md:w-full md:max-w-[350px] md:h-[520px] h-full rounded-[40px] overflow-hidden flex justify-center items-start after:shadow-[inset_0_10px_20px_10px_rgba(0,0,0,0.25)] after:w-full after:h-full after:absolute after:top-0 after:left-0 relative after:rounded-[40px] frame">
          <Image
            src="/images/mogyi/popcorn3.webp"
            alt="Popcorn post 3"
            width={440}
            height={690}
            className="frameImage md:h-[120%] md:object-cover"
          />
        </div>
      </div>
    </section>
  );
}
