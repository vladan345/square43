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
    { scope: main }
  );
  return (
    <section className="Colors mt-[-160px]" ref={main}>
      <div className="grid grid-cols-4 text-center relative z-[1] trigger">
        <div className="w-[20vw] h-[20vw] flex flex-col items-center gap-[38px] justify-center relative text-white place-self-center">
          <div className="w-full h-full colors absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[30px] bg-[#27006d]"></div>
          <p className="text-[17px] min-h-[36px] relative z-[1]">Deep Violet</p>
          <p className="text-[20px] relative z-[1]">#27006D</p>
        </div>
        <div className="w-[20vw] h-[20vw] flex flex-col items-center gap-[38px] justify-center relative text-white place-self-center">
          <div className="w-full h-full colors absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[30px] bg-[#8846FD]"></div>
          <p className="text-[17px] min-h-[36px] relative z-[1] max-w-[93px] text-center">
            Lavender Indigo
          </p>
          <p className="text-[20px] relative z-[1]">#8846FD</p>
        </div>
        <div className="w-[20vw] h-[20vw] flex flex-col items-center gap-[38px] justify-center relative text-white place-self-center">
          <div className="w-full h-full colors absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[30px] bg-[#7A7AFE]"></div>
          <p className="text-[17px] min-h-[36px] relative z-[1] max-w-[93px] text-center">
            Medium Slate Blue
          </p>
          <p className="text-[20px] relative z-[1]">#7A7AFE</p>
        </div>
        <div className="w-[20vw] h-[20vw] flex flex-col items-center gap-[38px] justify-center relative text-[#27006D] place-self-center">
          <div className="w-full h-full colors absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[30px] bg-[#1DD57D]"></div>
          <p className="text-[17px] min-h-[36px] relative z-[1]">UFO Green</p>
          <p className="text-[20px] relative z-[1]">#1DD57D</p>
        </div>
      </div>

      <div className="grid grid-cols-4 text-center relative z-[0] mt-[-60px]">
        <div className="w-[20vw] h-[20vw] flex flex-col items-center gap-[38px] justify-center relative text-white place-self-center">
          <div className="w-full h-full absolute top-1/2 left-1/2 colors -translate-x-1/2 -translate-y-1/2 rounded-full blur-[30px] bg-[#FF6E7C]"></div>
          <p className="text-[17px] min-h-[36px] relative z-[1]">Begonia</p>
          <p className="text-[20px] relative z-[1]">#FF6E7C</p>
        </div>
        <div className="w-[20vw] h-[20vw] flex flex-col items-center gap-[38px] justify-center relative text-[#27006D] place-self-center">
          <div className="w-full h-full absolute top-1/2 left-1/2 colors -translate-x-1/2 -translate-y-1/2 rounded-full blur-[30px] bg-[#FFA3E4]"></div>
          <p className="text-[17px] min-h-[36px] relative z-[1] max-w-[93px] text-center">
            Lavender Rose
          </p>
          <p className="text-[20px] relative z-[1]">#FFA3E4</p>
        </div>
        <div className="w-[20vw] h-[20vw] flex flex-col items-center gap-[38px] justify-center relative text-[#27006D] place-self-center">
          <div className="w-full h-full absolute top-1/2 left-1/2 colors -translate-x-1/2 -translate-y-1/2 rounded-full blur-[30px] bg-[#E09FFF]"></div>
          <p className="text-[17px] min-h-[36px] relative z-[1] max-w-[93px] text-center">
            Mauve
          </p>
          <p className="text-[20px] relative z-[1]">#E09FFF</p>
        </div>
        <div className="w-[20vw] h-[20vw] flex flex-col items-center gap-[38px] justify-center relative text-[#27006D] place-self-center">
          <div className="w-full h-full absolute top-1/2 left-1/2 colors -translate-x-1/2 -translate-y-1/2 rounded-full blur-[30px] bg-[#F2D94C]"></div>
          <p className="text-[17px] min-h-[36px] relative z-[1]">
            Minion Yellow
          </p>
          <p className="text-[20px] relative z-[1]">#F2D94C</p>
        </div>
      </div>
    </section>
  );
}
