import React from "react";
import HomeLayout from "../components/templates/homepage/HomeLayout";
import Heading from "@/components/atoms/mainheading/MainHeading";

const LaunchDetails = () => (
  <>
    <HomeLayout sectionId="home" className="titleSectionBg">
      <Heading
        subtitle="Welcome to"
        title="SpaceX Launches"
        subtitle2="Explore the latest space missions"
        position="left"
      />
    </HomeLayout>
    <HomeLayout sectionId="about" className="aboutSectionBg">
      <Heading
        subtitle="About"
        title="SpaceX Launches"

        position="right"
      />
    </HomeLayout>
    <HomeLayout sectionId="launches" className="launchesSectionBg">
      <Heading
        subtitle="Checkout All"
        title="Launches"
        position="center"
      />
      
    </HomeLayout>
  </>
);

export default LaunchDetails;
