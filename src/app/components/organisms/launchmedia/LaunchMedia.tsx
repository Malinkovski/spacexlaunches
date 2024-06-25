import React from "react";
import styles from "./launchmedia.module.scss";
import CarouselImages from "../../molecules/carouselimages/CarouselImages";
import Link from "next/link";
import SocialMediaIcon from "../../atoms/socialicon/SocialMediaIcon";
import { LaunchMediaProps, SocialMediaIconProps } from "@/utilities/types";

const LaunchMedia = ({ images, socialMediaLinks }: LaunchMediaProps) => {
  return (
    <div className={styles.media}>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        data-aos-once="true"
        className={styles.carousel}
      >
        {images && images.length > 1 && <CarouselImages images={images} />}
      </div>
      <div
        className={`${images && images.length > 1 && styles.floatRight} ${
          styles.mediaLinks
        }`}
      >
        {socialMediaLinks && (
          <h4 data-aos="fade-up" data-aos-duration="400" data-aos-once="true">
            More info:
          </h4>
        )}
        {socialMediaLinks &&
          socialMediaLinks.map((linkObject, index) => (
            <React.Fragment key={index}>
              <h5
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration={500 + index * 100}
              >
                <Link href={linkObject.link || "#"}>
                  {<SocialMediaIcon name={linkObject.name}/>}{" "}
                  <span className="link">{linkObject.name} launch</span>
                </Link>
              </h5>
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default LaunchMedia;
