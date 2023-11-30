import Image from "next/image";
import styles from "@/styles/section-css/joker/Scheme.module.css";

function Scheme() {
  return (
    <div>
      <div className="wrapper">
        <div className={styles.schemeWrap}>
          <div className={styles.scheme}>
            <video playsInline className={styles.video} autoPlay muted loop>
              <source
                src="/images/joker/blueprint.mp4"
                type="video/mp4"
              ></source>
            </video>
          </div>
          <div className={styles.content}>
            <p className={styles.description}>
              When worlds collide: we made sure to work in line with the brand's
              existing layout in terms of name/logo positioning, while making
              sure to include some new elements that made the product pop out
              the market racks!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scheme;
