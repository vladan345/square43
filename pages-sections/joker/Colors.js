import styles from "../../styles/section-css/joker/Colors.module.css";
import Image from "next/image";

function Colors() {
  return (
    <div>
      <div className="wrapper">
        <div className={styles.colorsWrap}>
          <div className={styles.content}>
            <h2 className={styles.title}>print layout</h2>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet non
              sollicitudin arcu integer. Nulla cras pellentesque habitant tortor
              donec bibendum volutpat.
            </p>
          </div>
          <div className={styles.colors}>
            <div className={styles.color}>
              <Image
                src="/images/joker/color1.svg"
                alt="Guarana joker blue color"
                width={200}
                height={280}
              />
            </div>
            <div className={styles.color}>
              <Image
                src="/images/joker/color2.svg"
                alt="Guarana joker yellow color"
                width={200}
                height={280}
              />
            </div>
            <div className={styles.color}>
              <Image
                src="/images/joker/color3.svg"
                alt="Guarana joker red color"
                width={200}
                height={280}
              />
            </div>
            <div className={styles.color}>
              <Image
                src="/images/joker/color4.svg"
                alt="Guarana joker orange color"
                width={200}
                height={280}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Colors;
