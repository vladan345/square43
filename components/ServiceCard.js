import Link from "next/link";
import styles from "./styles/ServiceCard.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLoading } from "../utils/hooks/LoadingContext";
import { InView } from "react-intersection-observer";

function ServiceModule({ service }) {
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
              href={"/services/" + service.slug.current}
              className={`${styles.ServiceModule} ${
                inView && window.innerWidth < 900 ? styles.open : null
              }`}
            >
              <div className={styles.overlay}></div>
              <div className={styles.top}>
                <h2 className={styles.title}>{service.name}</h2>
                <ul className={styles.list}>
                  {service.features.map((listItem, key) => (
                    <li className={styles.listItem} key={key}>
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.link}>
                view projects
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
