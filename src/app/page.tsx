import React from "react";
import HomeLayout from "@/components/templates/homepage/HomeLayout";
import Heading from "@/components/atoms/mainheading/MainHeading";
import ScrollDownBtn from "@/components/atoms/scrolldownbtn/ScrollDownBtn";
import ScrollUpBtn from "@/components/atoms/scrollupbtn/ScrollUpBtn";
import NavBar from "@/components/organisms/navbar/Navbar";
import LaunchesStats from "@/components/organisms/launchesstats/LaunchesStats";
import { Button } from "antd";
import LearnButton from "@/components/atoms/learnbutton/LearnButton";
import LaunchesList from "@/components/organisms/launcheslist/LaunchesList";
import LaunchesLayout from "@/components/templates/homepage/LaunchesLayout";

const Home = () => (
  <>
    <NavBar navbarFor="home" />
    <HomeLayout sectionId="home" className="titleSectionBg">
      <Heading
        subtitle="Welcome to"
        title="SpaceX Launches"
        subtitle2="Explore the latest space missions"
        position="left"
        button={<LearnButton href="#about" text="Learn More" />}
      />
      <ScrollDownBtn scrollTo="about" />
    </HomeLayout>
    <HomeLayout sectionId="about" className="aboutSectionBg">
      <LaunchesStats />
      <Heading subtitle="About" title="SpaceX Launches" position="right" />
      <ScrollDownBtn scrollTo="launches" />
    </HomeLayout>
    <LaunchesLayout sectionId="launches" className="starsBg">
      <LaunchesList />
      <ScrollUpBtn />
    </LaunchesLayout>
  </>
);

export default Home;
