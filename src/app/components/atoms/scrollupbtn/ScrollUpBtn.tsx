"use client";

import React from "react";
import { UpOutlined } from "@ant-design/icons";
import styles from "./scrollupbtn.module.scss";

const ScrollUpBtn = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.up} onClick={scrollToTop}>
      <UpOutlined />
    </div>
  );
};

export default ScrollUpBtn;
