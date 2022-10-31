import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../styles/component-css/Square.module.css";

function Square(props) {
  const square = useRef();
  useEffect(() => {
    const element = square.current;
    switch (props.state) {
      case 1:
        element.style.background = "red";
        break;
      case 2:
        element.style.background = "green";
        break;
      case 3:
        element.style.background = "yellow";
        break;
      case 4:
        element.style.background = "blue";
        break;
      case 5:
        element.style.background = "pink";
        break;
      case 6:
        element.style.background = "orange";
        break;
    }
  }, [props.state]);
  return (
    <div className={styles.square} ref={square}>
      {/* <Image
        src={props.image}
        alt="Square 43 studio"
        width={560}
        height={props.height}
        priority
      /> */}
    </div>
  );
}

export default Square;
