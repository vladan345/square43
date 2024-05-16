"use client";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./styles/Services.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Services({ services }) {
  const main = useRef();
  const [state, setState] = useState(1);
  useGSAP(
    () => {
      gsap.set(".servicesSquare", {
        autoAlpha: 0,
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".servicesWrap",
          start: "top center",
          end: "bottom center",
          onEnter: () =>
            gsap.to(".serviceSquare", { autoAlpha: 1, duration: 0.7 }),
          onLeave: () =>
            gsap.to(".serviceSquare", { autoAlpha: 0, duration: 0.7 }),
          onEnterBack: () =>
            gsap.to(".serviceSquare", { autoAlpha: 1, duration: 0.7 }),
          onLeaveBack: () =>
            gsap.to(".serviceSquare", { autoAlpha: 0, duration: 0.7 }),
        },
      });

      const serviceElements = gsap.utils.toArray(".service");

      serviceElements.forEach((section, i) => {
        gsap.to(section, {
          scrollTrigger: {
            start: "top center",
            end: "bottom center",
            trigger: section,
            onToggle: (self) => self.isActive && setState(i + 1),
          },
        });

        gsap.from(section, {
          autoAlpha: 0,
          x: 50,
          scrollTrigger: {
            start: "top center",
            end: "bottom center",
            trigger: section,
          },
        });
      });
    },
    { scope: main }
  );

  return (
    <div
      className="Services py-[120px] from-[#f8f8f8] to-white bg-gradient-to-b"
      ref={main}
    >
      <div className="wrapper servicesWrap">
        <p className={styles.tag}>Services</p>
        <div className="flex flex-col gap-[60px]">
          {services &&
            services.map((service, index) => (
              <div
                key={service._id}
                className="flex flex-col gap-[40px] md:gap-[30px] service"
              >
                <h3 className={styles.title}>
                  <span className="inline-block mr-[20px]">0{index + 1}</span>
                  {service.name}
                </h3>
                <div className="flex flex-wrap max-w-[620px] items-center gap-x-[15px] md:gap-x-[10px] md:gap-y-[10px]">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex gap-x-[15px] md:gap-x-[10px] items-center"
                    >
                      <span className={styles.feature}>{feature}</span>
                      {index + 1 < service.features.length && (
                        <span className="w-[5px] h-[5px] bg-[#858585]"></span>
                      )}
                    </div>
                  ))}
                </div>
                <Link href="#" className={`readMore`} target="_blank">
                  View projects
                  <div className="icon">
                    <Image
                      src="/images/arrow.svg"
                      alt="Arrow icon"
                      width={40}
                      height={40}
                    />
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
      <div
        className={`${styles.serviceSquare} serviceSquare -translate-y-1/2 w-[400px] h-[400px] lg:w-[250px] lg:h-[250px] right-[100px] lg:right-[60px] md:hidden md:pointer-events-none`}
      >
        {services &&
          services.map((service, index) => (
            <Image
              key={index}
              src={`/images/service-images/${index + 1}.webp`}
              alt={service.name}
              width={400}
              height={400}
              className={`absolute top-0 left-0 w-full h-full ${
                state == index + 1 ? "opacity-1" : "opacity-0"
              }`}
            />
          ))}
      </div>
    </div>
  );
}
