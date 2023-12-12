"use client";
import { useEffect, useRef } from "react";
import styles from "./styles/Taglines.module.css";
import CountUp from "react-countup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Taglines() {
  const main = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      let ctx = gsap.context(() => {
        let sections = gsap.utils.toArray(".taglineTrigger section.taglineSec");
        const sectionPos = main.current.getBoundingClientRect();
        gsap.set(".taglineTrigger", { height: sections.length * 200 + "vh" });
        let currentSection;
        currentSection = sections[0];

        sections.forEach((section, i) => {
          var tl = gsap.timeline({
            overwrite: true,
            scrollTrigger: {
              start: () => (i - 0.5) * innerHeight * 2 + sectionPos.bottom,
              end: () => (i + 0.5) * innerHeight * 2 + sectionPos.bottom,
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
    }, 2000);
  }, []);
  return (
    <div className={styles.Taglines} ref={main}>
      <div className="wrapper taglineTrigger">
        <div className={`${styles.stickyWrap} `}>
          <section
            className={`${styles.first} taglineSec`}
            style={{ height: "200vh", paddingTop: "100px" }}
          >
            <h2 className={styles.tagline}>
              <span className={styles.gradientText}>
                <CountUp useEasing={true} start={0.0} end={99.9} decimals={1} />
                %
              </span>{" "}
              of our
              <br />
              clients came through stellar reviews.
            </h2>
          </section>

          <section className="taglineSec" style={{ height: "200vh" }}>
            <h2 className={styles.tagline}>
              We developed over{" "}
              <span className={styles.gradientText}>
                <CountUp useEasing={true} start={0} end={400} /> websites
              </span>{" "}
              from scratch.
            </h2>
          </section>

          <section className="taglineSec" style={{ height: "200vh" }}>
            <h2 className={styles.tagline}>
              Authored over
              <br />
              <span className={styles.gradientText}>
                <CountUp useEasing={true} start={0} end={700} /> blog
              </span>{" "}
              posts.
            </h2>
          </section>

          <section className="taglineSec" style={{ height: "200vh" }}>
            <h2 className={styles.tagline}>
              Make up to{" "}
              <span className={styles.gradientText}>
                <CountUp useEasing={true} start={0} end={3} /> brandbooks
              </span>{" "}
              per month.
            </h2>
          </section>

          <section className="taglineSec" style={{ height: "200vh" }}>
            <h2 className={styles.tagline}>
              Digitally transformed over{" "}
              <span className={styles.gradientText}>
                <CountUp useEasing={true} start={0} end={60} /> companies
              </span>{" "}
              across Europe.
            </h2>
          </section>

          <section className="taglineSec" style={{ height: "200vh" }}>
            <h2 className={styles.tagline}>
              All done by using
              <br />
              <span className={styles.gradientText}>
                <CountUp useEasing={true} start={100} end={0} /> shortcuts.
              </span>
            </h2>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Taglines;
