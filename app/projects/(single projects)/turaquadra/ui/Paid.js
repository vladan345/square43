"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Paid() {
  const main = useRef();
  useGSAP(
    () => {
      gsap.from(".luxury", {
        scrollTrigger: {
          trigger: ".container",
          start: "top 70%",
        },
        y: -200,
        autoAlpha: 0,
        duration: 1.2,
      });

      gsap.from(".paid", {
        scrollTrigger: {
          trigger: ".paid",
          start: "top 70%",
        },
        x: -200,
        autoAlpha: 0,
        duration: 1.2,
      });
    },
    { scope: main },
  );
  return (
    <section className="Paid bg-[#E2DBD5]" ref={main}>
      <div className="container relative z-[0] h-[960px] max-h-[960px] lg:h-[670px] lg:max-h-[670px]">
        <div className="absolute h-[960px] w-[100%] lg:h-[670px]">
          <Image
            fill
            src="/images/turaquadra/background.png"
            alt="Turaquadra"
            className="object-cover lg:object-right"
            unoptimized
          />
        </div>
        <div className="luxury absolute top-[10%] z-[1] flex w-[100%] justify-center">
          <h1 className="text-center font-ivy text-[160px] font-[100] leading-none text-[#fff] 2xl:text-[120px] xl:text-[90px] lg:text-[54px]">
            LUXURY EVERLASTING
          </h1>
        </div>
        <div className="absolute bottom-[0px] z-[2] h-[960px] w-[100%] lg:h-[670px]">
          <Image
            fill
            src="/images/turaquadra/BWOverlay.png"
            alt="Turaquadra"
            className="object-cover lg:object-right"
            unoptimized
          />
        </div>
      </div>
      <div className="paid relative z-[5] mt-[-300px] flex w-1/2 justify-end xl:mt-[-200px] xl:pl-[20px] md:mt-[-100px] md:w-[100%] md:justify-center md:pr-[20px] sm:mt-[0px] sm:px-[0px]">
        <div className="w-[600px] rounded-[20px] bg-[#202B3F] px-[40px] py-[60px] xl:px-[20px] xl:py-[40px] sm:rounded-[0px] sm:px-[30px] sm:py-[60px]">
          <h2 className="mb-[60px] text-[#fff] xl:mb-[20px]">
            Paid Advertisement
          </h2>
          <p className="text-[#fff]">
            Mastering the right tools goes a long way when it comes to sponsored
            content. Setting up the right parameters in terms of age range,
            geolocation and trending keywords allows us to target the perfect
            audience and present them with the type of real estate they are
            looking for. End result: a significant increase in the number of
            leads.
          </p>
        </div>
      </div>
    </section>
  );
}
