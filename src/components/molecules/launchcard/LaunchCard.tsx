import { Card } from "antd";
import React from "react";
import Image from "next/image";
import Meta from "antd/es/card/Meta";

const LaunchCard = () => {
  return (
    <Card
      hoverable
      cover={
        <Image
            width={500}
            height={500}
            alt="example"
            src=""
        />
      }
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  );
};

export default LaunchCard;
