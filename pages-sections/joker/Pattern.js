import styles from "../../styles/section-css/joker/Pattern.module.css";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

function Pattern() {
  return (
    <div>
      <div className="wrapper">
        <div className={styles.patternFlex}>
          <div className={styles.content}>
            <p className={styles.description}>
              A champion deserves his own logo. This is why we created one
              especially for this purpose and discreetly included it as a
              patterned background on the can.
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
