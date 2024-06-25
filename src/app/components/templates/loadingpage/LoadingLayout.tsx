import React from "react";
import styles from "./loadinglayout.module.scss";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { LayoutProps } from "@/utilities/types";

const LoadingLayout = ({
  sectionId,
  className,
  children,
}: LayoutProps) => {
  return (
    <Layout id={sectionId} className={`${styles.section} ${className}`}>
      <Content className="container">
        {children}
      </Content>
    </Layout>
  );
};

export default LoadingLayout;
