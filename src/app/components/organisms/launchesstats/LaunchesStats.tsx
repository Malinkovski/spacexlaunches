"use client";

import React, { useEffect, useState, useRef } from "react";
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

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return (
    <ul className={styles.detailsContainer} ref={ref}>
      <li id="numbers1">
        <span className={styles.number}>
          {isVisible && <CountUp end={321} duration={4} />}
        </span>
        <h4 data-aos-anchor="#numbers1" data-aos="fade-up">
          total&nbsp;launches
        </h4>
      </li>
      <li id="numbers2">
        <span className={styles.number}>
          {isVisible && <CountUp end={254} duration={3} />}
        </span>
        <h4 data-aos-anchor="#numbers2" data-aos="fade-up">
          total&nbsp;landings
        </h4>
      </li>
      <li id="numbers3">
        <span className={styles.number}>
          {isVisible && <CountUp end={184} duration={5} />}
        </span>
        <h4 data-aos-anchor="#numbers3" data-aos="fade-up">
          reflights
        </h4>
      </li>
    </ul>
  );
};

export default LaunchesStats;
