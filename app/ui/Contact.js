import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/section-css/home/Contact.module.css";

function Contact() {
  return (
    <div className={styles.Contact}>
      <div>
        <Image
          src="/images/contact-background.jpg"
          alt="Waves background image"
          fill
        />
      </div>

      <div className={styles.wrapper}>
        <div className={styles.linkWrapMobile}>
          <Link href="/contact" className="readMore">
            CONTACT US
            <div className="icon">
              <Image
                src="/images/arrow.svg"
                alt="Arrow icon"
                width={40}
                height={40}
              />
            </div>
          </Link>
        </div>

        <div className={styles.contactWrap}>
          <p className={styles.tag}>Ready to Square UP?</p>
          <h2 className={styles.title}>
            We accept cash, cards, emails, phone calls...
          </h2>
          <div className={styles.linkWrap}>
            <Link href="/contact" className="readMore">
              CONTACT US
              <div className="icon">
                <Image
                  src="/images/arrow.svg"
                  alt="Arrow icon"
                  width={40}
                  height={40}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
