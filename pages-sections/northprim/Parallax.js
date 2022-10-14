import React from "react";
import styles from "../../styles/section-css/northprim/Parallax.module.css";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

function Paralax() {
  return (
    <div className={styles.Parallax}>
      <Parallax scale={[1, 1.1]} className={styles.background}>
        <Image
          src="/images/northprim/NP_Wave_Background.png"
          alt="Northprim wave art parallax"
          width={1920}
          height={700}
          objectFit="cover"
        />
      </Parallax>
      <Parallax scale={[1, 0.7]} rotate={[0, 15]} className={styles.wave}>
        <Image
          src="/images/northprim/NP_The_Wave.png"
          alt="Northprim wave art parallax"
          width={1920}
          height={995}
        />
      </Parallax>

      <Parallax scale={[0.2, 1]} rotate={[0, -45]} className={styles.star}>
        <Image
          src="/images/northprim/NP_Northstar.png"
          alt="Northprim wave art parallax"
          width={369}
          height={380}
        />
      </Parallax>
    </div>
  );
}

export default Paralax;
