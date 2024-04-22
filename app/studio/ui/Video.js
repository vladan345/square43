import React from "react";
import styles from "./styles/Video.module.css";
import Image from "next/image";

export default function Video() {
  return (
    <div className={styles.videoSection}>
      <div className={styles.vid}>
        <div className={styles.top}></div>
        <div className={styles.middle}>
          <Image
            src="/images/Frame.svg"
            width={330}
            height={330}
            alt="square43 logo"
          />
        </div>
        <div className={styles.bottom}></div>
        <video
          src={"/images/S43_Skies.mp4"}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
          type="video/mp4"
          autoPlay
          loop
          playsInline
          muted
        ></video>
      </div>
    </div>
  );
}
