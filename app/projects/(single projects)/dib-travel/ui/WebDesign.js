import styles from "./styles/WebDesign.module.css";

function WebDesign() {
  return (
    <div className={styles.WebDesign}>
      <div className={`${styles.wrapper} wrapper`}>
        <h2 className={styles.title}>
          Web Design
          <br /> & Web Development
        </h2>
        <div className={styles.videoWrap}>
          <video
            style={{ width: "100%", margin: "0 auto" }}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/images/dib-travel/webdesign.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles.textWrap}>
          <p className={styles.description}>
            Achieving balance between a witty tone of voice and a reliable brand
            image is always a challenge...not for us though! Pair that up with
            clearly communicated perks and services of a fully customized
            user-friendly web design and you're set for victory!
          </p>
          <p className={styles.description}>
            Each web page was made in line with the new brand image, but our top
            priority was a user-friendly outline with to-the-point
            communication.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WebDesign;
