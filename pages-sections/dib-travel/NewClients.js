import React from "react";
import styles from "../../styles/section-css/dib-travel/NewClients.module.css";
function NewClients() {
  return (
    <div className={styles.NewClients}>
      <div className="wrapper">
        <h2 className={styles.title}>Welcoming new clients</h2>
        <div className={styles.videoWrap}>
          <video
            style={{ width: "100%", margin: "0 auto" }}
            autoPlay
            muted
            loop
          >
            <source src="/images/dib-travel/welcome.mp4" type="video/mp4" />
          </video>
          {/* <Image
          src="/images/northprim/taglines.svg"
          alt="Tagline placeholder"
          width={1360}
          height={720}
        /> */}
        </div>
      </div>
    </div>
  );
}

export default NewClients;
