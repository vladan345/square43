"use client";
import React from "react";
import Image from "next/image";
import styles from "./styles/MembersCards.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useState, useRef } from "react";

export default function MembersCards(id) {
  const employees = [
    {
      num: 1,
      name: "Nikola Tomović",
      img: "/images/vladimir.png",
      title: "CEO & Founder",
    },
    {
      num: 2,
      name: "Vidan Dojčinović",
      img: "/images/vladimir.png",
      title: "Marketing Director",
    },
    {
      num: 3,
      name: "Marko Živanović",
      img: "/images/vladimir.png",
      title: "Art Director",
    },
    {
      num: 4,
      name: "Vladimir Stojanović",
      img: "/images/vladimir.png",
      title: "Digital Designer",
    },
    {
      num: 5,
      name: "Ilija Vidaković",
      img: "/images/vladimir.png",
      title: "Graphic & Motion Designer",
    },
    {
      num: 6,
      name: "Nina Đukić",
      img: "/images/vladimir.png",
      title: "Senior Content Writer",
    },
    {
      num: 7,
      name: "Vladan Marković",
      img: "/images/vladimir.png",
      title: "Lead Frontend Developer",
    },
    {
      num: 8,
      name: "Đulian Bogdan",
      img: "/images/vladimir.png",
      title: "Frontend Developer",
    },
    {
      num: 9,
      name: "Natalija Jevtić",
      img: "/images/vladimir.png",
      title: "PR Little",
    },
  ];

  const splideRef = useRef(null);

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
            type: "loop",
            focus: "center",
            autoWidth: true,
            autoHeight: true,
            speed: 1500,
            arrows: true,
            pagination: false,
            gap: "-80px",
            updateOnMove: true,
            arrows: false,
            waitForTransition: false,

            onMove: (splide) => setCurrentSlide(splide.i + 1),
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
            onClick={handlePrevSlide}
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
          <div className={styles.betweenArrows}>1 / {employees.length}</div>
          <button
            onClick={handleNextSlide}
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
