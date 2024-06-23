import React from "react";
import styles from "./launchdescription.module.scss";
interface LaunchDescriptionProps {
  children: React.ReactNode;
}

const LaunchDescription = ({ children }: LaunchDescriptionProps) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="400"
      data-aos-once="true"
      className={styles.launchdetails}
    >
      {children}
    </div>
  );
};

export default LaunchDescription;
