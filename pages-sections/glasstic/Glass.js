import styles from "../../styles/section-css/glasstic/Glass.module.css";
import Image from "next/image";

function Glass() {
  return (
    <div className={styles.Glass}>
      <div className="wrapper">
        <div className={styles.row}>
          <div className={styles.card}>
            <Image
              src="/images/glasstic/glasses.svg"
              alt="glass icon"
              width={140}
              height={140}
            />
            <h3>Plastika kao staklo</h3>
            <p>
              Izgled, upotreba i održavanje Glasstic čaša je identično kao kod
              staklenih, ali naše čaše obezbeđuju lakše i brže čišćenje i
              prenošenje.
            </p>
          </div>
          <div className={styles.card}>
            <Image
              src="/images/glasstic/bank.svg"
              alt="bank icon"
              width={140}
              height={140}
            />
            <h3>Ušteda i do 50%</h3>
            <p>
              Glasstic čaše Vam donose i do 50% uštede na dugoročnom planu,
              pošto se ne mogu razbiti, a 5X duže traju u proseku od staklenih
              čaša.
            </p>
          </div>
          <div className={styles.card}>
            <Image
              src="/images/glasstic/secure.svg"
              alt="secure icon"
              width={140}
              height={140}
            />
            <h3>Bezbednost</h3>
            <p>
              Sa Glasstic čašom ste 100% bezbedni i gradite visoku reputaciju
              poslovanja. Staklena čaša može da nanese štetu lokalu ili
              mušteriji.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Glass;
