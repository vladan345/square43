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

    const width = trigger.current.offsetWidth;
    const height = window.innerHeight;

    const frameCount = 147;
    trigger.current.style.height = `${frameCount * 5}vh`;

    const currentFrame = (index) =>
      `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(
        index + 1
      )
        .toString()
        .padStart(4, "0")}.jpg`;
    const images = [];
    const airpods = {
      frame: 0,
    };
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }
    console.log(images);
    gsap.to(airpods, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: ".trigger",
        scrub: 0.5,
        markers: true,
      },
      onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
    });

    images[0].onload = render;

    function render() {
      const imageAspect =
        images[airpods.frame].width / images[airpods.frame].height;
      const canvasAspect = canvas.current.width / canvas.current.height;
      let scale, x, y;

      if (imageAspect >= canvasAspect) {
        // Image is wider than the canvas
        scale = canvas.current.height / images[airpods.frame].height;
        x = (canvas.current.width - images[airpods.frame].width * scale) / 2;
        y = 0;
      } else {
        // Image is taller than the canvas
        scale = canvas.current.width / images[airpods.frame].width;
        x = 0;
        y = (canvas.current.height - images[airpods.frame].height * scale) / 2;
      }
      console.log(images[airpods.frame].width);
      context.clearRect(0, 0, canvas.current.width, canvas.current.height);
      context.drawImage(
        images[airpods.frame],
        x,
        y,
        images[airpods.frame].width * scale,
        images[airpods.frame].height * scale
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
