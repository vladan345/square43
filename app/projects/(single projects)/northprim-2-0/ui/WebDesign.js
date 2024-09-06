"use client";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
export default function WebDesign() {
  const main = useRef(null);

  useGSAP(
    () => {
      gsap.to(".videoReveal", {
        height: 0,
        duration: 1.2,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".trigger",
        },
      });
    },
    { scope: main },
  );
  return (
    <section
      ref={main}
      className="WebDesign relative z-[1] mt-[280px] md:mt-[80px]"
    >
      <div className="wrapper trigger md:!px-0">
        <h2 className="md:mx-[20px] md:!mb-[60px]">Web Design</h2>
        <div className="videoWrap relative">
          <video autoPlay muted loop playsInline className="w-full md:hidden">
            <source src="/images/northprim2/rooms.mp4" type="video/mp4" />
          </video>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hidden w-full md:block"
          >
            <source
              src="/images/northprim2/rooms-mobile.mp4"
              type="video/mp4"
            />
          </video>
          <div className="videoReveal absolute bottom-0 left-0 block h-full w-full bg-white"></div>
        </div>
        <p className="mt-[80px] max-w-[880px] text-[48px] md:mx-[20px] md:mt-[60px] md:text-[32px]">
          New color palette, new logo, totally new look and feel.
        </p>
      </div>
    </section>
  );
}
