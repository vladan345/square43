import React from "react";
import Link from "next/link";
import styles from "../styles/component-css/ServiceCard.module.css";
import Image from "next/image";

function ServiceModule(props) {
  return (
    <div className={styles.ServiceModule}>
      <div className="top">
        <h2 className={styles.title}>{props.service.name}</h2>
        {/* <p className={styles.description}>{props.service.description}</p> */}
        <ul className={styles.list}>
          {props.service.list.map((listItem, key) => (
            <li className={styles.listItem} key={key}>
              {listItem}
            </li>
          ))}
        </ul>
      </div>
      <Link href={"/services/" + props.service.id} className={styles.link}>
        view projects{" "}
        <div className={styles.icon}>
          <Image
            src="/images/arrow-white-r.svg"
            alt="arrow icon right"
            width={40}
            height={40}
          />
        </div>
      </Link>
    </div>
  );
}

export default ServiceModule;
