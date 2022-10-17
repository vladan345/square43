import React from "react";
import styles from "../../styles/section-css/ownnew/WebDesign.module.css";
import Image from "next/image";

function WebDesign() {
  return (
    <div className={styles.WebDesign}>
      <div className="wrapper">
        <h2>Web Design</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet non
          sollicitudin arcu integer. Nulla cras pellentesque habitant tortor
          donec bibendum volutpat.{" "}
        </p>
        <p className={styles.description}>
          Tincidunt leo sit interdum maecenas leo. Dolor amet convallis senectus
          aliquet turpis amet ultrices sagittis, tincidunt. Sed dignissim nulla
          nisl purus congue.
        </p>
      </div>
      <div className={styles.image}>
        <Image
          src="/images/ownnew/design-image.webp"
          layout="fill"
          objectFit="cover"
          alt="Own new home"
        />
      </div>
    </div>
  );
}

export default WebDesign;
