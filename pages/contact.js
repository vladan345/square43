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
                <p className={styles.preheading}>Drup us a line</p>
                <a className={styles.titleLink} href="mailto:info@square43.com">
                  43@square43.com
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
