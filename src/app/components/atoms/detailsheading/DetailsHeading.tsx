import React from "react";
import styles from "./detailsheading.module.scss";

const DetailsHeading = () => {
  return (
    <div className={styles.heading}>
      <h4 className={styles.date}>JUNE 6, 2024</h4>
      <h2>Starship`s Fourth Flight Test</h2>
    </div>
  );
};

export default DetailsHeading;
