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
      <div data-aos="fade-up" data-aos-duration="400" data-aos-once="true" className={styles.carousel}>
        {images.length > 1 && <CarouselImages images={images} />}
      </div>
      <div className={styles.mediaLinks}>
        <h4 data-aos="fade-up" data-aos-duration="400" data-aos-once="true">
          More info:
        </h4>
        <br />
        <h5 data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
          Link:
        </h5>
        <br />
        <br />
        <h5 data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
          Link:
        </h5>
        <br />
        <br />
        <h5 data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
          Link:
        </h5>
        <br />
        <br />
        <h5 data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
          Link:
        </h5>
        <br />
        <br />
      </div>
    </div>
  );
};

export default LaunchMedia;
