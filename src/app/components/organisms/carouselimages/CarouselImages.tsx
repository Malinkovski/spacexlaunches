import React from "react";
import styles from "./carouselimages.module.scss";
import { Carousel } from "antd";
import Image from "next/image";

interface CarouselImagesProps {
  images: string[];
}

const CarouselImages = ({ images }: CarouselImagesProps) => {
  return (
    <div className={styles.carousel}>

    <Carousel arrows infinite={true}>
      {images.map((image, index) => (
        <div key={index}>
          <Image
            width={1920}
            height={1080}
            quality={100}
            src={image}
            alt={`launch-example-${index}`}
            className={styles.carouselImg}
            />
        </div>
      ))}
    </Carousel>
      </div>
  );
};

export default CarouselImages;