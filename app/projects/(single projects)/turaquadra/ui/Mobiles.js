"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Mobiles() {
  const main = useRef();
  useGSAP(
    () => {
      gsap.from(".tuqimage", {
        scrollTrigger: {
          trigger: ".wrapper",
          start: "70% 60%",
          scrub: true,
        },
        y: 400,
        duration: 3,
      });
      const mm = gsap.matchMedia();
      mm.add("(min-width: 901px)", () => {
        gsap.from(".image1", {
          scrollTrigger: {
            trigger: ".wrapper",
            start: "top 50%",
            scrub: true,
          },
          y: 100,
          duration: 2,
        });
        gsap.from(".image2", {
          scrollTrigger: {
            trigger: ".wrapper",
            start: "top 50%",
            scrub: true,
          },
          y: 300,
          duration: 2,
        });
        gsap.from(".image3", {
          scrollTrigger: {
            trigger: ".wrapper",
            start: "top 50%",
            scrub: true,
          },
          y: 200,
          duration: 2,
        });
      });
      return () => mm.kill();
    },
    { scope: main },
  );
  return (
    <section
      className="Mobiles relative bg-gradient-to-t from-[#E2DBD5] pb-[20%] md:mb-[80px]"
      ref={main}
    >
      <div className="tuqimage absolute bottom-[-15%] flex w-[100%] justify-center 2xl:bottom-[-10%]">
        <Image
          src="/images/turaquadra/Vector.png"
          alt="tqu"
          width={600}
          height={600}
          className="w-[45%]"
        />
      </div>
      <div className="flex justify-center">
        <h1 className="sticky mt-[200px] max-w-[1430px] text-center font-ivy text-[160px] font-[100] text-[#000] 2xl:max-w-[1100px] 2xl:text-[120px] xl:text-[90px] lg:mt-[100px] lg:max-w-[900px]">
          ELEGANT SOLUTIONS FOR BOLD RESULTS
        </h1>
      </div>

      <div className="wrapper flex justify-between gap-[40px] md:flex-col md:items-center md:gap-[60px]">
        <Image
          src="/images/turaquadra/phone1.png"
          alt="Phone 1"
          width={395}
          height={810}
          className="image1"
        />
        <div className="image2 relative">
          <Image
            src="/images/turaquadra/phone-frame.png"
            alt="Phone 2"
            width={395}
            height={810}
          />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute left-1/2 top-1/2 w-[93%] -translate-x-1/2 -translate-y-1/2"
          >
            <source src="/images/turaquadra/reel.mp4" type="video/mp4" />
          </video>
        </div>
        <Image
          src="/images/turaquadra/phone3.png"
          alt="Phone 3"
          width={395}
          height={810}
          className="image3"
        />
      </div>
    </section>
  );
}
