"use client";
import styles from "./HallOfFame.module.css";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { hallAnimations } from "@/utils/animations/hallAnimations";

export default function page() {
  const container = useRef();

  useGSAP(hallAnimations, { scope: container });

  return (
    <div className={styles.main} ref={container}>
      <div className={styles.clientsWrapper}>
        <p className={`${styles.clients} digital`} id="digi1">
          DIGITAL
        </p>
        <p className={`${styles.clients} digital`} id="digi2">
          CREATIVE
        </p>
        <p className={`${styles.clients} digital`} id="digi3">
          STUDIO
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
    </div>
  );
}
