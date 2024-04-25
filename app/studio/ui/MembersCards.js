"use client";
import React from "react";
import Image from "next/image";
import styles from "./styles/MembersCards.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function MembersCards(id) {
  const employees = [
    {
      name: "Nikola Tomović",
      img: "/images/vladimir.png",
      title: "CEO & Founder",
    },
    {
      name: "Vidan Dojčinović",
      img: "/images/vladimir.png",
      title: "Marketing Director",
    },
    {
      name: "Marko Živanović",
      img: "/images/vladimir.png",
      title: "Art Director",
    },
    {
      name: "Vladimir Stojanović",
      img: "/images/vladimir.png",
      title: "Digital Designer",
    },
    {
      name: "Ilija Vidaković",
      img: "/images/vladimir.png",
      title: "Graphic & Motion Designer",
    },
    {
      name: "Nina Đukić",
      img: "/images/vladimir.png",
      title: "Senior Content Writer",
    },
    {
      name: "Vladan Marković",
      img: "/images/vladimir.png",
      title: "Lead Frontend Developer",
    },
    {
      name: "Đulian Bogdan",
      img: "/images/vladimir.png",
      title: "Frontend Developer",
    },
    { name: "Natalija Jevtić", img: "/images/vladimir.png", title: "Lil' PR" },
  ];
  return (
    <div className={styles.membersCards}>
      <div className={styles.slider} aria-label="Slides">
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
          }}
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
