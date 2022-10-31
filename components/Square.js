import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../styles/component-css/Square.module.css";

function Square(props) {
  const square = useRef();
  useEffect(() => {
    const element = square.current;

    switch (props.state) {
      case 1:
        {
          element.id = "step1";
        }
        break;
      case 2:
        element.id = "step2";
        break;
      case 3:
        element.id = "step3";
        break;
      case 4:
        element.id = "step4";
        break;
      case 5:
        element.id = "step5";
        break;
      case 6:
        element.id = "step6";
        break;
    }
  }, [props.state]);
  return (
    <div className={styles.square} ref={square}>
      <div className="imageWrap">
        <Image
          alt="Square 43 studio"
          src="/images/square4.webp"
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          as="image"
        />
      </div>
    </div>
  );
}

export default Square;
