import React, { useEffect, useState } from "react";
import ServiceModule from "../../components/ServiceCard";
import Spinner from "../../components/Spinner";
import { getAllServices } from "../../utils/data/getData";

import styles from "../../styles/section-css/services/ServiceList.module.css";

function ServiceList() {
  const [services, setServices] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setServices(getAllServices());
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className={styles.Services}>
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
          {isLoading ? (
            <Spinner />
          ) : (
            services.map((service, key) => {
              let counter = 300;
              const style = {
                animation: `fadeInUp 1s ${
                  counter * key
                }ms forwards ease-in-out`,
                opacity: 0,
              };
              return (
                <ServiceModule key={key} service={service} style={style} />
              );
            })
          )}
          <div className={styles.helper}></div>
        </section>
      </div>
    </div>
  );
}

export default ServiceList;
