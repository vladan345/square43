import { useEffect, useRef } from "react";
import styles from "styles/section-css/distributed-services/Phones.module.css";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Phones() {
  const main = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      gsap.set(".circle", {
        background: "linear-gradient(200deg, #304fe8 5%, #15319d 93%)",
      });
      gsap.to(".circle", {
        scrollTrigger: {
          trigger: ".trigger",
          scrub: true,
          start: "top center",
          end: "70% center",
        },
        background: "linear-gradient(360deg, #304fe8 5%, #15319d 93%)",
      });

      gsap.to([".white", ".blue"], {
        scrollTrigger: {
          trigger: ".trigger",
          scrub: true,
        },
        marginRight: "-20px",
        marginLeft: "-20px",
      });
      mm.add("(max-width: 1350px)", () => {
        gsap.to([".white", ".blue"], {
          scrollTrigger: {
            trigger: ".trigger",
            scrub: true,
          },
          marginRight: "-20px",
          marginLeft: "-20px",
        });
      });
    }, main.current);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.Phones} ref={main}>
      <div className="wrapper trigger">
        <div className={styles.row}>
          <div className={styles.phones}>
            <div className={`${styles.circle} circle`}></div>
            <Image
              src="/images/distributed-services/white-phone.webp"
              alt="Phone mockup"
              width={286}
              height={554}
              className="white"
            />
            <Image
              src="/images/distributed-services/blue-phone.webp"
              alt="Phone mockup"
              width={345}
              height={592}
              className="blue"
            />
          </div>
          <div className={styles.textBox}>
            <p>
              Studies show that more and more visitors use their mobile phones
              to access websites, so having your website fully accessible and
              optimized for mobiles is essential!
            </p>
            <p>
              That being said, no format was left unturned. The entire design
              was fully adapted to be accessed and used via mobile devices, all
              operating systems included.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phones;
