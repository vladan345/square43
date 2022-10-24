import styles from "../styles/component-css/Spinner.module.css";

function Spinner(props) {
  return (
    <div
      className={`${styles.Spinner} ${
        props.visible ? styles.isOpen : styles.fadeout
      }`}
    >
      <div className={styles.spinnerSquare}>
        <span className={styles.fill}></span>
      </div>
    </div>
  );
}

export default Spinner;
