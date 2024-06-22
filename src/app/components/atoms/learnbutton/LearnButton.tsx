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
    <Button title={title || "Learn more"} href={href} className={`${className} ${styles.button}`}>
      <span>{text}</span>
    </Button>
  );
};

export default LearnButton;
