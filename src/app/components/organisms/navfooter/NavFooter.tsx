import React from "react";
import styles from "./navfooter.module.scss";
import { CustomFooterProps } from "@/utilities/types";

const NavFooter = ({ text }: CustomFooterProps) => {
  return <footer className={styles.customFooter}>{text}</footer>;
};

export default NavFooter;
