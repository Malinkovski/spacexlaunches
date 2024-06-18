import React from "react";
import { Layout } from "antd";
import styles from "./homeLayout.module.scss";
import { Content } from "antd/es/layout/layout";

interface HomeLayoutProps {
  children: React.ReactNode;
  className?: string;
  sectionId?: string;

}

const HomeLayout = ({ children, className, sectionId }: HomeLayoutProps) => {
  return (
    <Layout id={sectionId} className={`${styles.section} ${className}`}>
      <Content className="container">
        <div>{children}</div>
      </Content>
    </Layout>
  );
};

export default HomeLayout;

