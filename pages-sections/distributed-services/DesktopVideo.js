import { useEffect, useRef } from "react";
import styles from "styles/section-css/distributed-services/DesktopVideo.module.css";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function DesktopVideo() {
  const main = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".stripe", {
        scrollTrigger: {
          trigger: ".trigger",
          start: "50% bottom",
        },
        width: "100%",
        duration: 1.3,
      });
    }, main.current);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.DesktopVideo} ref={main}>
      <div className={`${styles.trigger} trigger`}>
        <div className={`${styles.stripe} stripe`}></div>
        <div className="wrapper">
          <div className={styles.videoWrapper}>
            <Image
              src="/images/distributed-services/video-mockup.png"
              alt="Dekstop mockup"
              width={1271}
              height={874}
            />
            <video className={styles.video} playsInline muted autoPlay loop>
              <source
                src="/images/distributed-services/presentation.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div className={styles.textBox}>
        <div className="wrapper">
          <div className={styles.row}>
            <p>
              Without overwhelming the visitor with text and information all at
              once, it was still necessary to communicate several key aspects:
              the breadth of services, reliability built on satisfied customers
              and clear illustrations of previous projects.
            </p>
            <p>
              We made sure to separate these sections clearly without
              sacrificing crucial textual information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopVideo;
