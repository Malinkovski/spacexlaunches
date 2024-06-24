"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "./launchesstats.module.scss";
import CountUp from "react-countup";
import { useSuspenseQuery } from "@apollo/client";
import "aos/dist/aos.css";
import { LAUNCH_STATS_QUERY } from "../../../../graphql/queries";
import { GetPastLaunchesQuery } from "../../../../graphql/generated/graphql";
import ErrorMessage from "../../atoms/error/ErrorMessage";

const LaunchesStats = () => {
  //watch whenever component is in client view
  const ref = useRef<HTMLUListElement>(null);
  const [isVisible, setIsVisible] = useState(false);
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

  const { data, error } =
    useSuspenseQuery<GetPastLaunchesQuery>(LAUNCH_STATS_QUERY);

  let totalLaunches = data?.launches?.length ?? 0;
  //!for some reason in the spacex database all the launch_success values are null
  //let totalLandings = data?.launches?.filter((launch) => launch?.launch_success).length ?? 0;
  let totalLandings = 172;
  let totalReflights = 144;

  if (error) {
    console.error("Error fetching launch stats data:", error);
    return <ErrorMessage errorName={error.name} errorMessage={error.message} />;
  }

  return (
    <ul className={styles.detailsContainer} ref={ref}>
      <li id="numbers1">
        <span className={styles.number}>
          {isVisible && <CountUp end={totalLaunches} duration={4} />}
        </span>
        <h4 data-aos-anchor="#numbers1" data-aos="fade-up">
          total&nbsp;launches
        </h4>
      </li>
      <li id="numbers2">
        <span className={styles.number}>
          {isVisible && <CountUp end={totalLandings} duration={3} />}
        </span>
        <h4 data-aos-anchor="#numbers2" data-aos="fade-up">
          total&nbsp;landings
        </h4>
      </li>
      <li id="numbers3">
        <span className={styles.number}>
          {isVisible && <CountUp end={totalReflights} duration={5} />}
        </span>
        <h4 data-aos-anchor="#numbers3" data-aos="fade-up">
          reflights
        </h4>
      </li>
    </ul>
  );
};

export default LaunchesStats;
