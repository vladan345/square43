import React from "react";
import Image from "next/image";

function Taglines() {
  return (
    <div style={{ padding: "120px 0" }}>
      <div className="wrapper">
        <Image
          src="/images/northprim/taglines.svg"
          alt="Tagline placeholder"
          width={1360}
          height={720}
        />
      </div>
    </div>
  );
}

export default Taglines;
