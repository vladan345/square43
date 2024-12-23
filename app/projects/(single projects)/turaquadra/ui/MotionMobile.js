"use client";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import "../ui/styles/MotionMobile.css";

export default function MotionMobile() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      slides: {
        perView: 1.2,
        spacing: -20,
      },
      loop: false,
    },
    [],
  );
  return (
    <section className="hidden sm:flex sm:flex-col">
      <div className="flex flex-col flex-wrap content-center items-center">
        <Image
          src="/images/turaquadra/instagramPosts/Vector.svg"
          width="150"
          height="150"
          className="my-[60px]"
        />
        <h1 className="sticky w-[85%] text-center font-ivy text-[54px] leading-none text-[#000]">
          DESIGN. PRESTIGE. PERFECTLY SQUARED
        </h1>
      </div>
      <div className="navigation-wrapper sm:mt-[60px] sm:block">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide">
            <Image
              src="/images/turaquadra/instagramPosts/Instagram Post-1.png"
              width={200}
              height={300}
              className="h-auto w-[100%]"
            ></Image>
          </div>
          <div className="keen-slider__slide">
            <Image
              src="/images/turaquadra/instagramPosts/Instagram Post-2.png"
              width={200}
              height={300}
              className="h-auto w-[100%]"
            ></Image>
          </div>
          <div className="keen-slider__slide">
            <Image
              src="/images/turaquadra/instagramPosts/Instagram Post-3.png"
              width={200}
              height={300}
              className="h-auto w-[100%]"
            ></Image>
          </div>
          <div className="keen-slider__slide">
            <Image
              src="/images/turaquadra/instagramPosts/Instagram Post-4.png"
              width={200}
              height={300}
              className="h-auto w-[100%]"
            ></Image>
          </div>
          <div className="keen-slider__slide">
            <Image
              src="/images/turaquadra/instagramPosts/Instagram Post-5.png"
              width={200}
              height={300}
              className="h-auto w-[100%]"
            ></Image>
          </div>
          <div className="keen-slider__slide">
            <Image
              src="/images/turaquadra/instagramPosts/Instagram Post-6.png"
              width={200}
              height={300}
              className="h-auto w-[100%]"
            ></Image>
          </div>
          <div className="keen-slider__slide">
            <Image
              src="/images/turaquadra/instagramPosts/Instagram Post-7.png"
              width={200}
              height={300}
              className="h-auto w-[100%]"
            ></Image>
          </div>
          <div className="keen-slider__slide">
            <Image
              src="/images/turaquadra/instagramPosts/Instagram Post-8.png"
              width={200}
              height={300}
              className="h-auto w-[100%]"
            ></Image>
          </div>
          <div className="keen-slider__slide">
            <Image
              src="/images/turaquadra/instagramPosts/Instagram Post-9.png"
              width={200}
              height={300}
              className="h-auto w-[100%]"
            ></Image>
          </div>
          <div className="keen-slider__slide">
            <Image
              src="/images/turaquadra/instagramPosts/Instagram Post-10.png"
              width={200}
              height={300}
              className="h-auto w-[100%]"
            ></Image>
          </div>
          <div className="keen-slider__slide">
            <Image
              src="/images/turaquadra/instagramPosts/Instagram Post-11.png"
              width={200}
              height={300}
              className="h-auto w-[100%]"
            ></Image>
          </div>
          <div className="keen-slider__slide">
            <Image
              src="/images/turaquadra/instagramPosts/Instagram Post-12.png"
              width={200}
              height={300}
              className="h-auto w-[100%]"
            ></Image>
          </div>
          <div className="keen-slider__slide">
            <Image
              src="/images/turaquadra/instagramPosts/Instagram Post-13.png"
              width={200}
              height={300}
              className="h-auto w-[100%]"
            ></Image>
          </div>
          <div className="keen-slider__slide">
            <Image
              src="/images/turaquadra/instagramPosts/Instagram Post-14.png"
              width={200}
              height={300}
              className="h-auto w-[100%]"
            ></Image>
          </div>
        </div>
        {/* {loaded && instanceRef.current && (
          <div className="dots">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              );
            })}
          </div>
        )} */}
      </div>
      <div className="flex w-1/2 flex-wrap content-center justify-center lg:pl-[20px] lg:pr-[50px] md:w-full">
        <div className="w-[520px] border-b-[2px] border-t-[2px] border-solid border-[#C08239] pb-[40px] pt-[40px] md:mb-[75px]">
          <h2 className="text-[48px]">Motion Graphics</h2>
          <p>
            Static visuals have already been surpassed by short-format videos
            and motion graphic elements. In order to capture attention
            immediately, advertising has rapidly shifted towards visual
            solutions that almost regularly include elements that inevitably
            draw the spectator’s eye through movement. For that very reason, we
            included motion graphics into our sponsored ads for Turaquadra,
            which has proven as the right move: according to our analysis, these
            types of visuals gain a notably higher engagement rate, as well as
            clicks and number of leads.
          </p>
        </div>
      </div>
      <div className="relative w-1/2 md:w-2/3 md:self-end md:overflow-hidden">
        <Image
          src="/images/turaquadra/hand.png"
          width={0}
          height={0}
          alt="hand"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <Image
          src="/images/turaquadra/keys.png"
          width={0}
          height={0}
          sizes="100vw"
          alt="keys"
          style={{
            width: "100%",
            height: "auto",
            position: "absolute",
            top: "0px",
            left: "0px",
          }}
          className="pointer-events-none origin-[23.8%_50%] animate-rotateBackAndForth object-contain"
        />
        <Image
          src="/images/turaquadra/finger.png"
          width={0}
          height={0}
          sizes="100vw"
          alt="finger"
          style={{
            width: "100%",
            height: "auto",
            position: "absolute",
            top: "0px",
            left: "0px",
          }}
        />
      </div>
    </section>
  );
}
