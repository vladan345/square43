import styles from "@/styles/component-css/Spinner.module.css";
import { useLoading } from "@/utils/hooks/LoadingContext";

function Spinner() {
  const { loading } = useLoading();
  return (
    <div
      className={`${styles.Spinner} ${
        loading ? styles.isOpen : styles.fadeout
      }`}
    >
      <div className={styles.spinnerSquare}>
        <span className={styles.fill}></span>
      </div>
    </div>
  );
}

export default Spinner;
