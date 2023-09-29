import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import styles from "@/styles/section-css/ecom43/Fan.module.css";
import { fanAnimations } from "@/utils/animations/fans";

gsap.registerPlugin(ScrollTrigger);

function Fan() {
  const main = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      fanAnimations();
    }, main.current);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.Fan} ref={main}>
      <div className={`trigger ${styles.trigger}`}>
        <div className={styles.sticky}>
          <h2 className={`${styles.heading1} heading1`}>
            Unlimited e-com solutions
          </h2>
          <h2 className={`${styles.heading2} heading2`}>Powered by</h2>
          <div className={`${styles.fanWrap} fanwrap`}>
            <Image
              src="/images/fanbase.webp"
              alt="Fan base"
              width={564}
              height={428}
            />
            <Image
              className={styles.fan}
              src="/images/fan.webp"
              alt="Fan"
              width={378}
              height={378}
            />
            <Image
              className={styles.mesh}
              src="/images/mesh.webp"
              alt="Mesh"
              width={412}
              height={412}
            />
          </div>
          <Image
            className={`${styles.cpu} cpu`}
            src="/images/cpu1.webp"
            alt="CPU"
            width={200}
            height={200}
          />
          <div className={styles.linesWrap}>
            <div className="wrapper">
              <div className={styles.lines}>
                <div className={`left ${styles.left} ${styles.line}`}>
                  <div className={styles.lineFill}></div>
                </div>
                <div className={`center ${styles.center} ${styles.line}`}>
                  <div className={styles.lineFill}></div>
                </div>
                <div className={`right ${styles.right} ${styles.line}`}>
                  <div className={styles.lineFill}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fan;
