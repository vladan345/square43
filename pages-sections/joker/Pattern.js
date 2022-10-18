import styles from "../../styles/section-css/joker/Pattern.module.css";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

function Pattern() {
  return (
    <div>
      <div className="wrapper">
        <div className={styles.patternFlex}>
          <div className={styles.content}>
            <h2 className={styles.title}>print layout</h2>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet non
              sollicitudin arcu integer. Nulla cras pellentesque habitant tortor
              donec bibendum volutpat.
            </p>
          </div>
          <div className={styles.patternWrap}>
            <div className={styles.pattern}>
              <Parallax speed={20}>
                <Image
                  src="/images/joker/pattern.svg"
                  alt="Guarana joker blue color"
                  width={1080}
                  height={1080}
                />
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pattern;
