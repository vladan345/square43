import { useRef, useEffect } from "react";
import styles from "../styles/Career.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Career() {
  const positions = [
    {
      title: "3D artist",
      description:
        "Is you are super skilled with 3D modelling we would love to meet you and talk about digital art.",
    },
    {
      title: "Motion Graphic Designer",
      description:
        "We are all in motions. If you want to jump to the next level, send us your work. We would be happy to meet you.",
    },
    {
      title: "Developers",
      description:
        "There are many great developers out there, but we are looking for special one, who can join our team and bring more then we expect.",
    },
  ];

  const main = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".heading1", {
        duration: 1,
        opacity: 0,
        translateY: 100,
        scrollTrigger: {
          trigger: ".slide1",
          start: "top center",
          end: "bottom bottom",
          toggleActions: "restart none none none ",
          pin: ".wrap1",
        },
      });
      gsap.from(".heading2", {
        duration: 1,
        opacity: 0,
        translateY: 100,
        scrollTrigger: {
          trigger: ".slide2",
          start: "top center",
          end: "bottom bottom",
          toggleActions: "restart none none reverse ",
          pin: ".wrap2",
        },
      });

      gsap.from(".banner", {
        duration: 1,
        opacity: 0,
        y: 100,
        scrollTrigger: {
          trigger: ".banner",
          toggleActions: "restart none none reverse ",
        },
      });
    }, main.current);
    return () => ctx.revert(); // <- cleanup!
  }, []);

  return (
    <>
      <Head>
        <title>Square43 Studio | Career</title>
        <meta
          name="description"
          content="If you are the one show us what you got"
        />

        <meta name="title" content="Square43 Studio - Career" />

        <meta property="og:url" content="https://square43.com/career" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://square43.com/images/About.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="square43.com" />
        <meta property="twitter:url" content="https://square43.com/career" />
        <meta name="twitter:title" content="Square43 Studio - Career" />
        <meta
          name="twitter:description"
          content="If you are the one show us what you got"
        />
        <meta
          name="twitter:image"
          content="https://square43.com/images/About.png"
        />
      </Head>
      <main ref={main} className={styles.Career}>
        <div className="wrapper">
          <div className={`${styles.slide1} slide1`}>
            <div className="wrap1">
              <h1 className={`${styles.heading1} heading1`}>
                We are always looking for a great talent. 👀
              </h1>
            </div>
          </div>
          <div className={`${styles.slide2} slide2`}>
            <div className="wrap2">
              <h2 className={`${styles.heading2} heading2`}>
                If you are the one show us what you got. 😎
              </h2>
            </div>
          </div>
          <Image
            src="/images/career-banner.webp"
            alt="Career banner image"
            width={1360}
            height={598}
            className={`${styles.banner} banner`}
          />
        </div>

        <div className={styles.positions}>
          <div className="wrapper">
            <h2 className={styles.heading}>Open positions:</h2>
            <div className={styles.list}>
              {positions &&
                positions.map((position, index) => {
                  return (
                    <Link
                      href={`mailto:career@square43.com&subject=Submission for position - ${position.title}`}
                      key={index}
                      className={styles.card}
                    >
                      <div className={styles.overlay}></div>
                      <div className={styles.top}>
                        <p className={styles.tag}>positions</p>
                        <h3 className={styles.title}>{position.title}</h3>
                        <p className={styles.description}>
                          {position.description}
                        </p>
                        <div className={styles.link}>
                          apply{" "}
                          <div className={styles.icon}>
                            <Image
                              src="/images/arrow-white-r.svg"
                              alt="arrow icon right"
                              width={40}
                              height={40}
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Career;
