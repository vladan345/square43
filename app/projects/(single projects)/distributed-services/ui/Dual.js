"use client";
import { useEffect, useRef } from "react";
import styles from "./styles/Dual.module.css";
import Lottie from "lottie-react";
import nodes from "public/images/distributed-services/nodes.json";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Dual() {
  const main = useRef(null);

  const interactivity = {
    actions: [
      {
        visibility: [0, 1.0],
        type: "play",
        frames: [0, 240],
      },
    ],
  };
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".wrap", {
        scrollTrigger: {
          trigger: ".trigger",
          start: "30% 70%",
          end: "bottom center",
          toggleActions: "play reverse restart reverse",
        },
        width: "calc(50vw - 40px)",
        duration: 0.7,
      });
      gsap.to(".moon, .earth", {
        scrollTrigger: {
          trigger: ".trigger",
          start: "30% 70%",
          end: "bottom center",
          toggleActions: "play reverse restart reverse",
        },
        opacity: 1,
        duration: 0.7,
      });

      gsap.to(".wrap2", {
        scrollTrigger: {
          trigger: ".trigger2",
          start: "30% 70%",
          end: "bottom center",
          toggleActions: "play reverse restart reverse",
        },
        width: "calc(50vw - 40px)",
        duration: 0.7,
      });
      gsap.to(".lottie", {
        scrollTrigger: {
          trigger: ".trigger2",
          start: "30% 70%",
          end: "bottom center",
          toggleActions: "play reverse restart reverse",
        },
        opacity: 1,
        duration: 0.7,
      });
    }, main.current);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className={styles.Dual} ref={main}>
        <div className={`trigger ${styles.trigger}`}>
          <div className={`${styles.imageWrap} wrap`}>
            <Image
              src="/images/distributed-services/earth.webp"
              alt="Earth"
              width={580}
              height={580}
              className="earth"
            />
            <Image
              src="/images/distributed-services/moon.webp"
              alt="Moon"
              width={58}
              height={58}
              className={`moon ${styles.moon}`}
            />
          </div>
          <div className="wrapper">
            <div className={styles.row}>
              <div className={styles.textBox}>
                <h3>Capture the essence</h3>
                <p>
                  The fact that there are hundreds of marketing agencies out
                  there did not discourage us. The key was in determining what
                  sets Distributed Services apart and place it in the foreground
                  of their new website: it is their ability to assemble the
                  perfect marketing team for clients across the globe!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`trigger2 ${styles.trigger}`}>
          <div className={`${styles.imageWrap} wrap2`}>
            <Lottie
              animationData={nodes}
              className={`${styles.lottie} lottie`}
              loop={false}
              autoplay={false}
              interactivity={interactivity}
            ></Lottie>
          </div>
          <div className="wrapper">
            <div className={styles.row}>
              <div className={styles.textBox}>
                <h3>New markets, new opportunities</h3>
                <p>
                  Entering new markets is always a challenge, but with the right
                  references and approach there is no reason to worry. Owing to
                  their noted success in London, Distributed Services is now
                  aiming to expand in Dubai, which is something we kept in mind
                  for inspiration throughout our design and development process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.DualMobile}>
        <div className={styles.pill}>
          <div className="wrapper">
            <div className={styles.column}>
              <div className="wrap">
                <Image
                  src="/images/distributed-services/earth.webp"
                  alt="Earth"
                  width={390}
                  height={390}
                  className="earth"
                />
                <Image
                  src="/images/distributed-services/moon.webp"
                  alt="Moon"
                  width={58}
                  height={58}
                  className={`moon ${styles.moon}`}
                />
              </div>
              <div className={styles.textBox}>
                <h3>Capture the essence</h3>
                <p>
                  The fact that there are hundreds of marketing agencies out
                  there did not discourage us. The key was in determining what
                  sets Distributed Services apart and place it in the foreground
                  of their new website: it is their ability to assemble the
                  perfect marketing team for clients across the globe!
                </p>
              </div>
              <Lottie
                animationData={nodes}
                className={`lottie`}
                loop={false}
                autoplay={false}
                interactivity={interactivity}
              ></Lottie>
            </div>
          </div>
        </div>
        <div className={styles.secondText}>
          <div className="wrapper">
            <h3>New markets, new opportunities</h3>
            <p>
              Entering new markets is always a challenge, but with the right
              references and approach there is no reason to worry. Owing to
              their noted success in London, Distributed Services is now aiming
              to expand in Dubai, which is something we kept in mind for
              inspiration throughout our design and development process.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dual;
