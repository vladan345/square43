"use client";
import React, { useState } from "react";
import styles from "@/styles/component-css/Accordion.module.css";
import Image from "next/image";

function Accordion(props) {
  const [opened, setOpened] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    !opened ? setOpened(!opened) : setOpened(!opened);
  };
  return (
    <div
      className={styles.Accordion}
      onClick={handleClick}
      style={{ maxHeight: opened ? "500px" : "90px" }}
    >
      <div className={styles.header}>
        <h3
          className={`${styles.title}`}
          id={`${opened ? styles.opened : null}`}
        >
          {props.title}
        </h3>
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
      <ul>
        {props.content.map((company, key) => (
          <li className={styles.content} key={key}>
            {company}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Accordion;
