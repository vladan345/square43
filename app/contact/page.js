import styles from "./Contact.module.css";
import Image from "next/image";
import Newsletter from "./ui/Newsletter";

export const metadata = {
  openGraph: {
    title: "Square43 Studio | Contact",
    description: "We can't wait to meet you",
    images: [{ url: "/images/Contact.png" }],
    url: "https://square43.com/contact",
  },
  title: "Square43 Studio | Contact",
  description: "We can't wait to meet you",
  metadataBase: new URL("https://square43.com/contact"),
};

export default function Page() {
  return (
    <main>
      <div className={styles.Contact}>
        <div className="wrapper">
          <h1 className={styles.title}>We can&apos;t wait to meet you.</h1>
          <p className={styles.subheading}>
            Meet us over email, live{" "}
            <span className={styles.gradientText}>meeting</span>,{" "}
            <span className={styles.gradientText}>food</span> or{" "}
            <span className={styles.gradientText}>drink</span> - it&apos;s your
            choice.
          </p>
          {/* <div className={styles.row}>
            <div className={styles.col}>
              <p className={styles.preheading}>Call us</p>
              <a className={styles.titleLink} href="tel:+381603339493">
                +381 60 333 94 93
              </a>
              <p className={styles.preheading}>Maybe drop us a line</p>
              <a className={styles.titleLink} href="mailto:studio@square43.com">
                studio@square43.com
              </a>
            </div>
            <div className={styles.col}>
              <p className={styles.preheading}>Or visit</p>
              <p className={styles.titleLink}>Belgrade, Serbia</p>
            </div>
          </div> */}
          <div className={styles.row}>
            <div className={styles.col}>
              <p className={styles.formHeading}> Let&apos;s get in touch.</p>
              <Newsletter />
            </div>
            <div className={styles.col}>
              <div className={styles.imageWrap}>
                <Image
                  src="/images/contact-square.svg"
                  alt="Decorative object"
                  width={480}
                  height={480}
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
