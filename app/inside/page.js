"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/About.module.css";
import Head from "next/head";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Page() {
  const main = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let sections = gsap.utils.toArray("section");
      const sectionPos = main.current.getBoundingClientRect();
      gsap.set(".trigger", { height: sections.length * 200 + "vh" });
      let currentSection;
      currentSection = sections[0];

      sections.forEach((section, i) => {
        var tl = gsap.timeline({
          overwrite: true,
          scrollTrigger: {
            start: () => (i - 0.5) * innerHeight * 2 + sectionPos.top,
            end: () => (i + 0.5) * innerHeight * 2 + sectionPos.top,
            onToggle: (self) => {
              return self.isActive && setSection(section);
            },
          },
        });

        function setSection(newSection) {
          if (newSection !== currentSection) {
            var tl = gsap.timeline();
            tl.to(currentSection, {
              autoAlpha: 0,
              y: 100,
              duration: 0.5,
              overwrite: true,
            });
            tl.to(newSection, {
              autoAlpha: 1,
              y: 0,
              duration: 0.5,
              overwrite: true,
            });

            currentSection = newSection;
          }
        }
      }, main.current);
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Head>
        <title>Square43 Studio | About</title>
        <meta
          name="description"
          content="Building is believing - and we'll build a bright future in front of you."
        />

        <meta name="title" content="Square43 Studio - About us" />

        <meta property="og:url" content="https://square43.com/inside" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://square43.com/images/About.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="square43.com" />
        <meta property="twitter:url" content="https://square43.com/inside" />
        <meta name="twitter:title" content="Square43 Studio - About us" />
        <meta
          name="twitter:description"
          content="Building is believing - and we'll build a bright future in front of you."
        />
        <meta
          name="twitter:image"
          content="https://square43.com/images/About.png"
        />
      </Head>
      <main ref={main}>
        <div className={styles.About}>
          <div className="wrapper trigger">
            <div className={`${styles.stickyWrap} `}>
              <section
                className={`${styles.first} statementSection`}
                style={{ height: "200vh" }}
              >
                <p className={styles.statement}>
                  <span className={styles.gradientText}>
                    Building is believing
                  </span>{" "}
                  🙏 - and we&apos;ll build a bright future in front of you.
                </p>
              </section>

              <section className="statementSection" style={{ height: "200vh" }}>
                <p className={styles.statement}>
                  See your brand take its{" "}
                  <span className={styles.gradientText}>first breath.</span> 🐣
                </p>
              </section>

              <section className="statementSection" style={{ height: "200vh" }}>
                <p className={styles.statement}>
                  Word your{" "}
                  <span className={styles.gradientText}>copy well</span> 🔤 - it
                  speaks a thousand words.
                </p>
              </section>

              <section className="statementSection" style={{ height: "200vh" }}>
                <p className={styles.statement}>
                  Digital experience beyond your{" "}
                  <span className={styles.lineThrough}>expectations</span>{" "}
                  <span className={styles.gradientText}>imagination.</span> 💭
                </p>
              </section>

              <section className="statementSection" style={{ height: "200vh" }}>
                <p className={styles.statement}>
                  Socialize and get in{" "}
                  <span className={styles.gradientText}>touch</span> 👉👈 with
                  your audience.
                </p>
              </section>

              <section className="statementSection" style={{ height: "200vh" }}>
                <p className={styles.statement}>
                  Get your shop - there is a line in front, but{" "}
                  <span className={styles.gradientText}>
                    you&apos;re next up!
                  </span>{" "}
                  😀
                </p>
              </section>

              <section className="statementSection" style={{ height: "200vh" }}>
                <p className={styles.statement}>
                  Why go in circles? <br />
                  Go
                  <span className={styles.gradientText}> Square (43)</span>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Page;
