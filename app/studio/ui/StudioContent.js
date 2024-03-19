"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import styles from "../StudioContent.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function StudioContent() {
  const statements = [
    `<span class=${styles.gradientText}>Building is believing</span> 🙏 - and we&apos;ll build a bright future in front of you.`,
    `See your brand take its
        <span class=${styles.gradientText}>first breath.</span> 🐣`,
    `Word your <span class=${styles.gradientText}>copy well</span> 🔤
        - it speaks a thousand words.`,
    `Digital experience beyond your
        <span className={styles.lineThrough}>expectations</span>
        <span class=${styles.gradientText}>imagination.</span> 💭`,
    `Socialize and get in
        <span class=${styles.gradientText}>touch</span> 👉👈 with your
        audience.`,
    `Get your shop - there is a line in front, but
        <span class=${styles.gradientText}>you&apos;re next up!</span> 😀`,
    `Why go in circles? <br />
        Go
        <span class=${styles.gradientText}> Square (43)</span>`,
  ];
  const main = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();
      const dots = gsap.utils.toArray(".dot");
      const sections = gsap.utils.toArray(".section");

      dots.forEach((dot, index) => {
        tl.to(dot, {
          "--dot-height": "100%",
          scrollTrigger: {
            trigger: sections[index],
            scrub: true,
            start: "top top",
            end: "bottom 75%",
          },
        });
      });

      tl.to(".textWrap1", {
        scrollTrigger: {
          trigger: ".section1",
          scrub: true,
          start: "75% center",
          end: "bottom center",
        },
        opacity: 0,
        y: 250,
      });

      sections.forEach((section, index) => {
        if (index > 0 && index < sections.length - 1) {
          tl.set(`.textWrap${index + 1}`, {
            opacity: 0,
            y: -250,
          })
            .fromTo(
              `.textWrap${index + 1}`,
              {
                opacity: 0,
                y: -250,
              },
              {
                scrollTrigger: {
                  trigger: section,
                  scrub: true,
                  start: "top center",
                  end: "25% center",
                },
                opacity: 1,
                y: 0,
              }
            )
            .fromTo(
              `.textWrap${index + 1}`,
              {
                opacity: 1,
                y: 0,
              },
              {
                scrollTrigger: {
                  trigger: section,
                  scrub: true,
                  start: "75% center",
                  end: "bottom center",
                },
                opacity: 0,
                y: 250,
              }
            );
        }
      });

      tl.from(`.textWrap${statements.length}`, {
        scrollTrigger: {
          trigger: `.section${statements.length}`,
          scrub: true,
          start: "top center",
          end: "25% center",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: -250,
      });
    },
    { scope: main }
  );

  return (
    <div ref={main} className={styles.main}>
      {statements.map((statement, index) => (
        <div
          key={index}
          className={`${styles.section} section${index + 1} section`}
        >
          <div className={`${styles.textWrap} textWrap${index + 1}`}>
            <p
              className={styles.statement}
              dangerouslySetInnerHTML={{ __html: statement }}
            ></p>
          </div>
        </div>
      ))}

      <div className={styles.dotsWrapper}>
        <div className={styles.dots}>
          {statements.map((_, index) => (
            <div key={index} className={`${styles.dot} dot`}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
