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
            Our web design solution simply followed suit, though red and black
            dominate the setting. On the other hand, web development allowed our
            vision to come to life. Zeder's new website is fully optimized for
            all formats: desktop, mobile and tablet!
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
