import styles from "./styles/Taglines.module.css";

function Taglines() {
  return (
    <div className={styles.Taglines}>
      <div className="wrapper">
        <h2>Web Design</h2>
      </div>
      <video autoPlay muted loop playsInline className={styles.video}>
        <source src="/images/keiko/S43_Keiko_Web_Video.mp4" type="video/mp4" />
      </video>
      <div className="wrapper">
        <div className={styles.row}>
          <div className={styles.col}>
            <p className={styles.description}>
              Home is where the web-page is - so we redesigned KEIKO's homepage
              too! With a clean-cut design, their images got the well-deserved
              spotlight. This kind of distribution emphasized their minimalistic
              design and the impeccable quality of the product.
            </p>
          </div>
          <div className={styles.col}>
            <p className={styles.description}>
              With soft edges and even softer colors - completely in line with
              the brand - we wanted each visitor to be able to feel the
              outstanding material before even touching it!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Taglines;
