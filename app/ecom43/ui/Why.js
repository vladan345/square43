import styles from "./styles/Why.module.css";
import Image from "next/image";

function Why() {
  const data = [
    {
      title: "Custom design",
      text: "Why stay confined by the limits of Shopify templates when you can have something tailored just for you?",
    },
    {
      title: "3D graphics",
      text: "Would you like some accessories with your custom tailored suit? Your shop can enter the 3rd dimension with enabled interactive 3D graphics.",
    },
    {
      title: "Lightning speed",
      text: "Optimized shopping experience and even faster development of a fully customizable solution.",
    },
    {
      title: "Top Security",
      text: "Safety comes first and using latest tech is the right way to protect your online shop data.",
    },
    {
      title: "Keep your data",
      text: "In case you already have a Shopify store, we guarantee a seamless transfer by connecting your data through Shopify's API.",
    },
    {
      title: "Support 24/7",
      text: "All questions, issues and bugs tackled ASAP.",
    },
  ];
  return (
    <section className={styles.Why}>
      <div className={styles.gradient}></div>
      <div className={`${styles.wrapper} wrapper`}>
        <h2>What do we bring to the table?</h2>
        <div className={styles.grid}>
          {data.map((card, index) => {
            return (
              <div className={styles.cardWrap} key={index}>
                <div className={styles.overlayT}></div>
                <div className={styles.overlayB}></div>
                <div className={`${styles.card}`}>
                  <img
                    src={`/images/graphic${index + 1}.svg`}
                    alt="graphic icon"
                    // width={176}
                    // height={96}
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
