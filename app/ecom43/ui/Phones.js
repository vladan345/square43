import Link from "next/link";
import styles from "./styles/Phones.module.css";
import Image from "next/image";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Phones() {
  const main = useRef(null);

  useGSAP(
    () => {
      gsap.from(".phone", {
        y: "+=30",
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".trigger",
          start: "top 70%",
        },
      });
    },
    { scope: main },
  );

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      number: 3,
      perView: 1.2,
      spacing: -20,
    },
    loop: false,
  });
  return (
    <section className="bg-black py-[140px] md:py-[80px]" ref={main}>
      <div className="wrapper trigger flex flex-col items-center">
        <h2 className="phone text-center text-[60px] font-normal text-white md:text-[36px]">
          Why imitate when you can{" "}
          <span className={styles.highlight}> innovate?</span>
        </h2>

        <div className="flex min-h-[962px] justify-center md:hidden">
          <Image
            src="/images/phone1.png"
            alt="Ecom phone"
            width={514}
            height={1090}
            className="phone h-auto w-1/3 object-contain"
          />
          <Image
            src="/images/phone2.png"
            alt="Ecom phone"
            width={514}
            height={1090}
            className="phone h-auto w-1/3 object-contain"
          />
          <Image
            src="/images/phone3.png"
            alt="Ecom phone"
            width={514}
            height={1090}
            className="phone h-auto w-1/3 object-contain"
          />
        </div>
      </div>
      <div ref={sliderRef} className="keen-slider !hidden pl-[20px] md:!flex">
        {[...Array(3).keys()].map((index) => (
          <div
            key={index}
            className="keen-slider__slide md:flex md:justify-center"
          >
            <Image
              src={`/images/phone${index + 1}.png`}
              alt="Ecom phone"
              width={514}
              height={1090}
              className="phone"
            />
          </div>
        ))}
      </div>
      <div className="wrapper flex flex-col items-center">
        <p className="phone mt-[-80px] text-center text-[34px] font-semibold text-white">
          You bring the product, we will provide{" "}
          <span className={styles.highlight}>the vision.</span>
        </p>
        <Link
          href="https://ecom.square43.com"
          target="_blank"
          className={`phone relative mt-[80px] md:mt-[50px] ${styles.button} overflow-hidden sm:w-full`}
        >
          <div
            className={`absolute left-0 top-0 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(112,0,255,1)_0%,rgba(0,255,255,1)_100%)] ${styles.buttonGradient}`}
          ></div>
          <div className="relative z-[1] flex w-[440px] items-center justify-between p-[40px] text-[24px] font-bold tracking-[1.2px] text-white sm:w-full">
            ECOM43 DEMO
            <Image
              src="/images/arrow-white-r.svg"
              alt="Arrow right"
              width={40}
              height={40}
            />
          </div>
        </Link>
      </div>
    </section>
  );
}
