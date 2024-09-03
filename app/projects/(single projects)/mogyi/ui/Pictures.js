"use client";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Pictures() {
  const main = useRef(null);

  useGSAP(
    () => {
      if (window.innerWidth < 900) {
        console.log("yes");
      }
      window.innerWidth > 900
        ? gsap.to(".picture", {
            marginRight: 0,
            duration: 1,
            scrollTrigger: {
              trigger: ".trigger",
              start: "top center",
              end: "bottom center",
            },
          })
        : gsap.to(".picture", {
            marginBottom: "-100px",
            duration: 1,
            scrollTrigger: {
              trigger: ".trigger",
              start: "top center",
              end: "bottom center",
            },
          });
      gsap.from(".specialPicture", {
        autoAlpha: 0,
        y: 50,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".specialPictures",
          start: "top center",
          end: "bottom center",
        },
      });
    },
    { scope: main }
  );

  return (
    <section className="Pictures" ref={main}>
      <div className="max-w-[1800px] mx-auto flex justify-center trigger mb-[160px] overflow-clip py-[40px] md:flex-col md:items-center md:pt-[120px] md:pb-[120px] md:mb-[0]">
        <Image
          src="/images/mogyi/insta4.webp"
          alt="Instagram post 4"
          width={425}
          height={556}
          className="mr-[-425px] picture rotate-[6deg] md:mr-0 md:max-w-[300px] md:mb-[-417px]"
        />
        <Image
          src="/images/mogyi/insta1.webp"
          alt="Instagram post 1"
          width={425}
          height={556}
          className="mr-[-425px] picture rotate-[-6deg] md:mr-0 md:max-w-[300px] md:mb-[-417px]"
        />
        <Image
          src="/images/mogyi/insta2.webp"
          alt="Instagram post 2"
          width={425}
          height={556}
          className="mr-[-425px] picture rotate-[6deg] md:mr-0 md:max-w-[300px] md:mb-[-417px]"
        />
        <Image
          src="/images/mogyi/insta3.webp"
          alt="Instagram post 3"
          width={425}
          height={556}
          className="picture rotate-[-6deg] md:max-w-[300px]"
        />
      </div>
      <div className="wrapper flex items-end justify-between specialPictures md:flex-col">
        <Image
          src="/images/mogyi/protein.webp"
          alt="Mogyi Protein Mix"
          width={615}
          height={800}
          className="specialPicture"
        />
        <Image
          src="/images/mogyi/semenke.webp"
          alt="Mogyi Semenke"
          width={600}
          height={840}
          className="specialPicture"
        />
      </div>
    </section>
  );
}
