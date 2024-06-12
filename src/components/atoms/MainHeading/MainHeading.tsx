import React from "react";
import styles from "./mainheading.module.scss";

interface MainHeadingProps {
  subtitle: string;
  title: string;
  subtitle2?: string;
  position?: "left" | "right" | "center";
  button?: React.ReactNode;
}

const MainHeading = ({
  subtitle,
  title,
  subtitle2,
  position = "left",
  button,
}: MainHeadingProps) => {
  return (
    <>
    <div className={`${styles.heading} ${styles[position]}`}>
      <h3>{subtitle}</h3>
      <h1>{title}</h1>
      <h4>{subtitle2}</h4>
      {button}
    </div>
    </>
  );
};

export default MainHeading;