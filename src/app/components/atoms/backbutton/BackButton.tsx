import Link from "next/link";
import React from "react";
import styles from "./backbutton.module.scss";
import { LeftOutlined } from "@ant-design/icons";

interface BackButtonProps {
  href: string;
  text: string;
}

const BackButton = ({ href, text }: BackButtonProps) => {
  return (
    <Link className={`${styles.button} link`} href={href}>
      <LeftOutlined />
      {text.toUpperCase()}
    </Link>
  );
};

export default BackButton;
