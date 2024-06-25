"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Col, Row } from "antd";
import styles from "./launcheslist.module.scss";
import LaunchCard from "../../molecules/launchcard/LaunchCard";
import img6 from "../../../../assets/img5.jpg";
import { GetAllLaunchesQuery, Launch } from "../../../../graphql/generated/graphql";
import { ALL_LAUNCHES_QUERY } from "../../../../graphql/queries";
import apolloClient from "../../../../graphql/apolloClient";
import ErrorMessage from "../../atoms/error/ErrorMessage";
import { youtubeThumbnailExtract } from "../../../../utilities/youtubeThumbnailExtract";
import Spinner from "../../atoms/spinner/Spinner";
import useLoadMore from "../../../../customhooks/useLoadMore";

const LaunchesList = () => {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [numberOfItems, setNumberOfItems] = useState(8);
  const loadMoreDivRef = useRef<HTMLDivElement>(null);
  useLoadMore({ loadMoreDivRef, setNumberOfItems });

  //https://stackoverflow.com/a/58244389
  const fetchLaunches = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await apolloClient().query<GetAllLaunchesQuery>({
        query: ALL_LAUNCHES_QUERY,
        variables: {
          sort: "launch_date_utc",
          order: "asc",
          limit: numberOfItems,
        },
        fetchPolicy: "network-only"
      });
      setLaunches(data.launches as Launch[]);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }, [numberOfItems]);

  useEffect(() => {
    fetchLaunches();
  }, [numberOfItems, fetchLaunches]);

  if (error) {
    console.error("Error fetching data:", error);
    return <ErrorMessage errorName={error.name} errorMessage={error.message} />;
  }

  return (
    <>
      <Row gutter={[32, 32]} className={styles.launches}>
        {launches.map((launch, index) =>
          !launch?.links?.flickr_images?.[0] &&
          !launch?.links?.video_link ? null : (
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={12}
              className={styles.col}
              key={launch?.id || index}
            >
              <LaunchCard
                title={`${launch?.rocket?.rocket_name} - ${launch?.mission_name}`}
                date={
                  new Date(launch?.launch_date_unix * 1000).toLocaleDateString(
                    "en-US",
                    { year: "numeric", month: "long", day: "numeric" }
                  ) || ""
                }
                img={
                  launch?.links?.flickr_images?.[0] ||
                  (launch?.links?.video_link &&
                    youtubeThumbnailExtract(launch?.links?.video_link)) ||
                  img6
                }
                link={launch?.id ? `launch-details/${launch.id}` : "#launches"}
                alt={`${launch?.rocket?.rocket_name} - ${launch?.mission_name}`}
              />
            </Col>
          )
        )}
      </Row>
      {loading && <Spinner />}
      <div ref={loadMoreDivRef}></div>
    </>
  );
};

export default LaunchesList;
