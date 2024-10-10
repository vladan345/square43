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
      gsap.from(".image", {
        scrollTrigger: {
          trigger: ".wrapper",
          start: "top 70%",
        },
        y: 50,
        autoAlpha: 0,
        duration: 1.2,
        stagger: 0.2,
      });
    },
    { scope: main },
  );
  return (
    <section className="Mobiles md:mb-[80px]" ref={main}>
      <div className="wrapper flex justify-between gap-[40px] md:flex-col md:items-center md:gap-[60px]">
        <Image
          src="/images/turaquadra/phone1.png"
          alt="Phone 1"
          width={395}
          height={810}
          className="image"
        />
        <Image
          src="/images/turaquadra/phone2.png"
          alt="Phone 2"
          width={395}
          height={810}
          className="image"
        />
        <Image
          src="/images/turaquadra/phone3.png"
          alt="Phone 3"
          width={395}
          height={810}
          className="image"
        />
      </div>
    </section>
  );
}
