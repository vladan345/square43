"use client";
import React, { useRef } from "react";
import styles from "./styles/Brand.module.css";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Brand() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".imageLeft", {
        x: -200,
        opacity: 0,
        scrollTrigger: {
          trigger: ".imageLeft",
          start: "top center",
          end: "bottom center",
          scrub: true,
          stagger: 1,
        },
      });

      gsap.from(".imageRight", {
        x: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: ".imageLeft",
          start: "top center",
          end: "bottom center",
          scrub: true,
          stagger: 1,
        },
      });

      gsap.from(".brandLeftContainer", {
        x: -200,
        opacity: 0,
        scrollTrigger: {
          trigger: ".brandLeft",
          start: "top 80%",
          end: "top center",
          scrub: true,
          stagger: 1,
        },
      });

      gsap.from(".brandRight", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".brandLeft",
          start: "top 60%",
          end: "bottom center",
          scrub: true,
          stagger: 1,
        },
      });

      gsap.from(".brandNameContainer", {
        x: -200,
        opacity: 0,
        scrollTrigger: {
          trigger: ".brandName",
          start: "top 80%",
          end: "top center",
          scrub: true,
          stagger: 1,
        },
      });

      gsap.from(".brandContent", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".brandName",
          start: "top 60%",
          end: "bottom center",
          scrub: true,
          stagger: 1,
        },
      });

      gsap.set(".borders", {
        width: 0,
        height: 0,
      });
      gsap.to(".borders", {
        width: "calc(100% + 2px)",
        height: "calc(100% + 2px)",
        duration: 1,
        scrollTrigger: {
          trigger: ".techTrigger",
          start: "top center",
          end: window.innerHeight < 900 ? "top center" : "center center",
          toggleActions: "restart none reverse none",
        },
      });

      gsap.set(".verticalT", { height: 0 });
      gsap.set(".verticalB", { height: 0 });
      gsap.set(".horizontalL", { width: 0 });
      gsap.set(".horizontalR", { width: 0 });

      gsap.to(".verticalT", {
        height: "100%",
        duration: 1,
        scrollTrigger: {
          trigger: ".techTrigger",
          start: "-20% center",
          end: window.innerHeight < 900 ? "top center" : "center center",
          toggleActions: "restart none reverse none",
        },
      });
      gsap.to(".verticalB", {
        height: "100%",
        duration: 1,
        scrollTrigger: {
          trigger: ".techTrigger",
          start: "-20% center",
          end: window.innerHeight < 900 ? "top center" : "center center",
          toggleActions: "restart none reverse none",
        },
      });
      gsap.to(".horizontalL", {
        width: "100%",
        duration: 1,
        scrollTrigger: {
          trigger: ".techTrigger",
          start: "-20% center",
          end: window.innerHeight < 900 ? "top center" : "center center",
          toggleActions: "restart none reverse none",
        },
      });
      gsap.to(".horizontalR", {
        width: "100%",
        duration: 1,
        scrollTrigger: {
          trigger: ".techTrigger",
          start: "-20% center",
          end: window.innerHeight < 900 ? "top center" : "center center",
          toggleActions: "restart none reverse none",
        },
      });
    },
    { scope: container.current }
  );

  return (
    <div ref={container}>
      <div className={styles.brand}>
        <div className={` ${styles.brandName} brandName`}>
          <div className={` ${styles.brandNameContainer} brandNameContainer`}>
            <h3>Behind the Brand</h3>
            <p>Mistakes had been made</p>
          </div>
        </div>
        <div className={` ${styles.brandContent} brandContent`}>
          <p>
            In 2012, our founder NT opened an agency with a couple of his
            friends. With the right amount of peer pressure, he agreed to name
            the agency NUL Apps.
          </p>
          <p>
            In 2023, it was high time for a rebrand, the first thought being: we
            need a new name.
          </p>
        </div>
      </div>

      <div className={styles.squareVisualExplanation}>
        <div className={styles.squareContainerLeft}>
          <div className={` ${styles.inner} techTrigger`}>
            <div className={`${styles.overlayT} borders`}></div>
            <div className={`${styles.overlayB} borders`}></div>
            <div className={styles.innerGradientContainer}>
              <div className={styles.innerGradient}></div>
            </div>
          </div>
          <div className={`${styles.horizontalLine} horizontalL`}></div>
        </div>
        <div className={styles.squareContainerMiddle}>
          <div className={` ${styles.innerTop} techTrigger`}>
            <div className={`${styles.overlayT} borders`}></div>
            <div className={`${styles.overlayB} borders`}></div>
            <div className={styles.innerTopContainer}>
              <p>Why Square?</p>
            </div>
          </div>
          <div
            className={`${styles.verticalLine} ${styles.verticalLineMobile} verticalT`}
          ></div>
          <div className={`${styles.mobile}`}>
            <div className={`${styles.overlayT} borders`}></div>
            <div className={`${styles.overlayB} borders`}></div>
            <div className={styles.innerGradientContainer}>
              <div className={styles.innerGradient}></div>
            </div>
          </div>
          <div className={`${styles.verticalLine} verticalT`}></div>
          <div className={styles.innerMiddleContainer}>
            <div className={`${styles.overlayT} borders`}></div>
            <div className={`${styles.overlayB} borders`}></div>
            <div className={styles.innerMiddle}>
              <Image
                src={"/images/43black.svg"}
                width={400}
                height={400}
                alt="43"
                className={styles.logo}
              />
            </div>
          </div>

          <div
            className={` ${styles.verticalLine} ${styles.verticalLineMobile} verticalB`}
          ></div>
          <div className={`${styles.mobile}`}>
            <div className={`${styles.overlayT} borders`}></div>
            <div className={`${styles.overlayB} borders`}></div>
            <div className={styles.innerGradientContainer}>
              <p>43</p>
            </div>
          </div>
          <div className={` ${styles.verticalLine} verticalB`}></div>
          <div className={styles.innerBottom}>
            <div className={`${styles.overlayT} borders`}></div>
            <div className={`${styles.overlayB} borders`}></div>
            <div className={styles.innerBottomContainer}>
              <p>Why 43?</p>
            </div>
          </div>
        </div>
        <div className={styles.squareContainerRight}>
          <div className={` ${styles.inner} techTrigger`}>
            <div className={`${styles.overlayT} borders`}></div>
            <div className={`${styles.overlayB} borders`}></div>
            <div className={styles.innerGradientContainer}>
              <p>43</p>
            </div>
          </div>
          <div className={` ${styles.horizontalLine} horizontalR`}></div>
        </div>
      </div>

      <div className={styles.brandOrigin}>
        <div className={` ${styles.brandLeft} brandLeft`}>
          <div className={` ${styles.brandLeftContainer} brandLeftContainer`}>
            <p>Long story short: we saw a sign.</p>
            <p>Literally.</p>
          </div>
        </div>
        <div className={` ${styles.brandRight} brandRight`}>
          <p>
            As we were leaving our office building afer another name
            brainstorming session, our gaze fell on a simple sign on the
            building wall:
          </p>
        </div>
      </div>

      <div className={styles.squareOrigin}>
        <Image
          src={"/images/Znak 2.png"}
          width={980}
          height={257}
          alt="znak1"
          className={`${styles.imageLeft} imageLeft`}
        />
        <Image
          src={"/images/Znak 1.png"}
          width={300}
          height={257}
          alt="znak2"
          className={`${styles.imageRight} image`}
        />
      </div>
    </div>
  );
}
