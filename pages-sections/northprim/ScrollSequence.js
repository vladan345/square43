import { useEffect, useRef, useState } from "react";
import styles from "../../styles/section-css/northprim/ScrollSequence.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function ScrollSequence() {
  const canvas = useRef(null);
  const trigger = useRef(null);
  useEffect(() => {
    const context = canvas.current.getContext("2d");
    const width = window.innerWidth;
    const height = (width / 16) * 9;

    canvas.current.width = width;
    canvas.current.height = height;

    const frameCount = 301;
    trigger.current.style.height = `${frameCount * 2}vh`;

    const images = [];
    const sequence = {
      frame: 0,
    };
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = `/images/northprim-seq/${i + 1}.webp`;
      images.push(img);
    }
    gsap.to(sequence, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: ".trigger",
        scrub: true,
        start: `${window.innerHeight}px bottom`,
        end: `bottom bottom`,
      },
      onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
    });

    images[0].onload = render;
    console.log(width / 2 - images[0].width / 2);
    function render() {
      context.clearRect(0, 0, canvas.current.width, canvas.current.height);
      context.drawImage(
        images[sequence.frame],
        canvas.current.width / 2 - width / 2,
        canvas.current.height / 2 - height / 2,
        width,
        height
      );
    }
  }, []);

  return (
    <div className={styles.ScrollSequence}>
      <div className={`${styles.trigger} trigger`} ref={trigger}>
        <div className={styles.canvasWrap}>
          <canvas className={styles.canvas} ref={canvas}></canvas>
        </div>
      </div>
      {/* <video playsInline className={styles.video} autoPlay muted loop>
        <source src="/images/northprim/webLaptop.mp4" type="video/mp4" />
      </video> */}
    </div>
  );
}

export default ScrollSequence;
