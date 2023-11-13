import { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/section-css/klei/Logo.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Logo() {
  const main = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".glina", {
        left: 0,
        opacity: 1,
        duration: 0.7,
        scrollTrigger: {
          trigger: ".wrapper",
          start: "center bottom",
        },
      });
      gsap.to(".structure", {
        y: 0,
        opacity: 1,
        duration: 0.7,
        scrollTrigger: {
          trigger: ".branding",
          start: "center bottom",
        },
      });

      gsap.to(".logo", {
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".grid",
          start: "center bottom",
        },
      });
      gsap.to(".waveImage", {
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".waves",
          start: "center bottom",
        },
      });
    }, main.current);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={main}>
      <section className={styles.Logo}>
        <div className={`wrapper ${styles.name}`}>
          <div className={styles.textBox}>
            <h2>Name & Story</h2>
            <p>
              Sit nunc gravida neque arcu iaculis morbi nisl. Turpis fringilla
              cras nunc eleifend. Ante ornare pellentesque eu enim vehicula
              donec. Nisl sed pretium non quam vitae. Urna est varius facilisis
              morbi sed venenatis vitae dui. Quis facilisis quis et donec.
            </p>
            <p>
              Faucibus pharetra sodales urna porttitor ornare scelerisque.
              Facilisis fringilla lacus semper at quam varius turpis. Dolor
              tristique sit eget vulputate leo id. Amet turpis sem quis amet.
              Leo tellus senectus egestas et nisl in risus. A eu pharetra ac id
              pulvinar vitae a porttitor.
            </p>
          </div>
        </div>
        <Image
          src="/images/klei/glina.webp"
          alt="Clay tools"
          width={1080}
          height={760}
          className="glina"
        />
      </section>
      <section className={styles.Branding}>
        <div className="wrapper branding">
          <div className={styles.flex}>
            <div className={styles.textBox}>
              <h2>Logo & Branding</h2>
              <p className={styles.subheading}>LOGO DESIGN</p>
              <p className={styles.paragraph}>
                Auctor tincidunt in eros vitae. Laoreet dictum consectetur
                bibendum cursus sed consectetur. Donec amet nulla velit tempus.
                Sodales dui nulla sagittis odio vitae ac. Elementum ultrices
                scelerisque quis sagittis faucibus phasellus sit eget. Euismod
                suspendisse facilisi proin consequat amet tellus a pulvinar at.
                Fusce enim urna vel ultricies lorem. Risus ultrices at duis
                vitae at non non sapien. At rutrum.
              </p>
            </div>
            <div className={styles.imageWrap}>
              <Image
                src="/images/klei/logo_branding.webp"
                alt="Logo structure"
                width={800}
                height={525}
                className="structure"
              />
            </div>
          </div>
        </div>
        <div className={`wrapper grid ${styles.wrapperGrid}`}>
          <div className={styles.grid}>
            <Image
              src="/images/klei/logo1.svg"
              alt="Logo usage"
              width={680}
              height={360}
              className={`${styles.logo} logo`}
            />
            <Image
              src="/images/klei/logo2.svg"
              alt="Logo usage"
              width={680}
              height={360}
              className={`${styles.logo} logo`}
            />
            <Image
              src="/images/klei/logo3.svg"
              alt="Logo usage"
              width={680}
              height={360}
              className={`${styles.logo} logo`}
            />
            <Image
              src="/images/klei/logo4.svg"
              alt="Logo usage"
              width={680}
              height={360}
              className={`${styles.logo} logo`}
            />
          </div>
          <div className={styles.gridText}>
            <p className={styles.subheading}>branding application</p>
            <div className={styles.row}>
              <p>
                Venenatis turpis augue sed viverra lectus ultrices. Consectetur
                phasellus fringilla nunc libero sed. Amet pharetra gravida
                viverra malesuada vestibulum volutpat. Nisl sed auctor a semper
                lacinia in sem.
              </p>

              <p>
                Mauris ac maecenas sit amet. Amet id tincidunt amet semper nulla
                mus. Consectetur lorem lorem enim et. Varius donec ultricies
                venenatis ultrices sit ornare. Condimentum at amet aliquam
                nulla. Cursus amet.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.waves} waves`}>
        <div className={`${styles.waveWrapper} wrapper`}>
          <div className={styles.mobileWave}>
            <Image
              src="/images/klei/mobileWave1.webp"
              alt="Mockup Klei"
              width={640}
              height={513}
              className="waveImage"
            />
            <Image
              src="/images/klei/mobileWave2.webp"
              alt="Mockup Klei"
              width={640}
              height={636}
              className="waveImage"
            />
            <Image
              src="/images/klei/mobileWave3.webp"
              alt="Mockup Klei"
              width={640}
              height={671}
              className="waveImage"
            />
            <Image
              src="/images/klei/mobileWave4.webp"
              alt="Mockup Klei"
              width={640}
              height={700}
              className="waveImage"
            />
          </div>
          <div className={styles.rowImages}>
            <Image
              src="/images/klei/grid1.webp"
              alt="Mockup Klei"
              width={720}
              height={575}
              className="waveImage"
            />
            <Image
              src="/images/klei/grid2.webp"
              alt="Mockup Klei"
              width={560}
              height={705}
              className="waveImage"
            />
          </div>
          <div className={styles.rowImages}>
            <Image
              src="/images/klei/grid3.webp"
              alt="Mockup Klei"
              width={640}
              height={644}
              className="waveImage"
            />
            <Image
              src="/images/klei/grid4.webp"
              alt="Mockup Klei"
              width={640}
              height={520}
              className="waveImage"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
