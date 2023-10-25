import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/section-css/zeder/Web.module.css";

function Web() {
  return (
    <section className={styles.Web}>
      <div className={styles.background}>
        <Image src="/images/zeder/web_bg.webp" alt="zeder phone" fill />
      </div>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.textBox}>
          <h2>
            Web Design
            <br />& Development
          </h2>
          <p>
            Laoreet nulla ut sed tortor. In urna accumsan purus volutpat et
            tellus parturient montes. Tincidunt consequat euismod et nisl sit
            vel bibendum nunc est. Mauris proin vel ut lobortis condimentum
            mollis. Nulla leo egestas lectus gravida suscipit ullamcorper id
            fermentum duis. Mattis eu nisl a ut ultrices nec neque.
          </p>
          <Link
            className={styles.button}
            href="https://zeder.ca"
            target="_blank"
          >
            ZEDER.CA
            <Image
              src="/images/zeder/leaf.svg"
              width={22}
              height={25}
              alt="Canada maple leaf"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Web;
