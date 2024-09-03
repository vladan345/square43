"use client";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Approach() {
  const main = useRef(null);

  useGSAP(
    () => {
      gsap.to(".approach", {
        y: "15%",
        scrollTrigger: {
          trigger: ".trigger",
          scrub: true,
        },
      });
      gsap.from(".littlePopcorn", {
        autoAlpha: 0,
        y: "-=50",
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".trigger",
          start: "top center",
          end: "bottom center",
        },
      });
    },
    { scope: main }
  );

  return (
    <section className="Approach" ref={main}>
      <div className="wrapper trigger !pt-[120px] !pb-[180px] xl:!pt-[180px] md:!py-[60px] flex md:flex-col">
        <div className="w-1/2 md:w-full relative md:flex md:items-center md:justify-center">
          <Image
            src="/images/mogyi/little-popcorn1.png"
            alt="Decorative object"
            width={90}
            height={90}
            className="absolute left-[-10px] top-[-30px] littlePopcorn hidden md:block"
          />
          <Image
            src="/images/mogyi/little-popcorn2.png"
            alt="Decorative object"
            width={92}
            height={69}
            className="absolute right-[10px] top-[-20px] littlePopcorn hidden md:block"
          />
          <Image
            src="/images/mogyi/little-popcorn3.png"
            alt="Decorative object"
            width={48}
            height={62}
            className="absolute bottom-0 left-0 littlePopcorn hidden md:block"
          />
          <Image
            src="/images/mogyi/little-popcorn4.png"
            alt="Decorative object"
            width={52}
            height={57}
            className="absolute right-[20px] bottom-0 littlePopcorn hidden md:block"
          />
          <div className="w-[640px] h-[640px] rounded-full overflow-hidden flex justify-center items-end after:shadow-[inset_0_10px_20px_10px_rgba(0,0,0,0.25)] after:w-full after:h-full after:absolute after:top-0 after:left-0 relative after:rounded-full xl:w-[400px] xl:h-[400px] sm:w-[90vw] sm:h-[90vw]">
            <Image
              src="/images/mogyi/approach.webp"
              alt="Social media approach"
              width={640}
              height={1337}
              className="approach"
            />
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-center md:w-full md:mt-[90px]">
          <div className="max-w-[520px] relative">
            <Image
              src="/images/mogyi/little-popcorn1.png"
              alt="Decorative object"
              width={152}
              height={152}
              className="absolute left-[-110px] top-[-120px] littlePopcorn md:hidden"
            />
            <Image
              src="/images/mogyi/little-popcorn2.png"
              alt="Decorative object"
              width={154}
              height={116}
              className="absolute right-0 top-0 -translate-y-full littlePopcorn md:hidden"
            />
            <Image
              src="/images/mogyi/little-popcorn3.png"
              alt="Decorative object"
              width={79}
              height={103}
              className="absolute bottom-0 left-[-10px] -translate-x-full translate-y-full littlePopcorn md:hidden"
            />
            <Image
              src="/images/mogyi/little-popcorn4.png"
              alt="Decorative object"
              width={88}
              height={97}
              className="absolute right-0 bottom-[-25px] translate-y-full littlePopcorn md:hidden"
            />
            <h2 className="!mb-[60px]">Social Media Approach</h2>
            <p className="mb-[30px]">
              Our destination - a vibrant display of kaleidoscopic content that
              embodies the brand's colorful and playful spirit. Our approach
              entailed creating an immersive and engaging narrative based on the
              sensation of snack-induced bliss.
            </p>
            <p>
              From whimsical animated visuals that highlight the joy of snacking
              to stunning graphics that make the brand's image pop, we've
              crafted a captivating experience that delights and appeals to
              consumers of all ages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
