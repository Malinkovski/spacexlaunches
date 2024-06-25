import React from "react";
import styles from "./launchdescription.module.scss";
import { LaunchDescriptionProps } from "@/utilities/types";

const LaunchDescription = ({ text }: LaunchDescriptionProps) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="400"
      data-aos-once="true"
      className={styles.launchdetails}
    >
      <p>{text}</p>
    </div>
  );
};

export default LaunchDescription;
