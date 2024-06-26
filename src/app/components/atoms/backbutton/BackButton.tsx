import Link from "next/link";
import React from "react";
import styles from "./backbutton.module.scss";
import { LeftOutlined } from "@ant-design/icons";
import { BackButtonProps } from "@/utilities/types";

const BackButton = ({ href, text }: BackButtonProps) => {
  return (
    <Link data-aos="fade-left" data-aos-duration="500" className={`${styles.button} link`} href={href}>
      <LeftOutlined />
      {text.toUpperCase()}
    </Link>
  );
};

export default BackButton;
