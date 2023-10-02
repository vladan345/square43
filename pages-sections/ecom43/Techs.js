import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import styles from "@/styles/section-css/ecom43/Techs.module.css";

gsap.registerPlugin(ScrollTrigger);

function Techs() {
  const data = [
    {
      title: "Next.js",
      text: "For all the latest features for full-stack web development.",
    },
    {
      title: "Three.js",
      text: "Our key tool for stunning 3D graphics.",
    },
    {
      title: "Shopify",
      text: "Foundation of your online shop, upgraded by Ecom43.",
    },
  ];
  const main = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".borders", {
        width: 0,
        height: 0,
      });
      gsap.to(".borders", {
        width: "calc(100% + 2px)",
        height: "calc(100% + 2px)",
        duration: 1,
        scrollTrigger: {
          trigger: ".techTrigger",
          start: "-20% center",
          end: window.innerHeight < 900 ? "top center" : "center center",
          toggleActions: "restart none reverse none",
        },
      });
    }, main.current);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.Techs} ref={main}>
      <div className="wrapper">
        <div className={`${styles.trigger} techTrigger`}>
          {data &&
            data.map((card, index) => {
              return (
                <div className={styles.cardWrap} key={index}>
                  <div className={`${styles.overlayT} borders`}></div>
                  <div className={`${styles.overlayB} borders`}></div>
                  <div className={`${styles.card}`}>
                    <Image
                      src={`/images/tech${index + 1}.svg`}
                      alt="tech icon"
                      width={200}
                      height={100}
                    />
                    <div>
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Techs;
