import styles from "./styles/Highlights.module.css";

function Highlights() {
  return (
    <div className={styles.Highlights}>
      <div className="wrapper">
        <div className={styles.row}>
          <div className={styles.textBox}>
            <h3>Focus on services</h3>
            <p>
              Our client's versatile palette of services takes center stage!
              While designing any kind of webpage, we put ourselves in the shoes
              of target page visitors - what do they want to see, what are they
              looking for? Commonly, your clients want to see how you can help
              them and what you've done thus far - that is why we made sure to
              highlight everything Distributed Services has to offer!
            </p>
          </div>
          <video className={styles.video} playsInline muted autoPlay loop>
            <source
              src="/images/distributed-services/services.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
