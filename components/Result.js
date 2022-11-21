import React, { useEffect } from "react";
import styles from "../styles/component-css/Result.module.css";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";

function Result(props) {
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      gsap.to(".resultText", {
        y: 0,
        opacity: 1,
        ease: "power4",
        duration: 1,
        stagger: 0.5,
      });
    }
  }, [inView]);

  return (
    <div className={styles.Result}>
      <div className="wrapper">
        <h2 className={styles.title}>Result</h2>
        <p
          ref={ref}
          className={`${styles.description} resultText`}
          dangerouslySetInnerHTML={{ __html: props.project.resultShort }}
        />
        <p
          className={`${styles.description} resultText`}
          dangerouslySetInnerHTML={{ __html: props.project.resultLong }}
        />
        {props.project.liveProject != "" && (
          <a
            href={props.project.liveProject}
            className={`readMore ${styles.liveProject}`}
            target="_blank"
          >
            Live project
            <div className="icon">
              <Image
                src="/images/arrow.svg"
                alt="Arrow icon"
                width={40}
                height={40}
              />
            </div>
          </a>
        )}
      </div>
    </div>
  );
}

export default Result;
