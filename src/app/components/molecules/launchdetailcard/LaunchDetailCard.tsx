import React from "react";
import styles from "./launchdetailcard.module.scss";
import { DefaultChildrenProps } from "@/utilities/types";

const LaunchDetailCard = ({ children }: DefaultChildrenProps) => {
  return <div className={styles.detailcard}>{children}</div>;
};

export default LaunchDetailCard;
