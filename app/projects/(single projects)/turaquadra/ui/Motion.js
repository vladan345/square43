"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Motion() {
  const main = useRef();
  useGSAP(
    () => {
      gsap.from(".image", {
        scrollTrigger: {
          trigger: ".container",
        },
        x: 200,
        autoAlpha: 0,
        duration: 1.2,
      });
    },
    { scope: main },
  );
  return (
    <section
      className="Motion relative overflow-x-clip py-[240px] lg:flex lg:flex-col-reverse lg:items-center lg:gap-[60px] lg:py-[60px]"
      ref={main}
    >
      <div className="wrapper container">
        <div className="relative z-[1] max-w-[520px]">
          <h2 className="!mb-[60px]">Motion Graphics</h2>
          <p className="mb-[30px]">
            Static visuals have already been surpassed by short-format videos
            and motion graphic elements. In order to capture attention
            immediately, advertising has rapidly shifted towards visual
            solutions that almost regularly include elements that inevitably
            draw the spectator's eye through movement.
          </p>
          <p>
            For that very reason, we included motion graphics into our sponsored
            ads for Turaquadra, which has proven to be the right move: according
            to our analysis, these types of visuals gain a notably higher
            engagement rate, as well as clicks and number of leads.
          </p>
        </div>
      </div>
      <Image
        src="/images/turaquadra/logo.svg"
        alt="Turaqwuadra logo"
        width={1100}
        height={1100}
        className="image absolute right-[-3%] top-1/2 w-[60vw] max-w-[1100px] -translate-y-1/2 lg:static lg:translate-y-0 md:w-[105vw]"
      />
    </section>
  );
}
