import { useRef, useEffect } from "react";
import styles from "@/styles/section-css/jove/Name.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Name() {
  const main = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".body", {
        y: 200,
      });
      gsap.to(".body", {
        scrollTrigger: {
          trigger: ".trigger",
          scrub: true,
        },
        y: 0,
      });
      gsap.set(".arm", {
        y: 200,
      });
      gsap.to(".arm", {
        scrollTrigger: {
          trigger: ".trigger",
          scrub: true,
        },
        y: 0,
      });
    }, main.current);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.Name} ref={main}>
      <div className="wrapper trigger">
        <div className={styles.rowWrap}>
          <div className={styles.circleWrap}>
            <div className={styles.circleOverflow}>
              <Image
                src="/images/jove/body.png"
                alt="art"
                width={700}
                height={578}
                className={`${styles.body} body`}
              />

              <div className={styles.circle}></div>
            </div>
            <Image
              src="/images/jove/arm.png"
              alt="art"
              width={700}
              height={578}
              className={`${styles.arm} arm`}
            />
          </div>
          <div className={styles.textBox}>
            <h2>Name/story</h2>
            <p>
              Why Jove then? Dating back to ancient civilizations, truffles are
              said to have been made by a thunderbolt hurled to earth by the
              father of the Roman gods - Jupiter himself. The bolt landed right
              by an oak tree and turned into truffles.
            </p>
            <p>
              Fun fact: in various sources, Jupiter is also known as Jove. So,
              we decided with the shorter (and sweeter) name.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Name;
