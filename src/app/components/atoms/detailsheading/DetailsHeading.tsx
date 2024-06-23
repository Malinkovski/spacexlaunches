import React from "react";
import styles from "./detailsheading.module.scss";
import AOSWrapper from "../aoswrapper/AosWrapper";

const DetailsHeading = () => {
  return (
    <AOSWrapper>
      <div className={styles.heading}>
        <h2 data-aos="fade-up" data-aos-duration="400" data-aos-offset="0">
          Starship`s Fourth Flight Test
        </h2>
        <h4
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-offset="0"
          className={styles.date}
        >
          JUNE 6, 2024
        </h4>
      </div>
    </AOSWrapper>
  );
};

export default DetailsHeading;
