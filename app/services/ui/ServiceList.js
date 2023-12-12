"use client";

import React, { useEffect } from "react";
import ServiceModule from "@/components/ServiceCard";
import { useLoading } from "@/utils/hooks/LoadingContext";
import styles from "./styles/ServiceList.module.css";

export default function Page({ services }) {
  const { setLoading } = useLoading();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={`${styles.Services} serviceList`}>
      <div className={styles.wrapper}>
        <h1
          style={{
            animation: `fadeInRight 1s forwards ease-in-out`,
            opacity: 0,
          }}
          className={styles.title}
        >
          Let us paint you a picture.
        </h1>
        <p className={styles.subheading}>
          Our services range from all things digital to artistry you can feel.
        </p>
        <section className={styles.section}>
          {services && (
            <>
              {services.map((service, key) => {
                return <ServiceModule key={key} service={service} />;
              })}
            </>
          )}
        </section>
      </div>
    </div>
  );
}
