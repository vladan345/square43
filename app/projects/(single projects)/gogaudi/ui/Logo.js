import Image from "next/image";
import styles from "./styles/Logo.module.css";

function Logo() {
  return (
    <section className={styles.Logo}>
      <div className="wrapper">
        <h2>Logo</h2>
        <p>
          Ultrices sit diam a pharetra maecenas lacus in. Nulla consec tetur
          volutpat at elit nisl lectus pulvinar cursus. Pretium porta enim eget
          ultricies eu orci duis. Porttitor lacus euismod justo quam non
          phasellus. Sollicitudin eget suspendisse morbi feugiat porttitor amet
          luctus nec tempor. Malesuada elit aliquet felis volutpat. Maecenas in
          viverra dolor tristique non a magnis.
        </p>
        <div className={styles.compare}>
          <div className={styles.col}>
            <div className={styles.imageBackground}>
              <Image
                width={339}
                height={115}
                alt="old logo"
                src="/images/gogaudi/logo-old.svg"
              />
            </div>
            <span className={styles.caption}>OLD</span>
          </div>
          <div className={styles.col}>
            <div className={styles.imageBackground}>
              <Image
                width={417}
                height={78}
                alt="new logo"
                src="/images/gogaudi/logo-new.svg"
              />
            </div>
            <span className={styles.caption}>NEW</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Logo;
