import styles from "./styles/Why.module.css";
import Image from "next/image";

function Why() {
  const data = [
    {
      title: "Lightning speed",
      text: "Optimized shopping experience and even faster development of a fully customizable solution.",
    },
    {
      title: "Custom design",
      text: "Why stay within the limits of Shopify templates? Customize every aspect of your online shop.",
    },
    {
      title: "3D graphics",
      text: "Your shop can enter the 3rd dimension with enabled interactive 3D graphics",
    },
    {
      title: "Top Security",
      text: "Safety comes first and using latest tech is the right way to protect your online shop data.",
    },
    {
      title: "Custom widgets",
      text: "Special touches to make your shop stand out and drive sales.",
    },
    {
      title: "Top Technology",
      text: "Next.js for the next generation of web stores.",
    },
    {
      title: "Support 24/7",
      text: "All questions, issues and bugs tackled ASAP.",
    },
    {
      title: "Keep your data",
      text: "Already have a Shopify store? No worries, we connect your data through Shopify&apos;s API.",
    },
    {
      title: "Seeing is believing",
      text: "",
    },
  ];
  return (
    <section className={styles.Why}>
      <div className={styles.gradient}></div>
      <div className={`${styles.wrapper} wrapper`}>
        <h2>Why E-com43?</h2>
        <div className={styles.grid}>
          {data &&
            data.map((card, index) => {
              return (
                <div className={styles.cardWrap} key={index}>
                  <div className={styles.overlayT}></div>
                  <div className={styles.overlayB}></div>
                  <div
                    className={`${styles.card} ${
                      index == data.length - 1 ? styles.last : null
                    }`}
                  >
                    <Image
                      src={`/images/graphic${index + 1}.svg`}
                      alt="graphic icon"
                      width={176}
                      height={96}
                    />
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Why;
