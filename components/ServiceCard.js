import React from "react";
import Link from "next/link";
import styles from "../styles/component-css/ServiceCard.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useLoading } from "../utils/hooks/LoadingContext";
import { InView } from "react-intersection-observer";

function ServiceModule(props) {
  const router = useRouter();
  const { setLoading } = useLoading();

  const handleClick = (e) => {
    setLoading(true);
    e.preventDefault();
    let link = e.currentTarget.attributes[1].value;
    setTimeout(() => {
      router.push(link);
    }, 1000);
  };
  return (
    <>
      <InView as="div" threshold={1}>
        {({ inView, ref }) => (
          <div ref={ref}>
            <Link
              onClick={handleClick}
              href={"/services/" + props.service.id}
              className={`${styles.ServiceModule} ${
                inView ? styles.open : null
              }`}
            >
              <div className={styles.overlay}></div>
              <div className={styles.top}>
                <h2 className={styles.title}>{props.service.name}</h2>
                <ul className={styles.list}>
                  {props.service.list.map((listItem, key) => (
                    <li className={styles.listItem} key={key}>
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.link}>
                view projects{" "}
                <div className={styles.icon}>
                  <Image
                    src="/images/arrow-white-r.svg"
                    alt="arrow icon right"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </Link>
          </div>
        )}
      </InView>
    </>
  );
}

export default ServiceModule;
