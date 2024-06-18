import { Button } from "antd";
import React from "react";
import styles from "./learnbutton.module.scss";

interface LearnButtonProps {
  className?: string;
  text: string;
  href?: string;
}

const LearnButton = ({className, text, href}:LearnButtonProps) => {
  return (
    <Button href={href} className={`${className} ${styles.button}`}>
      <span>{text}</span>
    </Button>
  );
};

export default LearnButton;
