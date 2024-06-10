import { Footer } from "antd/es/layout/layout";
import React from "react";
import styles from "./navfooter.module.scss";

interface CustomFooterProps {
  text: string;
}

const NavFooter = ({ text }: CustomFooterProps) => {
  return <footer className={styles.customFooter}>{text}</footer>;
};

export default NavFooter;
