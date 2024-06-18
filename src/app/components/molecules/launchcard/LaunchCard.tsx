import { Button, Card } from "antd";
import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./launchcard.module.scss";
import Meta from "antd/es/card/Meta";
import LearnButton from "../../atoms/learnbutton/LearnButton";

interface LaunchCardProps {
  title: string;
  date: string;
  img: StaticImageData;
  alt: string;
  link: string;
}

const LaunchCard = ({ title, date, img, alt, link }: LaunchCardProps) => {
  return (
    <Card
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
        <h4>{date}</h4>
      </div>
      <Meta
        title={<h4>{title}</h4>}
        description={<LearnButton text="Learn More" href={link}></LearnButton>}
      />
    </Card>
  );
};

export default LaunchCard;
