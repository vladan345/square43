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
              Pastel colors are hardly revolutionary, but it&apos;s their right
              combination that hits the sweet spot. This was our basic color
              palette that paints the perfect picture of coziness and security!
            </p>
            <p className={styles.description}>
              Just to add a special touch to our web design, we transformed the
              classic burger menu symbol into a roof that pops up every time you
              click to expand the menu. Yes, we go into the tiniest details!
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
