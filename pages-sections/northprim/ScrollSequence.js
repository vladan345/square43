import React, { useEffect, useRef } from "react";
// import { ScrollContainer, SequenceSection } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";
import fallBack from "./assets/1.jpg"; // eslint-disable-line no-unused-vars
import { imagesSeq } from "../../../../../utils/constants/northprimSeq";
import "./ScrollSequence.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ScrollSequence() {
  const canvas = useRef(null);
  useEffect(() => {
    const context = canvas.current.getContext("2d");

    canvas.current.width = 1920;
    canvas.current.height = 1080;

    const frameCount = 300;

    const images = [];
    const airpods = {
      target: canvas.current,
      frame: 0,
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = imagesSeq[i];
      images.push(img);
    }

    gsap.to(airpods, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        target: ".ScrollSequence",
        scrub: 0.5,
      },
      onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
    });
    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[airpods.frame], 0, 0);
    }
  }, []);

  return (
    <div className="ScrollSequence">
      {/* <ScrollContainer>
        <SequenceSection
          end="300%"
          imagesPath="/image-seq"
          imagesCount={300}
          imagesType="jpg"
        />
      </ScrollContainer> */}
      {/* <img src={fallBack} alt="fall back iamge for sequence" /> */}
      <canvas id="hero-lightpass" ref={canvas} />
    </div>
  );
}

export default ScrollSequence;
