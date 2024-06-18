import { Col, Row } from "antd";
import React from "react";
import styles from "./launcheslist.module.scss";
import LaunchCard from "@/components/molecules/launchcard/LaunchCard";

const LaunchesList = () => {
  return (
    <Row className={styles.launches}>
      <Col span={12}><LaunchCard/></Col>
      <Col span={12}><LaunchCard/></Col>
      <Col span={12}><LaunchCard/></Col>
      <Col span={12}><LaunchCard/></Col>
    </Row>
  );
};

export default LaunchesList;
