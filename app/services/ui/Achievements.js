import styles from "./styles/Achievements.module.css";
import Accordion from "@/components/Accordion";

function Achievements() {
  return (
    <div className={styles.Achievements}>
      <div className="wrapper">
        <div className={styles.videoWrap}>
          <video autoPlay playsInline muted loop className={styles.video}>
            <source src="/images/square1.mp4" type="video/mp4" />
          </video>
        </div>
        <h2 className={styles.tagline2}>
          We are superskilled in different industries
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
