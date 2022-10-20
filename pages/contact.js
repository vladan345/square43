import React from "react";
import Image from "next/image";
import styles from "../styles/Contact.module.css";

function contact() {
  return (
    <div className={styles.Contact}>
      <div className="wrapper">
        <h1 className={styles.title}>We can&apos;t wait to meet you.</h1>
        <p className={styles.subheading}>
          Meet us over email, live meeting, food or drink - it&apos;s your
          choice.
        </p>
        <div className={styles.imageRow}>
          <div className={styles.image}>
            <Image
              src="/images/pen.svg"
              alt="pen icon"
              width={200}
              height={200}
            />
          </div>
          <div className={styles.image}>
            <Image
              src="/images/meet.svg"
              alt="meeting icon"
              width={200}
              height={200}
            />
          </div>
          <div className={styles.image}>
            <Image
              src="/images/pizza.svg"
              alt="pizza icon"
              width={200}
              height={200}
            />
          </div>
          <div className={styles.image}>
            <Image
              src="/images/drink.svg"
              alt="drink icon"
              width={200}
              height={200}
            />
          </div>
        </div>
        <p className={styles.subheading}>Drup us a line</p>
        <h2 className={styles.title}>
          <a href="mailto:info@square43.com">info@square43.com</a>
        </h2>
      </div>
    </div>
  );
}

export default contact;
