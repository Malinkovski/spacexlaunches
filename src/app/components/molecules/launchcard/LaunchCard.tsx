import { Button, Card } from "antd";
import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./launchcard.module.scss";
import Meta from "antd/es/card/Meta";
import LearnButton from "../../atoms/learnbutton/LearnButton";

interface LaunchCardProps {
  title: string;
  date: string;
  img: StaticImageData | string;
  alt: string;
  link: string;
}

const LaunchCard = ({ title, date, img, alt, link }: LaunchCardProps) => {
  return (
    <Card
      data-aos="fade-up"
      data-aos-duration="300"
      data-aos-once="true"
      className={styles.card}
      cover={
        <div className={styles.imageContainer}>
          <Image
            width={900}
            height={900}
            quality={100}
            alt={alt}
            src={img}
            className={styles.image}
          />
        </div>
      }
    >
      <div className={styles.date}>
        <h4 data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
          {date.toLocaleUpperCase()}
        </h4>
      </div>
      <Meta
        title={
          <h4 data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
            {title.toLocaleUpperCase()}
          </h4>
        }
        description={<LearnButton className={styles.button} text="Learn More" href={link}></LearnButton>}
      />
    </Card>
  );
};

export default LaunchCard;
