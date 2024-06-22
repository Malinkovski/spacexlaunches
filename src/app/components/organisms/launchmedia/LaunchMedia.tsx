import React from "react";
import styles from "./launchmedia.module.scss";
import CarouselImages from "../../molecules/carouselimages/CarouselImages";

interface LaunchMediaProps {
  images: string[];
  socialMediaLinks?: {
    name: string;
    link: string;
  }[];
}

const LaunchMedia = ({ images, socialMediaLinks }: LaunchMediaProps) => {
  return (
    <div className={styles.media}>
      <div className={styles.carousel}>{images.length > 1 && <CarouselImages images={images} />}</div>
      <div className={styles.mediaLinks}>
        <h4>More info:</h4>
        <br />
        <h5>Link:</h5>
        <br />
        <br />
        <h5>Link:</h5>
        <br />
        <br />
        <h5>Link:</h5>
        <br />
        <br />
        <h5>Link:</h5>
        <br />
        <br />
      </div>
    </div>
  );
};

export default LaunchMedia;
