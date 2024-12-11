"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Motion() {
  const main = useRef();

  useGSAP(
    () => {
      let horizontalSections = gsap.utils.toArray(".horizontal .panel");
      gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".horizontal",
          pin: true,
          scrub: 1,

          end: () =>
            `+=${document.querySelector(".horizontal").offsetWidth * 0.5}`,
          markers: true,
        },
      });
    },
    { scope: main },
  );

  return (
    <section ref={main}>
      <div className="relative mt-[-88px] w-screen overflow-hidden">
        <div className="horizontal relative flex h-[1530px] w-[200%] flex-nowrap">
          <div className="absolute left-[0] top-[0] flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-[#E2DBD5] text-center">
            <h1 className="sticky font-['IvyPresto_Headline'] text-[160px] font-[100] text-[#000]">
              DESIGN. PRESTIGE.
            </h1>
            <h1 className="sticky font-['IvyPresto_Headline'] text-[160px] font-[100] text-[#000]">
              PERFECTLY SQUARED
            </h1>
          </div>
          <div className="panel flex h-[1530px] w-[50%] justify-center">
            <Image
              src="/images/turaquadra/instagramPosts/InstagramPost.png"
              className="absolute left-[2%] top-[3%] h-auto w-1/5"
              width="200"
              height="200"
            />
            <Image
              src="/images/turaquadra/instagramPosts/InstagramPost2.png"
              className="absolute left-[24%] top-[15%] h-auto w-1/5"
              width="200"
              height="200"
            />
            <Image
              src="/images/turaquadra/instagramPosts/InstagramPost3.png"
              className="absolute left-[53%] top-[10%] h-auto w-1/5"
              width="200"
              height="200"
            />
            <Image
              src="/images/turaquadra/instagramPosts/InstagramPost4.png"
              className="absolute bottom-[0%] left-[11%] h-auto w-1/5"
              width="200"
              height="200"
            />
            <Image
              src="/images/turaquadra/instagramPosts/InstagramPost5.png"
              className="absolute bottom-[10%] right-[45%] h-auto w-1/5"
              width="200"
              height="200"
            />
            <Image
              src="/images/turaquadra/instagramPosts/InstagramPost6.png"
              className="absolute right-[8%] top-[3%] h-auto w-1/5"
              width="200"
              height="200"
            />
            <Image
              src="/images/turaquadra/instagramPosts/InstagramPost8.png"
              className="absolute bottom-[4%] right-[18%] h-auto w-1/5"
              width="200"
              height="200"
            />
          </div>
          <div className="panel flex h-[1530px] w-[50%] justify-center">
            <Image
              src="/images/turaquadra/instagramPosts/InstagramPost7.png"
              className="absolute right-[43%] top-[8%] h-auto w-1/5"
              width="200"
              height="200"
            />
            <Image
              src="/images/turaquadra/instagramPosts/InstagramPost9.png"
              className="absolute bottom-[20%] left-[-11%] h-auto w-1/5"
              width="200"
              height="200"
            />
            <Image
              src="/images/turaquadra/instagramPosts/InstagramPost10.png"
              className="absolute bottom-[5%] left-[19%] h-auto w-1/5"
              width="200"
              height="200"
            />
            <Image
              src="/images/turaquadra/instagramPosts/InstagramPost11.png"
              className="absolute left-[13%] top-[0%] h-auto w-1/5"
              width="200"
              height="200"
            />
            <Image
              src="/images/turaquadra/instagramPosts/InstagramPost12.png"
              className="absolute right-[20%] top-[3%] h-auto w-1/5"
              width="200"
              height="200"
            />
            <Image
              src="/images/turaquadra/instagramPosts/InstagramPost13.png"
              className="absolute bottom-[15%] right-[6%] h-auto w-1/5"
              width="200"
              height="200"
            />
            <Image
              src="/images/turaquadra/instagramPosts/InstagramPost14.png"
              className="absolute bottom-[0%] right-[32%] h-auto w-1/5"
              width="200"
              height="200"
            />
          </div>
        </div>
      </div>
      <div className="relative flex flex-row overflow-hidden">
        <div className="flex w-1/2 flex-wrap content-center justify-center">
          <div className="w-[520px] border-b-[2px] border-t-[2px] border-solid border-[#C08239] pb-[40px] pt-[40px]">
            <h2>Motion Graphics</h2>
            <p>
              Static visuals have already been surpassed by short-format videos
              and motion graphic elements. In order to capture attention
              immediately, advertising has rapidly shifted towards visual
              solutions that almost regularly include elements that inevitably
              draw the spectator’s eye through movement. For that very reason,
              we included motion graphics into our sponsored ads for Turaquadra,
              which has proven as the right move: according to our analysis,
              these types of visuals gain a notably higher engagement rate, as
              well as clicks and number of leads.
            </p>
          </div>
        </div>
        <div className="relative w-1/2">
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
            className="animate-rotateBackAndForth pointer-events-none origin-[23.8%_50%] object-contain"
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
      </div>
    </section>
  );
}
