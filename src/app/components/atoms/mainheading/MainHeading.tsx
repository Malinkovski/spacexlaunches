import React from "react";
import styles from "./mainheading.module.scss";
import AOSWrapper from "../aoswrapper/AosWrapper";
import { MainHeadingProps } from "@/utilities/types";

const MainHeading = ({
  subtitle,
  title,
  subtitle2,
  position = "left",
  button,
}: MainHeadingProps) => {
  return (
    <>
      <AOSWrapper>
        <div
          className={`${styles.heading} ${styles[position]}`}
        >
          <h3 data-aos="fade-up" data-aos-duration="400">{subtitle}</h3>
          <h1 data-aos="fade-up" data-aos-duration="500">{title}</h1>
          <h4 data-aos="fade-up" data-aos-duration="600">{subtitle2}</h4>
          <div data-aos="fade-up" data-aos-duration="700">{button}</div>
        </div>
      </AOSWrapper>
    </>
  );
};

export default MainHeading;
