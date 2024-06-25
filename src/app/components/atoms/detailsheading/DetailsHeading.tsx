import React from "react";
import styles from "./detailsheading.module.scss";
import AOSWrapper from "../aoswrapper/AosWrapper";
import { DetailsHeadingProps } from "@/utilities/types";

const DetailsHeading = ({ title, date_unix }: DetailsHeadingProps) => {
  return (
    <AOSWrapper>
      <div className={styles.heading}>
        <h2 data-aos="fade-up" data-aos-duration="400" data-aos-offset="0">
          {title.toLocaleUpperCase()}
        </h2>
        <h4
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-offset="0"
          className={styles.date}
        >
          {date_unix
            ? new Date(date_unix * 1000)
                .toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
                .toLocaleUpperCase()
            : null}
        </h4>
      </div>
    </AOSWrapper>
  );
};

export default DetailsHeading;
