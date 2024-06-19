import React from "react";
import styles from "./launchdetailcard.module.scss";

interface LaunchDetailCardProps {
  children: React.ReactNode;
}

const LaunchDetailCard = ({ children }: LaunchDetailCardProps) => {
  return <div className={styles.detailcard}>{children}</div>;
};

export default LaunchDetailCard;
