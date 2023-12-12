import styles from "./styles/Laptop.module.css";
import Image from "next/image";

function Laptop() {
  return (
    <>
      <div className="wrapper">
        <h2 className={styles.heading}>Web design</h2>
      </div>
      <div className={styles.Laptop}>
        <div className={styles.stripe}></div>
        <div className={styles.videoWrap}>
          <video playsInline autoPlay muted loop className={styles.video}>
            <source
              src="/images/glasstic/glasstic-screen.mp4"
              type="video/mp4"
            />
          </video>
          <Image
            src="/images/imunoshop/laptop-mockup.webp"
            alt="Laptop frame with video in it"
            fill
          />
        </div>
      </div>
      <div className="wrapper">
        <div className={styles.row}>
          <div className={styles.textBox}>
            <p>
              Firstly, the website needed a splash of color, so we extended the
              existing palette. Each new vivid shade added a special pop to the
              page and allowed us to single out the product&apos;s special
              features more clearly.
            </p>
            <p>
              Though the product can be marketed both for personal use and
              venues, the quality for both targets is making the brand vibrant
              and fun! Be it a party at home or in a club, safety comes first.
              We just found a way to make it look fun and lively too!
            </p>
          </div>
          <div className={styles.textBox}>
            <p>
              With the basis set, it was time to move on to special touches.
              Notice the seamless glass effect used for the product’s unique
              selling points! We went one step further and made sure to include
              rounded edges for each text box. Even these details send a clear
              message: there is nothing sharp or dangerous about these glasses,
              despite their appearance! The tiniest details like these are also
              crucial in brand communication!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Laptop;
