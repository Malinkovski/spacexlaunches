import { Button } from "antd";
import React from "react";
import styles from "./learnbutton.module.scss";

interface LearnButtonProps {
  className?: string;
  text: string;
  href?: string;
  title?: string;
}

const LearnButton = ({className, text, href, title}:LearnButtonProps) => {
  return (
    <Button data-aos="fade-up" data-aos-duration="900" data-aos-once="true" title={title || text || "Learn more"} href={href} className={`${className} ${styles.button}`}>
      <span>{text}</span>
    </Button>
  );
};

export default LearnButton;
