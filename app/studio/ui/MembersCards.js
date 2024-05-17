"use client";
import React from "react";
import Image from "next/image";
import styles from "./styles/MembersCards.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useState, useRef } from "react";

export default function MembersCards() {
  const employees = [
    {
      name: "Nikola Tomović",
      img: "/images/dzoni.png",
      title: "CEO & Founder",
    },
    {
      name: "Vidan Dojčinović",
      img: "/images/vidan.png",
      title: "Marketing Director",
    },
    {
      name: "Marko Živanović",
      img: "/images/marko.png",
      title: "Art Director",
    },
    {
      name: "Vladimir Stojanović",
      img: "/images/vladimir.png",
      title: "Digital Designer",
    },
    {
      name: "Ilija Vidaković",
      img: "/images/ilija.png",
      title: "Graphic & Motion Designer",
    },
    {
      name: "Nina Đukić",
      img: "/images/nina.png",
      title: "Senior Content Writer",
    },
    {
      name: "Vladan Marković",
      img: "/images/vladan.png",
      title: "Lead Frontend Developer",
    },
    {
      name: "Đulian Bogdan",
      img: "/images/julian.png",
      title: "Frontend Developer",
    },
    {
      name: "Natalija Jevtić",
      img: "/images/natalija.png",
      title: "PR Little",
    },
    {
      name: "Mlađana Crnković",
      img: "/images/maya.png",
      title: "Boss/Artist",
    },
  ];

  const splideRef = useRef(null);
  const [current, setCurrent] = useState(1);

  const handleNextSlide = () => {
    if (splideRef.current) {
      splideRef.current.splide.go(">");
    }
  };

  const handlePrevSlide = () => {
    if (splideRef.current) {
      splideRef.current.splide.go("<");
    }
  };

  return (
    <div className={styles.membersCards}>
      <div className={`${styles.slider}`} aria-label="Slides">
        <Splide
          options={{
            breakpoints: {
              640: {
                destroy: true,
              },
            },
            type: "loop",
            focus: "center",
            autoWidth: true,
            autoHeight: true,
            speed: 1500,
            arrows: true,
            pagination: false,
            gap: "-25px",
            updateOnMove: true,
            arrows: false,
            waitForTransition: false,
          }}
          ref={splideRef}
        >
          {employees.map((element, i) => {
            return (
              <SplideSlide className={styles.singleCard} key={i}>
                <Image
                  src={element.img}
                  alt="employee"
                  width={370}
                  height={370}
                  className={styles.employeeImage}
                />
                <div className={styles.textContainer}>
                  <div className={styles.name}>{element.name}</div>
                  <div className={styles.title}>{element.title}</div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>

        <div className={styles.sliderGradient}></div>

        <div className={`${styles.splide__arrows} splide__arrows`}>
          <button
            onClick={() => {
              handlePrevSlide();
              setCurrent(current === 1 ? 10 : current - 1);
            }}
            className="splide__arrow splide__arrow--prev"
          >
            <Image
              src={"/images/arrow.svg"}
              width={40}
              height={40}
              alt="arrow prev"
              className={styles.arrowPrev}
            />
          </button>
          <div className={styles.betweenArrows}>
            {current} / {employees.length}
          </div>
          <button
            onClick={() => {
              handleNextSlide();
              setCurrent(current === 9 ? 1 : current + 1);
            }}
            className="splide__arrow splide__arrow--next"
          >
            <Image
              src={"/images/arrow.svg"}
              width={40}
              height={40}
              alt="arrow next"
            />
          </button>
        </div>
      </div>

      <div className={styles.mobileSlider}>
        {employees.map((element, i) => {
          return (
            <div className={styles.singleCard} key={i}>
              <Image
                src={element.img}
                alt="employee"
                width={370}
                height={370}
                className={styles.employeeImage}
              />
              <div className={styles.textContainer}>
                <div className={styles.name}>{element.name}</div>
                <div className={styles.title}>{element.title}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.conclusion}>
        <h3>We do not cherish hierarchy.</h3>
        <p>
          In a studio, we are all board of directors. Every single member's
          opinion and time is equally valued.
        </p>
      </div>
    </div>
  );
}
