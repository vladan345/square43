import React from "react";
import Image from "next/image";
import styles from "../styles/component-css/Square.module.css";

function Square(props) {
  return (
    <div className={styles.square}>
      <Image
        src={props.image}
        alt="Square 43 studio"
        width={560}
        height={props.height}
        priority
      />
    </div>
  );
}

export default Square;
