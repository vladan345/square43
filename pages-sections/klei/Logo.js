import Image from "next/image";
import styles from "@/styles/section-css/klei/Logo.module.css";

export default function Logo() {
  return (
    <>
      <section className={styles.Logo}>
        <div className={`wrapper ${styles.name}`}>
          <div className={styles.textBox}>
            <h2>Name & Story</h2>
            <p>
              Sit nunc gravida neque arcu iaculis morbi nisl. Turpis fringilla
              cras nunc eleifend. Ante ornare pellentesque eu enim vehicula
              donec. Nisl sed pretium non quam vitae. Urna est varius facilisis
              morbi sed venenatis vitae dui. Quis facilisis quis et donec.
            </p>
            <p>
              Faucibus pharetra sodales urna porttitor ornare scelerisque.
              Facilisis fringilla lacus semper at quam varius turpis. Dolor
              tristique sit eget vulputate leo id. Amet turpis sem quis amet.
              Leo tellus senectus egestas et nisl in risus. A eu pharetra ac id
              pulvinar vitae a porttitor.
            </p>
          </div>
        </div>
        <Image
          src="/images/klei/glina.webp"
          alt="Clay tools"
          width={1080}
          height={760}
        />
      </section>
      <section className={styles.Branding}>
        <div className="wrapper">
          <div className={styles.flex}>
            <div className={styles.textBox}>
              <h2>Logo & Branding</h2>
              <p className={styles.subheading}>LOGO DESIGN</p>
              <p className={styles.paragraph}>
                Auctor tincidunt in eros vitae. Laoreet dictum consectetur
                bibendum cursus sed consectetur. Donec amet nulla velit tempus.
                Sodales dui nulla sagittis odio vitae ac. Elementum ultrices
                scelerisque quis sagittis faucibus phasellus sit eget. Euismod
                suspendisse facilisi proin consequat amet tellus a pulvinar at.
                Fusce enim urna vel ultricies lorem. Risus ultrices at duis
                vitae at non non sapien. At rutrum.
              </p>
            </div>
            <div className={styles.imageWrap}>
              <Image
                src="/images/klei/logo_branding.webp"
                alt="Logo structure"
                width={800}
                height={525}
              />
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className={styles.grid}>
            <Image
              src="/images/klei/logo1.svg"
              alt="Logo usage"
              width={680}
              height={360}
            />
            <Image
              src="/images/klei/logo2.svg"
              alt="Logo usage"
              width={680}
              height={360}
            />
            <Image
              src="/images/klei/logo3.svg"
              alt="Logo usage"
              width={680}
              height={360}
            />
            <Image
              src="/images/klei/logo4.svg"
              alt="Logo usage"
              width={680}
              height={360}
            />
          </div>
          <div className={styles.row}>
            <div className={styles.brandBox}>
              <p className={styles.subheading}>branding application</p>
              <p>
                Venenatis turpis augue sed viverra lectus ultrices. Consectetur
                phasellus fringilla nunc libero sed. Amet pharetra gravida
                viverra malesuada vestibulum volutpat. Nisl sed auctor a semper
                lacinia in sem.
              </p>
            </div>
            <div className={styles.brandBox}>
              <p>
                Mauris ac maecenas sit amet. Amet id tincidunt amet semper nulla
                mus. Consectetur lorem lorem enim et. Varius donec ultricies
                venenatis ultrices sit ornare. Condimentum at amet aliquam
                nulla. Cursus amet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
