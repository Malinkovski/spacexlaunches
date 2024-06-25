import React from "react";
import styles from "./videoplayer.module.scss";
import { VideoPlayerProps } from "@/utilities/types";

const VideoPlayer = ({ src, title }: VideoPlayerProps) => {
  return (
    <div
      className={styles.video}
      data-aos="fade-up"
      data-aos-duration="400"
      data-aos-once="true"
    >
      <iframe
        width="1920"
        height="1080"
        src={src}
        title={`${title} Video`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
