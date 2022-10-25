import React from "react";
import styles from "../../styles/section-css/dib-travel/WebDesign.module.css";

function WebDesign() {
  return (
    <div className={styles.WebDesign}>
      <div className="wrapper">
        <h2 className={styles.title}>Web Design</h2>
        <div className={styles.videoWrap}>
          <video
            style={{ width: "100%", margin: "0 auto" }}
            autoPlay
            muted
            loop
          >
            <source src="/images/dib-travel/webdesign.mp4" type="video/mp4" />
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

export default WebDesign;
