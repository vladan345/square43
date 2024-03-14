"use client";
import styles from "./HallOfFame.module.css";
import Image from "next/image";
import VideoSection from "../projects/(single projects)/northprim/ui/VideoSection";
import { gsap, toArray } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitType);

// export const metadata = {
//   openGraph: {
//     title: "Square43 Studio | Career",
//     description: "If you are the one show us what you got",
//     images: [{ url: "/images/About.png" }],
//     url: "https://square43.com/hall-of-fame",
//   },
//   title: "Square43 Studio | Career",
//   description: "If you are the one show us what you got",
//   metadataBase: new URL("https://square43.com/hall-of-fame"),
// };

{
  /* // Objects for first first draft - START // ------------------------------

const sections = [
  {
    image: "/images/gogaudi/heroGogaudi.png",
    heading: "GoGaudi",
    text: "Pension is not the end. It's a begining.",
  },
  {
    image: "/images/northprim/Northprim-hero.mp4",
    heading: "NORTHPRIM",
    text: "sin dolor met 2",
  },
  {
    image: "/images/",
    heading: "lorem ipsum 3",
    text: "sin dolor met 3",
  },
  {
    image: [{ url: "/images/" }],
    heading: "lorem ipsum 4",
    text: "sin dolor met 4",
  },
];

// Objects for first first draft - END // ------------------------------

*/
}

export default function page() {
  const container = useRef();

  useGSAP(() => {
    /* // GSAP for first draft - START // ------------------------------
    
    if (inView) {
      if (window.innerWidth > 720) {
        gsap.to(".phoneImage", {
          marginRight: 0,
          duration: 3,
          ease: "power4",
        });
        const tl = gsap.timeline();
        tl.to(".colorChanger", { color: "#91AE6D", duration: 1 })
          .to(".colorChanger", { color: "#fa7c21", duration: 2 })
          .to(".colorChanger", { color: "#91AE6D", duration: 1 });
        tl.repeat(-1);

        const rotate = gsap.timeline({
          scrollTrigger: {
            scrub: true,
            trigger: ".fifth",
            start: "20% bottom",
            end: "bottom 50%",
            markers: true,
          },
        });

        rotate.to("#c-one", {
          rotateZ: 900,
        });
      }
    } 
    
    // GSAP for first draft - END // ------------------------------

    */

    // let tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".grow",
    //     toggleActions: "restart",
    //     start: "50% 20%",
    //     end: "bottom 50%",
    //     markers: "true",
    //     stagger: 1,
    //   },
    // });

    // tl.to(".grow", {
    //   rotate: 200,
    // });
    const images = gsap.utils.toArray(".grow");
    images.forEach(
      (image) => {
        let imageHeight = image.offsetHeight;

        gsap.from(image, {
          scale: 0,
          scrollTrigger: {
            trigger: image,
            markers: true,
            start: `${-imageHeight} bottom`,
            end: `bottom bottom`,
            ease: "ease",
            scrub: 0,
          },
        });
      },
      { scope: container }
    );

    const myText = new SplitType("#hall");

    gsap.from(".char", {
      y: -150,
      stagger: 0.05,
      delay: 1,
      duration: 0.3,
    });
    gsap.to("#vid2", {
      y: 500,
      scrollTrigger: {
        trigger: "#vid2",
        stagger: 1,
        markers: true,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to("#vid1", {
      y: -200,
      scrollTrigger: {
        trigger: "#vid2",
        stagger: 1,
        markers: true,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to("#vid3", {
      y: 300,
      scrollTrigger: {
        trigger: "#vid2",
        stagger: 1,
        markers: true,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to("#vid4", {
      y: -200,
      scrollTrigger: {
        trigger: "#vid2",
        stagger: 1,
        markers: true,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.from("#v1", {
      x: "100%",
      opacity: 0,
      scrollTrigger: {
        trigger: "#v1",
        stagger: 1,
        markers: true,
        start: "top 60%",
        end: "top 20%",
        scrub: true,
      },
    });
    gsap.from("#v2", {
      x: "100%",
      opacity: 0,
      scrollTrigger: {
        trigger: "#v2",
        stagger: 1,
        markers: true,
        start: "top 60%",
        end: "top 20%",
        scrub: true,
      },
    });
    gsap.from("#v3", {
      x: "50%",
      opacity: 0,
      scrollTrigger: {
        trigger: "#v3",
        stagger: 1,
        markers: true,
        start: "top 60%",
        end: "top 20%",
        scrub: true,
      },
    });
    gsap.fromTo(
      "#digi",
      {
        x: 0,
        scrollTrigger: {
          trigger: "#digi",
          stagger: 1,
          scrub: true,
        },
      },
      {
        x: -600,
        scrollTrigger: {
          trigger: "#digi",
          stagger: 1,
          scrub: true,
        },
      }
    );
  });

  return (
    <div className={styles.main} ref={container}>
      <div className={styles.clientsWrapper}>
        <p className={`${styles.clients} digital`} id="digi">
          DIGITAL<br></br>CREATIVE<br></br>STUDIO
        </p>
      </div>
      <div className={styles.content}>
        <p className={styles.hall}>
          <span aria-hidden="hidden">HALL OF FAME</span>HALL OF FAME
          <span aria-hidden="hidden">HALL OF FAME</span>
        </p>
        <p className={styles.imaginations} id="hall">
          let your imaginations be liberate<br></br> and roam our halls
        </p>
      </div>
      <div className={styles.videoSectionOne}>
        <video
          playsInline
          width="15%"
          autoPlay
          muted
          loop
          className={`${styles.video}`}
          id="vid1"
        >
          <source
            src="/images/imunoshop/Imuno Shop dorucak Reel.mp4"
            type="video/mp4"
          />
        </video>
        <video
          playsInline
          width="15%"
          autoPlay
          muted
          loop
          className={`${styles.video}`}
          id="vid2"
        >
          <source
            src="/images/imunoshop/Imuno Shop - Zdrav rucak Reel.mp4"
            type="video/mp4"
          />
        </video>
        <video
          playsInline
          width="15%"
          autoPlay
          muted
          loop
          className={`${styles.video}`}
          id="vid3"
        >
          <source
            src="/images/imunoshop/Imuno Shop Vecera reel.mp4"
            type="video/mp4"
          />
        </video>
        <video
          playsInline
          width="15%"
          autoPlay
          muted
          loop
          className={`${styles.video}`}
          id="vid4"
        >
          <source
            src="/images/imunoshop/Imuno Shop - Zdrav rucak Reel.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className={styles.sectionPictures}>
        <Image
          src={"/images/joker/desna.webp"}
          alt="first pic"
          height={700}
          width={430}
          className={`${styles.heroicOne} grow`}
        />
        <Image
          src={"/images/joker/large.webp"}
          alt="first pic"
          height={700}
          width={530}
          className={`${styles.heroicTwo} grow`}
        />
        <div className={styles.sectionTravel}>
          <Image
            src={"/images/dib-travel/mobile1.webp"}
            alt="first pic"
            height={700}
            width={470}
            className={`${styles.sectionTravelOne} grow`}
          />
          <Image
            src={"/images/dib-travel/mobile2.webp"}
            alt="first pic"
            height={700}
            width={470}
            className={`${styles.sectionTravelTwo} grow`}
          />
          <Image
            src={"/images/dib-travel/mobile3.webp"}
            alt="first pic"
            height={700}
            width={470}
            className={`${styles.sectionTravelThree} grow`}
          />
        </div>
        <Image
          src={"/images/gogaudi/heroGogaudi.png"}
          alt="first pic"
          height={500}
          width={500}
          className={`${styles.heroicThree} grow`}
        />
        <Image
          src={"/images/gogaudi/heroGogaudi.png"}
          alt="first pic"
          height={800}
          width={800}
          className={`${styles.heroicFour} grow`}
        />
      </div>
      <div className={styles.sectionOne}>
        <Image
          src={"/images/gogaudi/heroGogaudi.png"}
          alt="first pic"
          height={500}
          width={500}
          className={`${styles.sectionHeroic}`}
        />
        <p id="heroicTextOne">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      <div className={styles.videoSectionTwo}>
        <video
          playsInline
          width="20%"
          autoPlay
          muted
          loop
          className={styles.video}
          id="v1"
        >
          <source src="/images/imunoshop/motion1.mp4" type="video/mp4" />
        </video>
        <video
          playsInline
          width="20%"
          autoPlay
          muted
          loop
          className={styles.video}
          id="v2"
        >
          <source src="/images/imunoshop/motion2.mp4" type="video/mp4" />
        </video>
        <video
          playsInline
          width="20%"
          autoPlay
          muted
          loop
          className={styles.video}
          id="v3"
        >
          <source src="/images/imunoshop/motion3.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.sectionThree}>
        <video
          playsInline
          width="100%"
          autoPlay
          muted
          loop
          className={styles.video}
        >
          <source src="/images/northprim/sprint.mp4" type="video/mp4" />
        </video>
      </div>
      {/* // First draft code - START // ------------------------------

      <div className={styles.first}>
        <div style={{ width: "50%", height: "100%", position: "relative" }}>
          <Image src={sections[0].image} alt="gogaudi hero pic" layout="fill" />
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.firstParagraph}>
            Pension is not the end. <br></br> It's a begining.
          </p>
          <h2 className={styles.firstHeading}>{sections[0].heading}</h2>
        </div>
      </div>
      <div className={styles.second}>
        <div style={{ width: "50%", height: "100%", position: "relative" }}>
          <VideoSection></VideoSection>
        </div>
        <div className={styles.textWrapperTwo}>
          <h2 className={styles.secondHeading}>{sections[1].heading}</h2>
          <p className={styles.secondParagraph}>
            One dedicated team for all your tech needs.
          </p>
        </div>
      </div>
      <div className={styles.third}>
        <p className={`${styles.imunoText} colorChanger`}>
          Your health is our priority
        </p>
        <div className={styles.mobiles} ref={ref}>
          <div className={`${styles.phone} phoneImage`}>
            <Image
              src="/images/imunoshop/Phone3.webp"
              alt="Phone mockup 3"
              width={306}
              height={625}
            />
          </div>
          <div className={`${styles.phone} phoneImage`}>
            <Image
              src="/images/imunoshop/Phone2.webp"
              alt="Phone mockup 2"
              width={329}
              height={673}
            />
          </div>
          <div className={`${styles.phone} phoneImage`}>
            <Image
              src="/images/imunoshop/Phone1.webp"
              alt="Phone mockup 1"
              width={291}
              height={713}
            />
          </div>
        </div>
        <div className={styles.imunoimage}>
          <Image
            src={"/images/imunoshop/Imuno-Logo.svg"}
            alt="imuno logo"
            width={600}
            height={100}
          />
        </div>
      </div>
      <div className={`${styles.fourth} fourth`}>
        <div style={{ width: "50%", height: "100%", position: "relative" }}>
          <Image
            src={"/images/zeder/web_bg.webp"}
            alt={"zeder main"}
            layout="fill"
          />
        </div>
        <div className={styles.rightPart}>
          <div className={styles.textWrapper}>
            <p>STEEL AND SAFETY GONE DIGITAL</p>
          </div>
        </div>
      </div>
      <div className={`${styles.fifth} fifth`}>
        <div className={styles.textWrapperFive}>
          <div className={`${styles.circleOne}`}>
            <Image
              src={"/images/klei/krug1.svg"}
              alt={"klei flower"}
              width={350}
              height={350}
              id="c-one"
            />
          </div>
          <div className={styles.circleTwo}>
            <Image
              src={"/images/klei/krug2.svg"}
              alt={"klei flower"}
              width={250}
              height={250}
            />
          </div>
          <div className={`${styles.circleThree} `}>
            <Image
              src={"/images/klei/krug3.svg"}
              alt={"klei flower"}
              width={150}
              height={150}
              id="c-three"
            />
          </div>
        </div>
        <div className={styles.textWrapperFive}>
          <Image
            src={"/images/klei/flower.webp"}
            alt={"klei flower"}
            width={500}
            height={800}
          />
        </div>
        <div className={styles.textWrapperFive}>
          <p>STEEL AND SAFETY GONE DIGITAL</p>
        </div>
      </div>
      <div className={`${styles.sixth} sixth`}></div>

      // First draft code - END // ------------------------------
      */}
    </div>
  );
}
