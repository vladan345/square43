import styles from "@/styles/section-css/jove/Web.module.css";
import Image from "next/image";
import Link from "next/link";

function Web() {
  return (
    <div className={styles.Web}>
      <div className="wrapper">
        <div className={styles.rowWrap}>
          <div className={styles.tabletWrap}>
            <video autoPlay muted loop>
              <source src="/images/jove/jove-tablet.mp4" />
            </video>
            <Image
              src="/images/jove/tablet.png"
              alt="tablet overlay"
              width={972}
              height={695}
            />
          </div>
          <div className={styles.textBox}>
            <h2>Web Design & Development</h2>
            <p>Large sections. Clean layout. Bold HD imagery.</p>
            <p>
              Without any distractions, the brand&apos;s essence - truffles -
              take center stage. The copy focuses on the mythological aspect of
              the brand, communicating its divine creation as a promise of
              impeccable quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Web;
