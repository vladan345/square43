import React, { useEffect } from "react";
import styles from "../styles/component-css/Result.module.css";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";

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
      </div>
    </div>
  );
}

export default Result;
