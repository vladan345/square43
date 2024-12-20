"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import styles from "./styles/Slider.module.css";

function Slider() {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      breakpoints: {
        "(max-width: 767px)": {
          slides: {
            perView: 1,
            spacing: 20,
          },
        },
      },
      dragSpeed: 0.5,
      slides: {
        perView: 3,
        spacing: 60,
      },
    },
    [],
  );

  return (
    <div className={styles.Slider}>
      <div className={styles.stripe}></div>
      <div className="keen-slider" ref={sliderRef}>
        {Array.from({ length: 7 }).map((_, idx) => (
          <div className="keen-slider__slide flex justify-center" key={idx}>
            <Image
              width={650}
              height={800}
              src={`/images/northprim/${idx + 1}.png`}
              alt="Shirt 7"
              className={styles.shirt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
