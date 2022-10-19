import React, { useState } from "react";
import styles from "../styles/component-css/Accordion.module.css";
import Image from "next/image";

function Accordion(props) {
  const [opened, setOpened] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    !opened ? setOpened(!opened) : setOpened(!opened);
    console.log(opened);
  };
  return (
    <div
      className={styles.Accordion}
      onClick={handleClick}
      style={{ height: opened ? "240px" : "125px" }}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>{props.title}</h3>
        <div
          className="image-wrap"
          style={{
            transform: opened ? "rotateZ(-90deg)" : "rotateZ(0)",
            transition: "0.3s",
          }}
        >
          <Image
            src="/images/arrow.svg"
            alt="arrow right"
            width={40}
            height={40}
          />
        </div>
      </div>
      <p className={styles.content}>{props.content}</p>
    </div>
  );
}

export default Accordion;
