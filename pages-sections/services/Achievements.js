import React from "react";
import styles from "../../styles/section-css/services/Achievements.module.css";
import Accordion from "../../components/Accordion";
import Image from "next/image";

function Achievements() {
  return (
    <div className={styles.Achievements}>
      <div className="wrapper">
        <div className={styles.image}>
          <Image
            src="/images/service-image.png"
            alt="gradient background"
            fill={true}
            style={{ objectFit: "cover" }}
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
