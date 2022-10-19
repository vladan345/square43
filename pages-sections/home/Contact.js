import React from "react";
import Image from "next/image";
import Link from "next/link";
import Square from "../../components/Square";
import styles from "../../styles/section-css/home/Contact.module.css";

function Contact() {
  return (
    <div className={styles.Contact}>
      <div className={styles.bgImage}>
        <Image
          src="/images/contact-background.webp"
          alt="Waves background image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="wrapper">
        <Square image="/images/square5.webp" height={560} />
        <div className={styles.contactWrap}>
          <p className={styles.tag}>Redy to SquareUP?</p>
          <h2 className={styles.title}>
            We accept cash, cards, emails, phone calls...
          </h2>

          <Link href="/">
            <a className="readMore">
              CONTACT US
              <div className="icon">
                <Image
                  src="/images/arrow.svg"
                  alt="Arrow icon"
                  width={40}
                  height={40}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;