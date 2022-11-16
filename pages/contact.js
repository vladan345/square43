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
        <meta
          property="og:image"
          content="https://xaconi.dev/api/social-image/como-crear-thumbnails-dinamicos-en-next-js.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://xaconi.dev/api/social-image/como-crear-thumbnails-dinamicos-en-next-js.jpg"
        />
        <meta
          name="twitter:image:src"
          content="https://xaconi.dev/api/social-image/como-crear-thumbnails-dinamicos-en-next-js.jpg"
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
