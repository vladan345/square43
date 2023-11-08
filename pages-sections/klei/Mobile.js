import { useRef, useEffect } from "react";
import styles from "@/styles/section-css/klei/Mobile.module.css";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Mobile() {
  const main = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".middlePhone", {
        margin: "0 -140px",
        duration: 1,
        scrollTrigger: {
          trigger: ".wrapper",
          start: "center bottom",
        },
      });
    }, main.current);

    return () => ctx.revert();
  }, []);
  return (
    <section className={styles.Mobile} ref={main}>
      <div className="wrapper">
        <div className={styles.row}>
          <div className={styles.imageWrap}>
            <Image
              src="/images/klei/mobile1.webp"
              alt="Mobile Screen Klei"
              width={400}
              height={775}
            />
            <Image
              src="/images/klei/mobile2.webp"
              alt="Mobile Screen Klei"
              width={360}
              height={696}
              className="middlePhone"
            />
            <Image
              src="/images/klei/mobile3.webp"
              alt="Mobile Screen Klei"
              width={320}
              height={620}
            />
          </div>
          <p>
            Sagittis morbi molestie augue lacus at viverra dolor. Diam tristique
            id pulvinar nisi quis dictum lacus magna adipiscing. Et venenatis
            elementum nunc vestibulum id semper at. Vitae ac mollis imperdiet
            tortor netus facilisis lorem. Tempus pharetra ornare eget enim purus
            cras non. Sit turpis sapien curabitur tristique.
          </p>
        </div>
      </div>
    </section>
  );
}
