import React from "react";
import styles from "./launchdescription.module.scss";
interface LaunchDescriptionProps {
  children: React.ReactNode;
}

const LaunchDescription = ({ children }: LaunchDescriptionProps) => {
  return <div className={styles.launchdetails}>{children}</div>;
};

export default LaunchDescription;
