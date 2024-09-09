"use client";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Colors() {
  const main = useRef(null);

  useGSAP(
    () => {
      gsap.from(".colors", {
        width: 0,
        height: 0,
        duration: 0.7,
        ease: "power1.inOut",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".trigger",
          start: "top 60%",
          end: "bottom 60%",
        },
      });
    },
    { scope: main },
  );
  return (
    <section
      className="Colors mt-[-160px] overflow-x-clip md:mt-[-350px]"
      ref={main}
    >
      <div className="trigger relative z-[1] grid grid-cols-4 text-center md:grid-cols-2">
        <div className="relative flex h-[20vw] w-[20vw] flex-col items-center justify-center gap-[38px] place-self-center text-white md:h-[50vw] md:w-[50vw] md:gap-[10px]">
          <div className="colors absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#27006d] blur-[30px] md:blur-[10px]"></div>
          <p className="relative z-[1] min-h-[36px] text-[17px]">Deep Violet</p>
          <p className="relative z-[1] text-[20px]">#27006D</p>
        </div>
        <div className="relative flex h-[20vw] w-[20vw] flex-col items-center justify-center gap-[38px] place-self-center text-white md:h-[50vw] md:w-[50vw] md:gap-[10px]">
          <div className="colors absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8846FD] blur-[30px] md:blur-[10px]"></div>
          <p className="relative z-[1] min-h-[36px] max-w-[93px] text-center text-[17px]">
            Lavender Indigo
          </p>
          <p className="relative z-[1] text-[20px]">#8846FD</p>
        </div>
        <div className="relative flex h-[20vw] w-[20vw] flex-col items-center justify-center gap-[38px] place-self-center text-white md:h-[50vw] md:w-[50vw] md:gap-[10px]">
          <div className="colors absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7A7AFE] blur-[30px] md:blur-[10px]"></div>
          <p className="relative z-[1] min-h-[36px] max-w-[93px] text-center text-[17px]">
            Medium Slate Blue
          </p>
          <p className="relative z-[1] text-[20px]">#7A7AFE</p>
        </div>
        <div className="relative flex h-[20vw] w-[20vw] flex-col items-center justify-center gap-[38px] place-self-center text-[#27006D] md:h-[50vw] md:w-[50vw] md:gap-[10px]">
          <div className="colors absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1DD57D] blur-[30px] md:blur-[10px]"></div>
          <p className="relative z-[1] min-h-[36px] text-[17px]">UFO Green</p>
          <p className="relative z-[1] text-[20px]">#1DD57D</p>
        </div>
      </div>

      <div className="relative z-[0] mt-[-60px] grid grid-cols-4 text-center 1xl:mt-[-20px] md:mt-0 md:grid-cols-2">
        <div className="relative flex h-[20vw] w-[20vw] flex-col items-center justify-center gap-[38px] place-self-center text-white md:h-[50vw] md:w-[50vw] md:gap-[10px]">
          <div className="colors absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF6E7C] blur-[30px] md:blur-[10px]"></div>
          <p className="relative z-[1] min-h-[36px] text-[17px]">Begonia</p>
          <p className="relative z-[1] text-[20px]">#FF6E7C</p>
        </div>
        <div className="relative flex h-[20vw] w-[20vw] flex-col items-center justify-center gap-[38px] place-self-center text-[#27006D] md:h-[50vw] md:w-[50vw] md:gap-[10px]">
          <div className="colors absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFA3E4] blur-[30px] md:blur-[10px]"></div>
          <p className="relative z-[1] min-h-[36px] max-w-[93px] text-center text-[17px]">
            Lavender Rose
          </p>
          <p className="relative z-[1] text-[20px]">#FFA3E4</p>
        </div>
        <div className="relative flex h-[20vw] w-[20vw] flex-col items-center justify-center gap-[38px] place-self-center text-[#27006D] md:h-[50vw] md:w-[50vw] md:gap-[10px]">
          <div className="colors absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E09FFF] blur-[30px] md:blur-[10px]"></div>
          <p className="relative z-[1] min-h-[36px] max-w-[93px] text-center text-[17px]">
            Mauve
          </p>
          <p className="relative z-[1] text-[20px]">#E09FFF</p>
        </div>
        <div className="relative flex h-[20vw] w-[20vw] flex-col items-center justify-center gap-[38px] place-self-center text-[#27006D] md:h-[50vw] md:w-[50vw] md:gap-[15px]">
          <div className="colors absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F2D94C] blur-[30px] md:blur-[10px]"></div>
          <p className="relative z-[1] min-h-[36px] text-[17px]">
            Minion Yellow
          </p>
          <p className="relative z-[1] text-[20px]">#F2D94C</p>
        </div>
      </div>
    </section>
  );
}
