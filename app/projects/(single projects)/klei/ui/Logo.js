"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./styles/Logo.module.css";

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
      gsap.to(".waveImageM", {
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".waves",
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
              Though it's impossible to rank brand elements according to their
              importance, we were well-aware that the name had to be the first
              step, which would then set the tone for the rest of our creative
              process.
            </p>
            <p>
              Klei - as a phonetic play on clay as the main building element -
              immediately stood out as the founders' favorite and immediately
              inspired the rest of our creative choices. The narrative behind
              the brand flowed naturally as we placed special emphasis on the
              celebration of nature, earth and the unique craft of pottery.
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
                We are incredibly proud of this one! In an optimal scenario, a
                brand's logo should reflect its essence and, ideally, help users
                make the right association regarding the brand's services or
                products. By combining basic geometric shapes, which stand for
                pottery items, Klei Works has a unique logo which is definitely
                easily recognizable.
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
                While designing the logo, we made sure to anticipate its use,
                beyond mere identification. The way we envisioned it, our logo
                solution offers a diverse use in branding products as an
                understated, but effective final touch to already invaluable
                pottery creations.
              </p>

              <p>
                As shown in the picture above, we offered two different versions
                of the logo, one of which contains the name and purpose of the
                brand in writing. This allows for a wider array of applications
                as the brand grows in the future: merchandise, printed materials
                and similar.
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
              className="waveImageM"
            />
            <Image
              src="/images/klei/mobileWave2.webp"
              alt="Mockup Klei"
              width={640}
              height={636}
              className="waveImageM"
            />
            <Image
              src="/images/klei/mobileWave3.webp"
              alt="Mockup Klei"
              width={640}
              height={671}
              className="waveImageM"
            />
            <Image
              src="/images/klei/mobileWave4.webp"
              alt="Mockup Klei"
              width={640}
              height={700}
              className="waveImageM"
            />
          </div>
          <div className={styles.rowImages}>
            <Image
              src="/images/klei/grid1.webp"
              alt="Mockup Klei"
              width={720}
              height={575}
              className="waveImage"
              style={{ maxWidth: "56%", width: "56%" }}
            />
            <Image
              src="/images/klei/grid2.webp"
              alt="Mockup Klei"
              width={560}
              height={705}
              className="waveImage"
              style={{ maxWidth: "44%", width: "44%" }}
            />
          </div>
          <div className={styles.rowImages}>
            <Image
              src="/images/klei/grid3.webp"
              alt="Mockup Klei"
              width={640}
              height={644}
              className="waveImage"
              style={{ maxWidth: "50%", width: "50%" }}
            />
            <Image
              src="/images/klei/grid4.webp"
              alt="Mockup Klei"
              width={640}
              height={520}
              className="waveImage"
              style={{ maxWidth: "50%", width: "50%" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
