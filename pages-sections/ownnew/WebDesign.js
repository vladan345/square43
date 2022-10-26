import React from "react";
import styles from "../../styles/section-css/ownnew/WebDesign.module.css";
import Image from "next/image";

function WebDesign() {
  return (
    <div className={styles.WebDesign}>
      <div className="wrapper">
        <h2>Web Design</h2>
        <p className={styles.description}>
          Beauty might be in the eye of the beholder, but the art of creating
          that beauty was in the eyes - and hands - of our designer.
        </p>
        <p className={styles.description}>
          The aim was to combine the following key concepts: minimalism,
          coziness and an intuitive design without making it look too plain. Our
          secret, however, was visual narration.
        </p>
      </div>
      <div className={styles.image}>
        <Image
          className={styles.image2}
          src="/images/ownnew/design-image.webp"
          fill={true}
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          style={{ objectFit: "cover" }}
          alt="Own new home"
        />
      </div>
    </div>
  );
}

export default WebDesign;
