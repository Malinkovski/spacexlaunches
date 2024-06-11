import React from "react";
import { DownOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "./scrolldownbtn.module.scss";

interface ScrollDownBtnProps {
    scrollTo: string;
}

const ScrollDownBtn = ({scrollTo}: ScrollDownBtnProps) => {
  return (
    <Link href={`#${scrollTo}`}>
      <div className={styles.down}>
        <DownOutlined />
      </div>
    </Link>
  );
};

export default ScrollDownBtn;
