import styles from "./styles/Scheme.module.css";
import Image from "next/image";

function Scheme() {
  return (
    <div className={styles.Scheme}>
      <div className="wrapper">
        <Image
          src="/images/jove/rasklop.webp"
          alt="jar scheme"
          width={908}
          height={704}
          className="tegla"
        />
      </div>
    </div>
  );
}

export default Scheme;
