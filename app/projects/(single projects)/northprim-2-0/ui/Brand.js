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
      gsap.from(".elements", {
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
    { scope: main }
  );

  return (
    <section ref={main} className="relative z-[3]">
      <Image
        src="/images/northprim2/arrow.png"
        alt="Decorative background"
        width={290}
        height={286}
        className="absolute left-[40%] z-[1] -translate-y-1/2 arrow"
      />
      <div className="flex w-[100vw] justify-center overflow-hidden relative z-0 trigger">
        <Image
          src="/images/northprim2/blur1.webp"
          alt="Decorative background"
          width={2493}
          height={1998}
          className="max-w-none w-[2493px] mt-[-300px] ml-[300px]"
        />
        <Image
          src="/images/northprim2/stars.svg"
          alt="Decorative background"
          width={1920}
          height={807}
          className="absolute top-0 left-0 max-w-none w-[100vw]"
        />

        <Image
          src="/images/northprim2/northprim-logo.svg"
          alt="Decorative object"
          width={616}
          height={123}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 logo"
        />
        <Image
          src="/images/northprim2/path2.svg"
          alt="Decorative object"
          width={764}
          height={712}
          className="absolute top-0 left-0"
        />

        <Image
          src="/images/northprim2/plus.png"
          alt="Decorative object"
          width={304}
          height={304}
          className="absolute top-[10%] right-[30%] elements"
        />

        <Image
          src="/images/northprim2/target.png"
          alt="Decorative object"
          width={490}
          height={424}
          className="absolute top-[40%] left-[-150px] -translate-y-1/2 elements"
        />
        <Image
          src="/images/northprim2/path1.svg"
          alt="Decorative object"
          width={630}
          height={720}
          className="absolute top-[60px] right-0"
        />
        <Image
          src="/images/northprim2/sheets.png"
          alt="Decorative object"
          width={464}
          height={416}
          className="absolute top-[180px] right-[-150px] elements"
        />
        <Image
          src="/images/northprim2/ball1.png"
          alt="Decorative object"
          width={164}
          height={157}
          className="absolute top-[35%] -translate-y-1/2 right-[10%] elements"
        />
        <Image
          src="/images/northprim2/moon.png"
          alt="Decorative object"
          width={166}
          height={164}
          className="absolute top-2/3 left-[20%]"
        />
        <Image
          src="/images/northprim2/pyramid.png"
          alt="Decorative object"
          width={248}
          height={248}
          className="absolute top-2/3 right-[20%]"
        />
      </div>
      <div className="absolute top-0 left-0 w-screen z-[1]">
        <div className="wrapper">
          <div className="max-w-[520px] pt-[120px]">
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
