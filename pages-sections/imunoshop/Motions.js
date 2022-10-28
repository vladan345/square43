import React from "react";
import styles from "../../styles/section-css/imunoshop/Motions.module.css";
import Image from "next/image";

function Motions() {
  return (
    <div>
      <div className="wrapper">
        <h2 className={styles.title}>Promotional motion graphics</h2>
        <Image
          src="/images/imunoshop/motion1.webp"
          alt="Motion graphic examples Imunoshop"
          width={1360}
          height={760}
        />
      </div>
    </div>
  );
}

export default Motions;
