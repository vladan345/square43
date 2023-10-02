import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const fanAnimations = () => {
  gsap.to(".fanwrap", {
    y: window.innerWidth < 900 ? "-=230%" : "-=170%",
    scrollTrigger: {
      trigger: ".trigger",
      scrub: true,
      start: "25% bottom",
      end: "40% top",
    },
  });
  gsap.to(".heading1", {
    y: "-100%",
    opacity: 0,
    scrollTrigger: {
      trigger: ".trigger",
      scrub: true,
      start: "25% bottom",
      end: "25% top",
    },
  });
  gsap.to(".heading2", {
    y: "-100%",
    opacity: 1,
    scrollTrigger: {
      trigger: ".trigger",
      scrub: true,
      start: "35% bottom",
      end: "35% top",
    },
  });
  gsap.to(".cpu", {
    width: 300,
    height: 300,
    scrollTrigger: {
      trigger: ".trigger",
      scrub: true,
      start: "20% bottom",
      end: "80% top",
    },
  });
  gsap.to([".left", ".right"], {
    width: "33.3333%",
    scrollTrigger: {
      trigger: ".trigger",
      scrub: true,
      start: "40% bottom",
      end: "60% top",
    },
  });
  gsap.to([".left", ".right"], {
    height: "100%",
    scrollTrigger: {
      trigger: ".trigger",
      scrub: true,
      start: "70% bottom",
      end: "80% top",
    },
  });
  gsap.to(".center", {
    height: "100%",
    scrollTrigger: {
      trigger: ".trigger",
      scrub: true,
      start: "40% bottom",
      end: "80% top",
    },
  });
};
