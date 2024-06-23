import React from "react";
import styles from "./error404layout.module.scss";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

interface Error404LayoutProps {
  sectionId: string;
  className: string;
  children: React.ReactNode;
}

const Error404Layout = ({
  sectionId,
  className,
  children,
}: Error404LayoutProps) => {
  return (
    <Layout id={sectionId} className={`${styles.section} ${className}`}>
      <Content className="container">
        <div>{children}</div>
      </Content>
    </Layout>
  );
};

export default Error404Layout;
