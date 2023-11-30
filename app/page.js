"use client";
import React, { useEffect, useState, useRef } from "react";

import Hero from "./ui/Hero";
import Philosophy from "./ui/Philosophy";
import OurServices from "./ui/OurServices";
import More from "./ui/More";
import Project from "./ui/Project";
import Contact from "./ui/Contact";
import Square from "@/components/Square";

import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const [state, setState] = useState(1);
  const main = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".section");
      sections.forEach((section, i) => {
        gsap.to(section, {
          scrollTrigger: {
            start: "-30% top",
            end: "70% top",
            trigger: section,
            onToggle: (self) => self.isActive && setState(i + 1),
          },
        });
      });
    }, main.current);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <main ref={main}>
        <div className="section">
          <Hero />
        </div>
        <div className="section">
          <Philosophy />
        </div>
        <div className="section">
          <OurServices />
        </div>
        <div className="section">
          <More />
        </div>
        <div className="section">
          <Project />
        </div>
        <div className="section">
          <Contact />
        </div>
      </main>

      <Square image="/square-temp.webp" height={560} state={state} />
    </div>
  );
}
