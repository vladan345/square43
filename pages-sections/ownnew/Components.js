import React from "react";
import styles from "../../styles/section-css/ownnew/Components.module.css";
import Image from "next/image";

function Components() {
  return (
    <div className={styles.Components}>
      <div className="wrapper">
        <div className={styles.contentWrap}>
          <div className={styles.paragraphs}>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet non
              sollicitudin arcu integer. Nulla cras pellentesque habitant tortor
              donec bibendum volutpat.
            </p>
            <p className={styles.description}>
              Tincidunt leo sit interdum maecenas leo. Dolor amet convallis
              senectus aliquet turpis amet ultrices sagittis, tincidunt. Sed
              dignissim nulla nisl purus congue.
            </p>
          </div>
          <div className={styles.buttons}>
            <div className={styles.button}>
              <Image
                src="/images/ownnew/button1.svg"
                width={230}
                height={51}
                alt="button state Own new"
              />
            </div>
            <Image
              src="/images/ownnew/button2.svg"
              width={230}
              height={51}
              alt="button state Own new"
            />
            <div className={styles.menuIcons}>
              <div className={styles.menuImage}>
                <Image
                  src="/images/ownnew/menu-icon.svg"
                  width={90}
                  height={90}
                  alt="Own new menu icon"
                />
              </div>
              <Image
                src="/images/ownnew/click.svg"
                width={90}
                height={90}
                alt="Own new menu icon click state"
              />
            </div>
          </div>
          <Image
            src="/images/ownnew/colors.svg"
            width={320}
            height={320}
            alt="Own new color scheme pallette"
          />
        </div>
      </div>
    </div>
  );
}

export default Components;
