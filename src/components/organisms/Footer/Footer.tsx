import { Footer } from "antd/es/layout/layout";
import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";

interface MainFooterProps {
  text: string;
}

const MainFooter = ({ text }: MainFooterProps) => {
  return (
    <Footer className={styles.footer}>
      <span>{text}</span>
      <Link href="/">PRIVACY POLICY</Link>
    </Footer>
  );
};

export default MainFooter;
