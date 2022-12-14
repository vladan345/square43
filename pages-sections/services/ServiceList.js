import React, { useEffect, useState } from "react";
import ServiceModule from "../../components/ServiceCard";
import { getAllServices } from "../../utils/data/getData";
import { useLoading } from "../../utils/hooks/LoadingContext";
import styles from "../../styles/section-css/services/ServiceList.module.css";

function ServiceList() {
  const [services, setServices] = useState([]);
  const { setLoading } = useLoading();
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

export default ServiceList;
