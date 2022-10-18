import React from "react";
import Image from "next/image";
import styles from "../styles/component-css/Square.module.css";
import { DispatchCursor, CURSOR_SHOW, CURSOR_STICKY } from "haspr-cursor";

function Square() {
  const dispatch = DispatchCursor();
  return (
    <div
      data-magnetism
      id="magnetize-me"
      onMouseEnter={() => CURSOR_STICKY(dispatch, "magnetize-me")}
      className={styles.square}
    >
      <Image
        src="/square-temp.webp"
        alt="Square 43 studio"
        width={560}
        height={560}
      />
    </div>
  );
}

export default Square;
