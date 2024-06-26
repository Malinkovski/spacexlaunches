import { Button } from "antd";
import React from "react";
import styles from "./learnbutton.module.scss";
import { LearnButtonProps } from "@/utilities/types";

const LearnButton = ({className, text, href, title}:LearnButtonProps) => {
  return (
    <Button data-aos="fade-up" data-aos-duration="900" data-aos-once="true" title={title || text || "Learn more"} href={href} className={`${className} ${styles.button}`}>
      <span>{text}</span>
    </Button>
  );
};

export default LearnButton;
