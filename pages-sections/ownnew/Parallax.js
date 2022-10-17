import React from "react";
import styles from "../../styles/section-css/ownnew/Parallax.module.css";
import Image from "next/image";
import { Parallax as ParallaxComp } from "react-scroll-parallax";
function Parallax() {
  return (
    <div
      style={{
        height: 600,
        width: "100%",
      }}
    >
      <div className={styles.image}></div>
    </div>
  );
}

export default Parallax;
