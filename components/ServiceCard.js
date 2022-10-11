import React from "react";
import Link from "next/link";
import styles from "../styles/component-css/ServiceCard.module.css";

function ServiceModule(props) {
  //Transition (doesn't work)
  const styleTarget = (e) => {
    let target = e.target.parentNode;
    target.style.transform = "scale(100)";
  };

  return (
    <div className={styles.ServiceModule} style={props.style}>
      <div className="top">
        <h2 className={styles.title}>{props.service.name}</h2>
        <p className={styles.description}>{props.service.description}</p>
      </div>
      <Link href={"/services/" + props.service.id}>
        <a className={styles.link} onClick={styleTarget}>
          See projects
        </a>
      </Link>
    </div>
  );
}

export default ServiceModule;
