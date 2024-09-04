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
          start: "top 30%",
        },
      });
    },
    { scope: main }
  );
  return (
    <section ref={main} className="WebDesign mt-[280px] relative z-[1]">
      <div className="wrapper trigger">
        <h2>Web Design</h2>
        <div className="videoWrap relative">
          <video autoPlay muted loop playsInline className="w-full">
            <source src="/images/northprim2/video1.mp4" type="video/mp4" />
          </video>
          <div className="bg-white block absolute bottom-0 left-0 w-full h-full videoReveal"></div>
        </div>
        <p className="max-w-[880px] text-[48px] mt-[80px]">
          New color palette, new logo, totally new look and feel.
        </p>
      </div>
    </section>
  );
}
