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
    },
    { scope: main }
  );
  return (
    <section ref={main} className="Parallax pt-[340px] relative">
      <div className="absolute right-[20%] z-[1] top-[40%]">
        <Image
          src="/images/northprim2/ball3.webp"
          alt="Decorative object"
          width={235}
          height={235}
        />
        <Image
          src="/images/northprim2/ball2.webp"
          alt="Decorative object"
          width={260}
          height={260}
          className="absolute right-[-150px] top-[-150px] max-w-none w-[260px]"
        />
      </div>
      <div className="wrapper flex gap-[80px] items-start relative z-[1] trigger">
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
          className="mt-[500px] imageR"
        />
        <Image
          src="/images/northprim2/ball4.webp"
          alt="Decorative object"
          width={200}
          height={200}
          className="absolute -translate-x-1/2 top-1/2"
        />
        <Image
          src="/images/northprim2/object1.webp"
          alt="Decorative object"
          width={200}
          height={200}
          className="absolute top-[30%] left-1/2"
        />
      </div>
      <div className="w-[100vw] overflow-hidden absolute top-0 left-1/2 -translate-x-1/2 flex justify-center">
        <Image
          src="/images/northprim2/blur2.webp"
          alt="Decorative background"
          width={2717}
          height={2386}
          className="max-w-none w-[2717px]"
        />
      </div>
    </section>
  );
}
