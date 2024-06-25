import React from "react";
import { Layout } from "antd";
import styles from "./launcheslayout.module.scss";
import { Content } from "antd/es/layout/layout";
import { LayoutProps } from "@/utilities/types";

const LaunchLayout = ({ children, className, sectionId }: LayoutProps) => {
  return (
    <Layout id={sectionId} className={`${styles.section} ${className}`}>
      <Content className="container">
        <div>{children}</div>
      </Content>
    </Layout>
  );
};

export default LaunchLayout;

