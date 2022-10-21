import React from "react";
import styles from "../../styles/section-css/services/Achievements.module.css";
import Accordion from "../../components/Accordion";
import Image from "next/image";

function Achievements() {
  return (
    <div className={styles.Achievements}>
      <div className="wrapper">
        <h2 className={styles.tagline}>
          <span className={styles.gradientText}>99.9%</span> of our clients came
          through recommendations. We developed over
          <span className={styles.gradientText}>400 websites</span> from
          scratch. Authored over{" "}
          <span className={styles.gradientText}>700 blog</span> posts. Make up
          to <span className={styles.gradientText}>3 brandbooks</span> per
          month.
          <br />
          Digitally transformed over
          <br />
          <span className={styles.gradientText}>60 companies</span> across
          Europe. All done by using{" "}
          <span className={styles.gradientText}>0 shortcuts.</span>
        </h2>
        <div className={styles.image}>
          <Image
            src="/images/service-image.png"
            alt="gradient background"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h2 className={styles.tagline2}>
          We are superskiled in different industries
        </h2>
        <Accordion
          title="Startup"
          content={["eDoktor", "DIB Travel", "Jove", "OwnNew", "Imuno Shop"]}
        />
        <Accordion
          title="IT"
          content={["Hooloovoo", "Optima Apps", "Northprim", "NetSet"]}
        />
        <Accordion
          title="Hospitality"
          content={["Rikas Group", "Jan Hotels", "Proleće", "Kolarac"]}
        />
        <Accordion
          title="Healthcare"
          content={["Sjaj Ophtamology", "Sandoz", "Jamieson"]}
        />
        <Accordion
          title="E-commerce"
          content={["Feedback", "Outdoorsports", "Roda Shop", "Imuno Shop"]}
        />
        <Accordion title="FMCG" content={["Knjaz Miloš", "Guarana", "Jove"]} />
      </div>
    </div>
  );
}

export default Achievements;
