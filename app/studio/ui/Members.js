"use client";
import React from "react";
import styles from "./styles/Members.module.css";

export default function Members() {
  return (
    <div className={styles.members}>
      <div className={styles.membersDescription}>
        <div className={styles.descriptionLeft}>
          <h3>Members</h3>
          <p>
            All play and no work makes<br></br> Square43 the place of our
            dreams.
          </p>
        </div>
        <div className={styles.descriptionRight}>
          <p>
            With every incoming project, we play around with ideas, concepts and
            everything we know only to demolish our own limits.
          </p>
          <p>
            We value the unique hue every member of our team adds to our group
            portrait.
          </p>
        </div>
      </div>
    </div>
  );
}
