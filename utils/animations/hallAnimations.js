import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitType);

export const hallAnimations = () => {
  const images = gsap.utils.toArray(".grow");
  images.forEach((image) => {
    let imageHeight = image.offsetHeight;

    gsap.from(image, {
      scale: 0,
      scrollTrigger: {
        trigger: image,
        start: `${-imageHeight} bottom`,
        end: `bottom bottom`,
        ease: "ease",
        scrub: 0,
      },
    });
  });

  const myText = new SplitType("#hall");

  gsap.from(".char", {
    y: -150,
    stagger: 0.05,
    delay: 1,
    duration: 0.3,
  });
  gsap.to("#vid2", {
    y: 500,
    scrollTrigger: {
      trigger: "#vid2",
      stagger: 1,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
  gsap.to("#vid1", {
    y: -200,
    scrollTrigger: {
      trigger: "#vid2",
      stagger: 1,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
  gsap.to("#vid3", {
    y: 300,
    scrollTrigger: {
      trigger: "#vid2",
      stagger: 1,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
  gsap.to("#vid4", {
    y: -200,
    scrollTrigger: {
      trigger: "#vid2",
      stagger: 1,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.from("#v1", {
    x: "100%",
    opacity: 0,
    scrollTrigger: {
      trigger: "#v1",
      stagger: 1,
      start: "top 60%",
      end: "top 20%",
      scrub: true,
    },
  });
  gsap.from("#v2", {
    x: "100%",
    opacity: 0,
    scrollTrigger: {
      trigger: "#v2",
      stagger: 1,
      start: "top 60%",
      end: "top 20%",
      scrub: true,
    },
  });
  gsap.from("#v3", {
    x: "50%",
    opacity: 0,
    scrollTrigger: {
      trigger: "#v3",
      stagger: 1,

      start: "top 60%",
      end: "top 20%",
      scrub: true,
    },
  });
  gsap.fromTo(
    "#digi1",
    {
      x: 0,
      color: "white",
      opacity: 0,
      scrollTrigger: {
        trigger: "#vid1",
        stagger: 1,
        scrub: true,
        start: "50% 80%",
        end: "50% 50%",
      },
    },
    {
      x: 1000,
      y: 100,
      color: "blue",
      opacity: 1,
      scrollTrigger: {
        trigger: "#vid1",
        stagger: 1,
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    "#digi2",
    {
      x: 0,
      color: "white",
      opacity: 0,
      scrollTrigger: {
        trigger: "#vid1",
        stagger: 1,
        scrub: true,
        start: "60% 85%",
        end: "50% 60%",
      },
    },
    {
      x: 1000,
      y: 100,
      color: "blue",
      opacity: 1,
      scrollTrigger: {
        trigger: "#vid1",
        stagger: 1,
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    "#digi3",
    {
      x: 0,
      color: "white",
      opacity: 0,
      scrollTrigger: {
        trigger: "#vid1",
        stagger: 1,
        scrub: true,
        start: "70% 90%",
        end: "50% 70%",
      },
    },
    {
      x: 1000,
      y: 100,
      color: "blue",
      opacity: 1,
      scrollTrigger: {
        trigger: "#vid1",
        stagger: 1,
        scrub: true,
      },
    }
  );
};
