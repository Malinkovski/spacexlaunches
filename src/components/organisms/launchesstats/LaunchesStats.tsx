"use client";

import React, { useEffect } from "react";
import styles from "./launchesstats.module.scss";
import CountUp from "react-countup";
import "aos/dist/aos.css";
import AOS from "aos";

const LaunchesStats = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <ul className={styles.detailsContainer}>
      <li id="numbers1">
        <span className={styles.number}>
          <CountUp delay={2} end={321} duration={6} /> {/*//!display on scroll when visible */}
        </span>
        <h4 data-aos-anchor="#numbers1" data-aos="fade-up">
          total&nbsp;launches
        </h4>
      </li>
      <li id="numbers2">
        <span className={styles.number}>
          <CountUp delay={2} end={254} duration={5} />
        </span>
        <h4 data-aos-anchor="#numbers2" data-aos="fade-up">
          total&nbsp;landings
        </h4>
      </li>
      <li id="numbers3">
        <span className={styles.number}>
          <CountUp delay={2} end={184} duration={7} />
        </span>
        <h4 data-aos-anchor="#numbers3" data-aos="fade-up">
          reflights
        </h4>
      </li>
    </ul>
  );
};

export default LaunchesStats;
