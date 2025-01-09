"use client";
import { useRef, useEffect } from "react";
import styles from "../Career.module.css";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CareerContent() {
  const positions = [
    {
      title: "3D artist",
      description:
        "If you are super skilled with 3D modelling we would love to meet you and talk about digital art.",
    },
    {
      title: "Performance Marketing Manager",
      description: `If you are experienced in digital marketing and are proficient in Google Ads campaigns as well as Google Analytics, join our team and start to achieve new levels of success. <a href="https://www.linkedin.com/jobs/view/4117121893/" target="_blank" >Click here to find out more.</a>`,
    },
    {
      title: "Developers",
      description:
        "There are many great developers out there, but we are looking for a special one who can join our team and bring more then we expect.",
    },
  ];

  const main = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".heading1", {
        duration: 1,
        opacity: 0,
        translateY: 100,
        scrollTrigger: {
          trigger: ".slide1",
          start: "top center",
          end: "bottom bottom",
          toggleActions: "restart none none none ",
          pin: ".wrap1",
        },
      });
      gsap.from(".heading2", {
        duration: 1,
        opacity: 0,
        translateY: 100,
        scrollTrigger: {
          trigger: ".slide2",
          start: "top center",
          end: "bottom bottom",
          toggleActions: "restart none none reverse ",
          pin: ".wrap2",
        },
      });

      gsap.from(".banner", {
        duration: 1,
        opacity: 0,
        y: 100,
        scrollTrigger: {
          trigger: ".banner",
          toggleActions: "restart none none reverse ",
        },
      });
    }, main.current);
    return () => ctx.revert(); // <- cleanup!
  }, []);
  return (
    <main ref={main} className={styles.Career}>
      <div className="wrapper">
        <div className={`${styles.slide1} slide1`}>
          <div className="wrap1">
            <h1 className={`${styles.heading1} heading1`}>
              We are always looking for a great talent. 👀
            </h1>
          </div>
        </div>
        <div className={`${styles.slide2} slide2`}>
          <div className="wrap2">
            <h2 className={`${styles.heading2} heading2`}>
              If you are the one show us what you got. 😎
            </h2>
          </div>
        </div>
        <Image
          src="/images/career-banner.webp"
          alt="Career banner image"
          width={1360}
          height={598}
          className={`${styles.banner} banner`}
        />
        <Image
          src="/images/career-banner-mobile.webp"
          alt="Career banner image"
          width={900}
          height={1359}
          className={`${styles.banner2} banner`}
        />
      </div>

      <div className={styles.positions}>
        <div className="wrapper">
          <h2 className={styles.heading}>Open positions:</h2>
          <div className={styles.list}>
            {positions &&
              positions.map((position, index) => {
                return (
                  <div key={index} className={styles.card}>
                    <div className={styles.overlay}></div>
                    <div className={styles.top}>
                      <p className={styles.tag}>positions</p>
                      <h3
                        className={`${styles.title} !text-[32px] leading-[1.2]`}
                      >
                        {position.title}
                      </h3>
                      <p
                        className={`${styles.description} positionDesc`}
                        dangerouslySetInnerHTML={{
                          __html: position.description,
                        }}
                      />

                      <Link
                        href={`mailto:studio@square43.com?subject=Submission for position - ${position.title}`}
                        className={styles.link}
                      >
                        apply{" "}
                        <div className={styles.icon}>
                          <Image
                            src="/images/arrow-white-r.svg"
                            alt="arrow icon right"
                            width={40}
                            height={40}
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </main>
  );
}
