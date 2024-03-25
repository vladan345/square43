import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./styles/Services.module.css";
import FloatingCard from "@/components/FloatingCard";

export default function Services({ services }) {
  const main = useRef();
  const wrap = useRef();
  const list = useRef();

  useGSAP(
    () => {
      console.log(wrap.current.offsetWidth);
      gsap.to(".list", {
        xPercent:
          -100 + (wrap.current.offsetWidth / list.current.offsetWidth) * 100,
        scrollTrigger: {
          trigger: ".serviceWrap",
          scrub: true,
          start: "top top",
          end: "bottom bottom",
        },
      });
    },
    { scope: main }
  );

  return (
    <div className={styles.Services} ref={main}>
      <div className="wrapper serviceWrap">
        <div className={styles.trigger}>
          <div className={styles.sticky}>
            <div ref={wrap} className={styles.overflowWrap}>
              <div ref={list} className={`${styles.listWrap} list`}>
                {services &&
                  services.map((service) => (
                    <FloatingCard key={service._id} service={service} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
