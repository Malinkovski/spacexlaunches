import { Col, Row } from "antd";
import React from "react";
import styles from "./launcheslist.module.scss";
import LaunchCard from "../../molecules/launchcard/LaunchCard";
import img2 from "../../../../assets/img1.jpg";
import img3 from "../../../../assets/img2.jpg";
import img4 from "../../../../assets/img3.jpg";
import img5 from "../../../../assets/img4.jpg";
import img6 from "../../../../assets/img5.jpg";
import img7 from "../../../../assets/img6.jpg";

const LaunchesList = () => {
  return (
    <Row gutter={[32, 32]} className={styles.launches}>
      <Col xs={24} sm={24} md={24} lg={12} className={styles.col}>
        <LaunchCard
          title="STARLINK LAUNCH 253"
          date="24.12.2023"
          img={img2}
          link="launch-details"
          alt="starlink launch"
        />
      </Col>
      <Col xs={24} sm={24} md={24} lg={12} className={styles.col}>
        <LaunchCard
          title="STARLINK LAUNCH 153"
          date="3.2.2024"
          img={img4}
          link="launch-details"
          alt="starlink launch"
        />
      </Col>
      <Col xs={24} sm={24} md={24} lg={12} className={styles.col}>
        <LaunchCard
          title="STARLINK LAUNCH 53"
          date="5.4.2024"
          img={img7}
          link="launch-details"
          alt="starlink launch"
        />
      </Col>
      <Col xs={24} sm={24} md={24} lg={12} className={styles.col}>
        <LaunchCard
          title="STARLINK LAUNCH 93"
          date="1.2.2024"
          img={img3}
          link="launch-details"
          alt="starlink launch"
        />
      </Col>
      <Col xs={24} sm={24} md={24} lg={12} className={styles.col}>
        <LaunchCard
          title="STARLINK LAUNCH 93"
          date="1.1.2024"
          img={img5}
          link="launch-details"
          alt="starlink launch"
        />
      </Col>
      <Col xs={24} sm={24} md={24} lg={12} className={styles.col}>
        <LaunchCard
          title="STARLINK LAUNCH 93"
          date="15.2.2024"
          img={img6}
          link="launch-details"
          alt="starlink launch"
        />
      </Col>
    </Row>
  );
};

export default LaunchesList;