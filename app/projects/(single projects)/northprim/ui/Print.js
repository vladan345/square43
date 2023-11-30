"use client";
import Image from "next/image";
import styles from "@/styles/section-css/northprim/Print.module.css";

function Print() {
  return (
    <div className={styles.Print}>
      <div className={`${styles.wrapper} wrapper`}>
        <div>
          <h2>Print Design</h2>
          <div className={styles.paragraphs}>
            <p className={styles.description}>
              When a brand comes to life, getting your hands on its flawless
              merch is what makes it even more real!
            </p>
          </div>
        </div>
        <Image
          src="/images/northprim/print-sticker.png"
          alt="Northprim Code or die sticker print"
          width={562}
          height={550}
          className={styles.sticker}
        />
      </div>
    </div>
  );
}

export default Print;
