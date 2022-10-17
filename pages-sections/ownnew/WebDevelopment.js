import React, { useState } from "react";

import styles from "../../styles/section-css/ownnew/WebDevelopment.module.css";
import Image from "next/image";
import stylesScreen from "../../styles/section-css/ownnew/screen.module.css";

import { inspectText } from "./inspectText";

function WebDevelopment() {
  const [selected, setSelected] = useState([{ id: "", text: "" }]);

  const displayCode = (event) => {
    event.stopPropagation();
    const id = event.currentTarget.id;
    setSelected(inspectText.filter((section) => section.id === id));
  };
  const clearCode = () => {
    setSelected([{ id: "", text: "" }]);
  };
  return (
    <div className={styles.WebDevelopment}>
      <div className={styles.backgroundColor}></div>
      <div className={styles.wireframe}>
        <div className="wrapper">
          <div className={styles.wireframeWrap}>
            <div className={`${styles.col} ${styles.left}`}>
              <h2 className={styles.title}>Web Development</h2>
              <p className={styles.description}>
                Simple structure to keep it intuitive is extremely important,
                but the flow is key.
              </p>
              <p>
                The website structure needed to accommodate different types of
                visitors, depending on whether they are a broker, buyer or a
                builder. This is why we made it so easy to navigate and find
                just the right sections.
              </p>
            </div>
            <div className={`${styles.col} ${styles.right}`}>
              <Image
                src="/images/ownnew/wireframe.svg"
                alt="OwnNew website wireframe"
                width={720}
                height={663}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className={styles.inspectWrap}>
          <div className={stylesScreen.screen}>
            <div
              className={`${stylesScreen.header} ${stylesScreen.inspect}`}
              id="header"
              onMouseOver={displayCode}
              onMouseLeave={clearCode}
            >
              <div className={stylesScreen.screenWrap}>
                <h3
                  id="heading1"
                  className={`${stylesScreen.title} ${stylesScreen.inspect}`}
                  onMouseOver={displayCode}
                  onMouseLeave={clearCode}
                >
                  For Brokers
                </h3>
                <div className={stylesScreen.links}>
                  <p
                    className={`${stylesScreen.link} ${stylesScreen.inspect}`}
                    id="hLink1"
                    onMouseOver={displayCode}
                    onMouseLeave={clearCode}
                  >
                    Visit For Buyers Page
                  </p>
                  <p
                    className={`${stylesScreen.link} ${stylesScreen.inspect}`}
                    id="hLink2"
                    onMouseOver={displayCode}
                    onMouseLeave={clearCode}
                  >
                    Visit For Builders Page
                  </p>
                </div>
              </div>
            </div>
            <div className={stylesScreen.lending}>
              <div className={stylesScreen.screenWrap}>
                <h4
                  className={`${stylesScreen.heading} ${stylesScreen.inspect}`}
                  id="headline1"
                  onMouseOver={displayCode}
                  onMouseLeave={clearCode}
                >
                  A new way to fund high-LTV lending
                </h4>
                <p
                  className={`${stylesScreen.description} ${stylesScreen.inspect}`}
                  id="paragraph1"
                  onMouseOver={displayCode}
                  onMouseLeave={clearCode}
                >
                  Own New creates better new-build mortgages by reducing a
                  lender&apos;s risk behind the scenes, enabling them to:
                </p>
                <ul
                  className={`${stylesScreen.list} ${stylesScreen.inspect}`}
                  id="paragraph1"
                  onMouseOver={displayCode}
                  onMouseLeave={clearCode}
                >
                  <li className={stylesScreen.listItem}>
                    Provide 95% LTV mortgages at lower risk
                  </li>
                  <li className={stylesScreen.listItem}>
                    Offer more competitive mortgage rates
                  </li>
                  <li className={stylesScreen.listItem}>
                    Lend to a wider range of people buying any new home
                  </li>
                </ul>
              </div>
              <div
                id="image1"
                onMouseOver={displayCode}
                onMouseLeave={clearCode}
                className={`${stylesScreen.firstImage} ${stylesScreen.inspect}`}
              >
                <Image
                  src="/images/ownnew/screen1.webp"
                  alt="Ownnew Brokers page"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className={stylesScreen.how}>
              <div
                id="image2"
                className={`${stylesScreen.secondImage} ${stylesScreen.inspect}`}
                onMouseOver={displayCode}
                onMouseLeave={clearCode}
              >
                <Image
                  src="/images/ownnew/screen2.webp"
                  alt="OwnNew Brokers page"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={stylesScreen.text}>
                <h4
                  className={`${stylesScreen.heading} ${stylesScreen.inspect}`}
                  id="headline2"
                  onMouseOver={displayCode}
                  onMouseLeave={clearCode}
                >
                  How it works
                </h4>
                <p
                  className={`${stylesScreen.description} ${stylesScreen.inspect}`}
                  id="paragraph2"
                  onMouseOver={displayCode}
                  onMouseLeave={clearCode}
                >
                  Housebuilders will refer customers to their new-build broker.
                  The customer then applies to the lender for a standard
                  mortgage using Own New. If approved, they will own 100% of the
                  home and will only transact with the lender.
                </p>
                <p
                  className={`${stylesScreen.description} ${stylesScreen.inspect}`}
                  id="paragraph2"
                  onMouseOver={displayCode}
                  onMouseLeave={clearCode}
                >
                  Own New works in the background to reduce the lender&apos;s
                  risk, enabling them to offer better mortgages. For example
                  pairing lenders with investment banks, which provide top-up
                  funding. The lenders and investors share the risks of these
                  high-LTV mortgages.
                </p>
                <p
                  className={`${stylesScreen.description} ${stylesScreen.inspect}`}
                  id="paragraph2"
                  onMouseOver={displayCode}
                  onMouseLeave={clearCode}
                >
                  Housebuilders contribute to the scheme, paying a small fee on
                  completion of a sale.
                </p>
                <div className={stylesScreen.links}>
                  <p
                    className={`${stylesScreen.link} ${stylesScreen.inspect}`}
                    id="bLink1"
                    onMouseOver={displayCode}
                    onMouseLeave={clearCode}
                  >
                    Visit For Buyers Page
                  </p>
                  <p
                    className={`${stylesScreen.link} ${stylesScreen.inspect}`}
                    id="bLink2"
                    onMouseOver={displayCode}
                    onMouseLeave={clearCode}
                  >
                    Visit For Builders Page
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`${stylesScreen.footer} ${stylesScreen.inspect}`}
              id="footer"
              onMouseOver={displayCode}
              onMouseLeave={clearCode}
            ></div>
          </div>
          <div className={stylesScreen.code}>
            <div className={stylesScreen.topBar}>
              <div
                className={`${stylesScreen.circle} ${stylesScreen.fill}`}
              ></div>
              <div className={stylesScreen.circle}></div>
              <div className={stylesScreen.circle}></div>
            </div>
            <div className={stylesScreen.body}>
              <p className={stylesScreen.heading}>{"/* CSS: */"}</p>
              <p
                className="inspect-code"
                dangerouslySetInnerHTML={{ __html: selected[0].text }}
              ></p>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.wrapper}>
            <div className={styles.bottomText}>
              <p className={styles.bottomDescription}>
                We keep it fair and square: hover over every section to see the
                code used for that specific part!
              </p>
            </div>
            <div className={styles.bottomText}>
              <p className={styles.bottomDescription}>
                Our finished product is more than a well-designed facade,
                though.
              </p>
              <p className={styles.bottomDescription}>
                Every website that we build with our bare hands (and mouses and
                keyboards) is also configured with state-of-the-art analytics
                that enable it to appear right before the people who are looking
                it up!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebDevelopment;
