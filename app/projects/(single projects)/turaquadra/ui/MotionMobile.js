"use client";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function MotionMobile() {
  return (
    <section className="hidden h-screen sm:block">
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
      <div>
        <Splide aria-label="Instagram posts">
          <SplideSlide className="splide__arrows">
            <Image
              src="/images/turaquadra/instagramPosts/Instagram Post-1.png"
              width={200}
              height={300}
              className="h-auto w-[100%]"
            ></Image>
          </SplideSlide>
          <SplideSlide>
            <Image
              src="/images/turaquadra/instagramPosts/Instagram Post-2.png"
              width={200}
              height={300}
              className="h-auto w-[100%]"
            ></Image>
          </SplideSlide>
          <SplideSlide>
            <Image
              src="/images/turaquadra/instagramPosts/Instagram Post-3.png"
              width={200}
              height={300}
              className="h-auto w-[100%]"
            ></Image>
          </SplideSlide>
          <SplideSlide>
            <Image
              src="/images/turaquadra/instagramPosts/Instagram Post-4.png"
              width={200}
              height={300}
            ></Image>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
}
