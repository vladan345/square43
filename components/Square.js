import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../styles/component-css/Square.module.css";

function Square(props) {
  const square = useRef();
  useEffect(() => {
    const element = square.current;

    switch (props.state) {
      case 1:
        {
          element.id = "step1";
        }
        break;
      case 2:
        element.id = "step2";
        break;
      case 3:
        element.id = "step3";
        break;
      case 4:
        element.id = "step4";
        break;
      case 5:
        element.id = "step5";
        break;
      case 6:
        element.id = "step6";
        break;
    }
  }, [props.state]);
  return (
    <div className={styles.square} ref={square}>
      <div className={`${styles.videoWrap} video1`}>
        <video autoPlay playsinline muted loop className={styles.video}>
          <source src="/images/square1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={`${styles.videoWrap} video2`}>
        <video autoPlay playsinline muted loop className={styles.video}>
          <source src="/images/square2.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={`${styles.videoWrap} video3`}>
        <video autoPlay playsinline muted loop className={styles.video}>
          <source src="/images/square3.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={`${styles.videoWrap} video4`}>
        <video autoPlay playsinline muted loop className={styles.video}>
          <source src="/images/square4.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={`${styles.videoWrap} video5`}>
        <video autoPlay playsinline muted loop className={styles.video}>
          <source src="/images/northprim/Northprim-hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={`${styles.videoWrap} video6`}>
        <video autoPlay playsinline muted loop className={styles.video}>
          <source src="/images/square6.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Square;
