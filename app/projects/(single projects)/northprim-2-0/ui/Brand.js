"use client";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Brand() {
  const main = useRef(null);

  useGSAP(
    () => {
      gsap.from(".elementsL", {
        left: "50%",
        top: "50%",
        duration: 1.2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".trigger",
          start: "top center",
          end: "bottom center",
        },
      });
      gsap.from(".elementsR", {
        right: "50%",
        top: "50%",
        duration: 1.2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".trigger",
          start: "top center",
          end: "bottom center",
        },
      });
      gsap.from(".logo", {
        autoAlpha: 0,
        duration: 1.2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".trigger",
          start: "top center",
          end: "bottom center",
        },
      });
      gsap.from(".arrow", {
        left: "3%",
        top: "20%",
        duration: 2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".trigger",
          start: "top center",
          end: "bottom center",
        },
      });
    },
    { scope: main },
  );

  return (
    <section ref={main} className="relative z-[3]">
      <Image
        src="/images/northprim2/arrow.png"
        alt="Decorative background"
        width={290}
        height={286}
        className="arrow absolute left-[40%] z-[1] -translate-y-1/2 xl:left-[60%] xl:max-w-[200px] md:left-1/2 md:max-w-[145px]"
      />
      <div className="trigger relative z-0 flex w-[100vw] justify-center overflow-hidden">
        <Image
          src="/images/northprim2/blur1.webp"
          alt="Decorative background"
          width={2493}
          height={1998}
          className="ml-[300px] mt-[-300px] w-[2493px] max-w-none xl:mt-[-300px] xl:max-w-[2000px] xl:pb-[400px] sm:pb-[800px]"
        />
        <Image
          src="/images/northprim2/stars.svg"
          alt="Decorative background"
          width={1920}
          height={807}
          className="absolute left-0 top-0 w-[100vw] max-w-none"
        />

        <Image
          src="/images/northprim2/northprim-logo.svg"
          alt="Decorative object"
          width={616}
          height={123}
          className="logo absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:max-w-[330px]"
        />
        <Image
          src="/images/northprim2/path2.svg"
          alt="Decorative object"
          width={764}
          height={712}
          className="absolute left-0 top-0 md:max-w-[vw] md:-translate-x-1/2"
        />

        <Image
          src="/images/northprim2/plus.png"
          alt="Decorative object"
          width={304}
          height={304}
          className="elementsR float2 absolute right-[30%] top-[10%] xl:max-w-[200px] md:right-0 md:top-0 md:max-w-[150px]"
        />
        <div className="elementsL absolute left-[-150px] top-[40%] -translate-y-1/2 2xl:max-w-[350px] xl:max-w-[340px] md:left-[-70px] md:max-w-[245px] sm:left-[-100px]">
          <Image
            src="/images/northprim2/target.png"
            alt="Decorative object"
            width={490}
            height={424}
            className="float"
          />
        </div>
        <Image
          src="/images/northprim2/path1.svg"
          alt="Decorative object"
          width={630}
          height={720}
          className="float3 absolute right-0 top-[60px] xl:hidden"
        />
        <div className="elementsR absolute right-[-150px] top-[180px] xl:max-w-[320px] md:right-0 md:top-[30%] md:max-w-[232px] md:translate-x-1/2">
          <Image
            src="/images/northprim2/sheets.png"
            alt="Decorative object"
            width={464}
            height={416}
            className="float2"
          />
        </div>
        <div className="elementsR absolute right-[10%] top-[35%] -translate-y-1/2 xl:max-w-[120px] md:top-[40%] md:max-w-[82px]">
          <Image
            src="/images/northprim2/ball1.png"
            alt="Decorative object"
            width={164}
            height={157}
            className="float"
          />
        </div>
        <Image
          src="/images/northprim2/moon.png"
          alt="Decorative object"
          width={166}
          height={164}
          className="elementsL float absolute left-[20%] top-2/3 xl:max-w-[120px] md:top-[55%] md:max-w-[83px]"
        />
        <Image
          src="/images/northprim2/pyramid.png"
          alt="Decorative object"
          width={248}
          height={248}
          className="float2 elementsR absolute right-[20%] top-2/3 xl:max-w-[180px] md:top-[60%] md:max-w-[124px]"
        />
      </div>
      <div className="absolute left-0 top-0 z-[1] w-screen">
        <div className="wrapper">
          <div className="max-w-[520px] pt-[120px] md:pt-[170px]">
            <h2 className="!mb-[40px]">Brand Identity</h2>
            <p className="mb-[30px]">
              The key ingredient in this branding rebuild was Artificial
              Intelligence and its role in complete optimization of business
              processes. In our search for the story behind the brand, we delved
              deeper into the evolution of the human effort towards advancement.
              That is how we reached the ultimate common denominator of all
              phases of evolution: Change.
            </p>
            <p>
              Depicting Change as a concept was not an easy task, so several
              brainstorming sessions ensued. We decided to focus on the phases
              of significant changes technology has undergone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
