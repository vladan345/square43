import styles from "../styles/component-css/Spinner.module.css";

function Spinner() {
  return (
    <div className={styles.Spinner}>
      <div className={styles.spinnerSquare}>
        <span className={styles.fill}></span>
      </div>
    </div>
  );
}

export default Spinner;
