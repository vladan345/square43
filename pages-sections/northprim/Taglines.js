import React from "react";
import Image from "next/image";

function Taglines() {
  return (
    <div style={{ padding: "120px 0" }}>
      <div className="wrapper">
        <video style={{ width: "100%" }} autoPlay muted loop>
          <source src="/images/northprim/taglines.mp4" type="video/mp4" />
        </video>
        {/* <Image
          src="/images/northprim/taglines.svg"
          alt="Tagline placeholder"
          width={1360}
          height={720}
        /> */}
      </div>
    </div>
  );
}

export default Taglines;
