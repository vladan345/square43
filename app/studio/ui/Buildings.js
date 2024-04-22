"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "./styles/Buildings.module.css";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Buildings() {
  const container = useRef();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  useGSAP(
    () => {
      gsap.from(".conclusion", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".conclusion",
          start: "top 60%",
          end: "bottom center",
          stagger: 1,
          scrub: true,
        },
      });
    },
    { scope: container.current }
  );

  return (
    <div ref={container} className={styles.buildings}>
      <div className={` ${styles.conclusion} `}>
        <h2 className="conclusion">It suddenly made sense.</h2>
        <p className="conclusion">
          Squares or blocks of identical appearence are symbols of New Belgrade
        </p>
        <div className={styles.buildingGradientWrapper}>
          <div
            className={styles.buildingWrapper}
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #0ff, #7000ff, #353535 80%)`,
            }}
          >
            <Image
              src={"/images/Zgrada.png"}
              alt="zgrada"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100vw", height: "auto" }}
            />
          </div>
          <div className={styles.buildingGradient}></div>
        </div>
        <div className={styles.underBuildings}>
          <p>
            On top of that, a square is a meeting point of multiple cross-roads,
            where you can meet and greet or miss and lose!
          </p>
        </div>
      </div>
    </div>
  );
}
