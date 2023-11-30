import styles from "@/styles/section-css/imunoshop/Brand.module.css";
import Image from "next/image";

function Brand() {
  return (
    <div className={styles.Brand}>
      <div className="wrapper">
        <h2 className={styles.title}>Brand Elements</h2>
        <div className={styles.row}>
          <div className={styles.col}>
            <h3 className={styles.category}>Logo guidelines</h3>
            <Image
              src="/images/imunoshop/scheme.svg"
              alt="Imunoshop logo scheme"
              width={593}
              height={231}
              className={styles.logo}
            />
            <p className={`${styles.description} ${styles.colorDesc}`}>
              Our color palette was carefully selected to follow the entire
              concept of natural, high quality supplements, so it combines light
              greens with darker contrast colors for the logo.
            </p>
            <p className={`${styles.description} ${styles.fontDesc}`}>
              The serif font was selected to provide the feeling of a highend
              brand that fulfills its promise of impeccable quality to its
              customers.
            </p>
          </div>
          <div className={styles.col}>
            <h3 className={styles.category}>Brand colors</h3>
            <Image
              src="/images/imunoshop/colors.svg"
              alt="Imunoshop color scheme"
              width={480}
              height={281}
              className={styles.colors}
            />
            <Image
              src="/images/imunoshop/mobilecolors.svg"
              alt="Imunoshop color scheme"
              width={300}
              height={454}
              className={styles.colorsMobile}
            />
            <p className={`${styles.description} ${styles.mobileDesc}`}>
              Our color palette was carefully selected to follow the entire
              concept of natural, high quality supplements, so it combines light
              greens with darker contrast colors for the logo.
            </p>
            <h3 className={styles.category}>Brand Typefaces</h3>
            <Image
              src="/images/imunoshop/fonts.svg"
              alt="Imunoshop fonts"
              width={600}
              height={236}
              className={styles.fonts}
            />
            <Image
              src="/images/imunoshop/fontsmobile.svg"
              alt="Imunoshop fonts"
              width={600}
              height={236}
              className={styles.fontsMobile}
            />
            <p className={`${styles.description} ${styles.mobileDesc}`}>
              The serif font was selected to provide the feeling of a highend
              brand that fulfills its promise of impeccable quality to its
              customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brand;
