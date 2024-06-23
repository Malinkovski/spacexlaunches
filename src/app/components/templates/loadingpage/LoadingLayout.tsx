import React from "react";
import styles from "./loadingLayout.module.scss";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

interface Error404LayoutProps {
  sectionId: string;
  className: string;
  children: React.ReactNode;
}

const LoadingLayout = ({
  sectionId,
  className,
  children,
}: Error404LayoutProps) => {
  return (
    <Layout id={sectionId} className={`${styles.section} ${className}`}>
      <Content className="container">
        {children}
      </Content>
    </Layout>
  );
};

export default LoadingLayout;
