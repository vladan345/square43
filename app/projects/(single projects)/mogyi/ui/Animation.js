"use client";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
export default function Animation() {
  const main = useRef(null);

  useGSAP(
    () => {
      gsap.from(".video", {
        autoAlpha: 0,
        y: "-=50px",
        scrollTrigger: {
          trigger: ".videoWrap",
          start: "top center",
          end: "bottom center",
        },
      });
      gsap.from(".characters", {
        y: "+=150px",
        scrollTrigger: {
          trigger: ".charWrap",
          scrub: true,
        },
      });
    },
    { scope: main }
  );

  return (
    <section className="Animation mt-[150px] md:mt-[120px]" ref={main}>
      <div className="wrapper flex videoWrap md:flex-col md:items-center overflow-hidden">
        <div className="w-1/2 md:w-full flex flex-col justify-center  pr-[120px] xl:pr-[40px] md:pr-0">
          <h2 className="!mb-[60px]">Animation</h2>
          <p className="mb-[30px]">
            Motion has been proven to leave a more lasting impact on consumers,
            so including inventive motion graphics for product promotion was a
            mandatory step.
          </p>
          <p>
            Our stunning visuals now came to life, creating the ideal
            promotional content in a form that was optimal for paid advertising
            on different platforms simultaneously. Instant engagement boost!
          </p>
        </div>
        <div className="w-1/2 md:w-full relative video md:mt-[80px] sm:w-[140vw]">
          <Image
            src="/images/mogyi/tv1.webp"
            alt="Tv frame"
            width={720}
            height={960}
            className="relative z-[1]"
          />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full top-0 left-0 px-[23%]"
          >
            <source src="/images/mogyi/reels.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="relative mt-[120px] charWrap md:mt-[40px]">
        <div className="w-full h-[188px] md:h-[150px] bg-[#ED1C24] after:w-full after:h-full after:absolute after:top-0 after:left-0 absolute bottom-0 left-0 after:bg-gradient-to-t from-[#950309]"></div>
        <div className="relative z-[1] flex justify-center overflow-hidden">
          <Image
            src="/images/mogyi/characters.webp"
            alt="Decorative characters"
            width={1314}
            height={500}
            className="characters md:w-[200vw] md:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
