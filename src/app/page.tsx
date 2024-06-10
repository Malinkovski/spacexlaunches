import React from "react";
import HomeLayout from "../components/templates/homepage/HomeLayout";
import Heading from "@/components/atoms/MainHeading/MainHeading";

const Home = () => (
  <>
    <HomeLayout className="titleSectionBg">
      <Heading
        subtitle="Welcome to"
        title="SpaceX Launches"
        subtitle2="Explore the latest space missions"
        position="left"
      />
    </HomeLayout>
    <HomeLayout className="aboutSectionBg">
      <Heading
        subtitle="Welcome to"
        title="SpaceX Launches"
        subtitle2="Explore the latest space missions"
        position="right"
      />
    </HomeLayout>
    <HomeLayout className="launchesSectionBg">
      <Heading
        subtitle="Welcome to"
        title="SpaceX Launches"
        subtitle2="Explore the latest space missions"
        position="center"
      />
    </HomeLayout>
  </>
);

export default Home;
