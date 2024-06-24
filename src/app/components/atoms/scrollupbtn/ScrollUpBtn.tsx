"use client";

import React, { useEffect, useState } from "react";
import { UpOutlined } from "@ant-design/icons";
import styles from "./scrollupbtn.module.scss";

const ScrollUpBtn = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      if (window.scrollY > window.innerHeight * 1.5) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", checkScrollPosition);

    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return showButton ? (
    <div className={styles.up} onClick={scrollToTop}>
      <UpOutlined />
    </div>
  ) : null;
};

export default ScrollUpBtn;
