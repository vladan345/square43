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
        overflow: "hidden",
        position: "relative",
        zIndex: 0,
      }}
    >
      <div className={styles.image}>
        <Image
          src="/images/ownnew/parallax2.png"
          alt="Own new building"
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
}

export default Parallax;
