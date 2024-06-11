import React from "react";
import HomeLayout from "@/components/templates/homepage/HomeLayout";
import Heading from "@/components/atoms/mainheading/MainHeading";
import ScrollDownBtn from "@/components/atoms/scrolldownbtn/ScrollDownBtn";
import ScrollUpBtn from "@/components/atoms/scrollupbtn/ScrollUpBtn";
import NavBar from "@/components/organisms/navbar/Navbar";

const Home = () => (
  <>
  <NavBar navbarFor="home"/>
    <HomeLayout sectionId="home" className="titleSectionBg">
      <Heading
        subtitle="Welcome to"
        title="SpaceX Launches"
        subtitle2="Explore the latest space missions"
        position="left"
      />
      <ScrollDownBtn scrollTo="about"/>
    </HomeLayout>
    <HomeLayout sectionId="about" className="aboutSectionBg">
      <Heading
        subtitle="About"
        title="SpaceX Launches"

        position="right"
      />
      <ScrollDownBtn scrollTo="launches"/>
    </HomeLayout>
    <HomeLayout sectionId="launches" className="launchesSectionBg">
      <Heading
        subtitle="Checkout All"
        title="Launches"
        position="center"
      />
      <ScrollUpBtn/>
    </HomeLayout>
  </>
);

export default Home;
