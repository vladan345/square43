import React from "react";
import styles from "../../styles/section-css/services/Achievements.module.css";
import Accordion from "../../components/Accordion";
import Image from "next/image";

function Achievements() {
  return (
    <div className={styles.Achievements}>
      <div className="wrapper">
        <p className={styles.tag}>achievements</p>
        <h2 className={styles.tagline}>
          Here are some stats: 99.9% of our clients came through
          recommendations. We developed over 40 websites from scratch. Authored
          over 70 blog posts. All done by using 0 shortcuts.
        </h2>
        <div className={styles.image}>
          <Image
            src="/images/service-image.png"
            alt="gradient background"
            width={1360}
            height={480}
          />
        </div>
        <h2 className={styles.tagline}>
          We are superskiled in different industries
        </h2>
        <Accordion
          title="Startup"
          content="Gravida condimentum vitae scelerisque adipiscing ultrices amet, purus eget aliquet. Malesuada mauris lectus molestie donec netus ornare lacus nisl."
        />
        <Accordion
          title="IT"
          content="Gravida condimentum vitae scelerisque adipiscing ultrices amet, purus eget aliquet. Malesuada mauris lectus molestie donec netus ornare lacus nisl."
        />
        <Accordion
          title="Hospitality"
          content="Gravida condimentum vitae scelerisque adipiscing ultrices amet, purus eget aliquet. Malesuada mauris lectus molestie donec netus ornare lacus nisl."
        />
      </div>
    </div>
  );
}

export default Achievements;
