import React from "react";
import Image from "next/image";
import styles from "../styles/Contact.module.css";
import Head from "next/head";

function contact() {
  return (
    <>
      <Head>
        <title>Square43 Studio | Contact</title>
        <meta name="description" content="We can't wait to meet you" />

        <meta name="title" content="Meta Tags — Preview, Edit and Generate" />
        <meta
          name="description"
          content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://square43.com/" />
        <meta
          property="og:title"
          content="Meta Tags — Preview, Edit and Generate"
        />
        <meta
          property="og:description"
          content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
        />
        <meta
          property="og:image"
          content="https://www.square43.com/_next/image?url=%2Fimages%2Fstarry-night.png&w=1080&q=75"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://square43.com/" />
        <meta
          property="twitter:title"
          content="Meta Tags — Preview, Edit and Generate"
        />
        <meta
          property="twitter:description"
          content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
        />
        <meta
          property="twitter:image"
          content="https://www.square43.com/_next/image?url=%2Fimages%2Fstarry-night.png&w=1080&q=75"
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

export default contact;
