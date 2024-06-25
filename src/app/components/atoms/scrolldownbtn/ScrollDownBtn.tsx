import React from "react";
import { DownOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "./scrolldownbtn.module.scss";
import { ScrollDownBtnProps } from "@/utilities/types";

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
