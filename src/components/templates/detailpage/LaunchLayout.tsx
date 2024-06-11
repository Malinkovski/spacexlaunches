"use client";
import React from "react";
import { Layout } from "antd";
import styles from "./launchlayout.module.scss";
import { Content } from "antd/es/layout/layout";

interface LaunchLayoutProps {
  children: React.ReactNode;
  className?: string;
  sectionId?: string;

}

const LaunchLayout = ({ children, className, sectionId }: LaunchLayoutProps) => {
  return (
    <Layout id={sectionId} className={`${styles.section} ${className}`}>
      <Content>
        <div>{children}</div>
      </Content>
    </Layout>
  );
};

export default LaunchLayout;

