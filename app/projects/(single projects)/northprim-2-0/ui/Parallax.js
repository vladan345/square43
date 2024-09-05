"use client";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Parallax() {
  const main = useRef(null);

  useGSAP(
    () => {
      if (window.innerWidth > 900) {
        gsap.to(".imageL", {
          y: "200px",
          scrollTrigger: {
            trigger: ".trigger",
            scrub: true,
          },
        });
        gsap.from(".imageR", {
          y: "-=350px",
          scrollTrigger: {
            trigger: ".trigger",
            scrub: true,
          },
        });
      }
    },
    { scope: main },
  );
  return (
    <section ref={main} className="Parallax relative pt-[340px]">
      <div className="absolute right-[20%] top-[40%] z-[1] md:top-[10%]">
        <Image
          src="/images/northprim2/ball3.webp"
          alt="Decorative object"
          width={235}
          height={235}
          className="float2 xl:max-w-[180px] md:max-w-[125px]"
        />
        <Image
          src="/images/northprim2/ball2.webp"
          alt="Decorative object"
          width={260}
          height={260}
          className="float3 absolute right-[-150px] top-[-150px] w-[260px] max-w-none xl:max-w-[180px] md:right-[-60px] md:top-[-70px] md:max-w-[130px]"
        />
      </div>
      <div className="wrapper trigger relative z-[1] flex items-start gap-[80px] md:flex-col md:gap-[160px]">
        <Image
          src="/images/northprim2/imageL.png"
          alt="Northprim Merch"
          width={640}
          height={674}
          className="imageL"
        />
        <Image
          src="/images/northprim2/imageR.png"
          alt="Northprim Merch"
          width={640}
          height={674}
          className="imageR mt-[500px] md:mt-[0]"
        />
        <Image
          src="/images/northprim2/ball4.webp"
          alt="Decorative object"
          width={200}
          height={200}
          className="float2 absolute top-1/2 -translate-x-1/2 xl:max-w-[150px] md:left-[30%] md:top-[35%] sm:top-[37%] sm:max-w-[100px]"
        />
        <Image
          src="/images/northprim2/object1.webp"
          alt="Decorative object"
          width={200}
          height={200}
          className="float3 absolute left-1/2 top-[30%] xl:max-w-[150px] md:top-[53%] sm:left-[70%] sm:max-w-[100px]"
        />
      </div>
      <div className="absolute left-1/2 top-0 flex w-[100vw] -translate-x-1/2 justify-center overflow-hidden">
        <Image
          src="/images/northprim2/blur2.webp"
          alt="Decorative background"
          width={2717}
          height={2386}
          className="w-[2717px] max-w-none xl:mt-[300px] xl:max-w-[2000px] md:mt-[500px] md:max-w-[1500px]"
        />
      </div>
    </section>
  );
}
