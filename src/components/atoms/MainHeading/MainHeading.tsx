import React from "react";
import styles from "./mainheading.module.scss";

interface MainHeadingProps {
  subtitle: string;
  title: string;
  subtitle2?: string;
  position?: "left" | "right" | "center";
}

const MainHeading = ({
  subtitle,
  title,
  subtitle2,
  position = "left",
}: MainHeadingProps) => {
  return (
    <div className={`${styles.heading} ${styles[position]}`}>
      <h3>{subtitle}</h3>
      <h1>{title}</h1>
      <h4>{subtitle2}</h4>
    </div>
  );
};

export default MainHeading;