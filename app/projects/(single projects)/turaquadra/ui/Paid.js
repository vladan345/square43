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
      gsap.from(".image", {
        scrollTrigger: {
          trigger: ".container",
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
    <section className="Paid" ref={main}>
      <div className="container flex h-[840px] lg:h-auto lg:flex-col">
        <div className="image relative w-1/2 lg:h-[600px] lg:w-full md:h-[80vw]">
          <Image
            fill
            sizes="50vw, max-width(767px) 100vw"
            src="/images/turaquadra/paid.png"
            alt="Turaquadra"
            className="object-cover"
          />
        </div>
        <div className="flex w-1/2 items-center justify-center px-[40px] lg:w-full lg:px-[20px] lg:pt-[60px]">
          <div className="max-w-[520px]">
            <h2>Paid Advertisement</h2>
            <p>
              Mastering the right tools goes a long way when it comes to
              sponsored content. Setting up the right parameters in terms of age
              range, geolocation and trending keywords allows us to target the
              perfect audience and present them with the type of real estate
              they are looking for. End result: a significant increase in the
              number of leads.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
