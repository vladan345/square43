import styles from "@/styles/Contact.module.css";
import Head from "next/head";

function Page() {
  return (
    <>
      <Head>
        <title>Square43 Studio | Contact</title>
        <meta name="description" content="We can't wait to meet you" />

        <meta name="title" content="Square43 Studio - Contact us" />
        <meta
          name="description"
          content="We can't wait to meet you. Let's get in touch!"
        />
        <meta property="og:url" content="https://square43.com/contact" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://square43.com/images/Contact.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="square43.com" />
        <meta property="twitter:url" content="https://square43.com/contact" />
        <meta name="twitter:title" content="Square43 Studio - Contact us" />
        <meta
          name="twitter:description"
          content="We can't wait to meet you. Let's get in touch!"
        />
        <meta
          name="twitter:image"
          content="https://square43.com/images/Contact.png"
        />
      </Head>
      <main>
        <div className={styles.Contact}>
          <div className="wrapper">
            <h1 className={styles.title}>We can&apos;t wait to meet you.</h1>
            <p className={styles.subheading}>
              Meet us over email, live{" "}
              <span className={styles.gradientText}>meeting</span>,{" "}
              <span className={styles.gradientText}>food</span> or{" "}
              <span className={styles.gradientText}>drink</span> - it&apos;s
              your choice.
              <br />
              <br />
              Let&apos;s get in touch.
            </p>
            <div className={styles.row}>
              <div className={styles.col}>
                <p className={styles.preheading}>Call us</p>
                <a className={styles.titleLink} href="tel:+381603339493">
                  +381 60 333 94 93
                </a>
                <p className={styles.preheading}>Maybe drup us a line</p>
                <a
                  className={styles.titleLink}
                  href="mailto:studio@square43.com"
                >
                  studio@square43.com
                </a>
              </div>
              <div className={styles.col}>
                <p className={styles.preheading}>Or visit</p>
                <p className={styles.titleLink}>Belgrade, Serbia</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Page;
