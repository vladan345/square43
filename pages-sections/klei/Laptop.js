import Image from "next/image";
import styles from "@/styles/section-css/klei/Laptop.module.css";

export default function Laptop() {
  return (
    <section className={styles.Laptop}>
      <div className="wrapper">
        <h2>
          Web Design
          <br /> & Development
        </h2>
        <div className={styles.textRow}>
          <p>
            Lacus eu sed faucibus bibendum pulvinar. Est et tincidunt facilisi
            dapibus laoreet turpis dolor. Vel mattis tellus scelerisque tortor
            condimentum purus. Tortor vitae quam facilisis faucibus. Viverra
            vitae purus lectus pharetra vel pharetra pharetra ultrices. Lacus
            elementum ultrices enim arcu. Senectus.
          </p>
          <p>
            At auctor amet purus suspendisse nec. Amet massa ultrices sed dis
            vulputate arcu orci sed. Vitae id dui arcu enim interdum. Dui sit
            enim odio duis eu. Ullamcorper sit egestas elit donec eget eget. Ut
            id ut in gravida posuere vestibulum hendrerit venenatis scelerisque.
          </p>
        </div>
      </div>

      <div className={styles.background}>
        <Image
          src="/images/klei/laptop_bg.webp"
          alt="Background laptop"
          fill
          className={styles.laptopBg}
        />
        <Image
          src="/images/klei/laptop.webp"
          alt="Laptop"
          width={1279}
          height={1007}
          className={styles.laptopImage}
        />
        <video playsInline autoPlay muted loop className={styles.video}>
          <source src="/images/klei/laptop-video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
