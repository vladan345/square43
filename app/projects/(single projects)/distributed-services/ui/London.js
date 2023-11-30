import styles from "@/styles/section-css/distributed-services/London.module.css";

function London() {
  return (
    <section className={styles.London} id="london">
      <video className={styles.video} playsInline muted autoPlay loop>
        <source
          src="/images/distributed-services/distributed-london-dubai.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
}

export default London;
