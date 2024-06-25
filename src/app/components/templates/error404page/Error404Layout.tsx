import React from "react";
import styles from "./error404layout.module.scss";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { LayoutProps } from "@/utilities/types";

const Error404Layout = ({
  sectionId,
  className,
  children,
}: LayoutProps) => {
  return (
    <Layout id={sectionId} className={`${styles.section} ${className}`}>
      <Content className="container">
        <div>{children}</div>
      </Content>
    </Layout>
  );
};

export default Error404Layout;
