import React from "react";
import Navbar from "./components/organisms/navbar/Navbar";
import HomeLayout from "./components/templates/homepage/HomeLayout";
import MainHeading from "./components/atoms/mainheading/MainHeading";
import LearnButton from "./components/atoms/learnbutton/LearnButton";
import Error404Layout from "./components/templates/error404page/Error404Layout";

const not_found = () => {
  return (
    <Error404Layout sectionId="error404" className="starsBg">
      <Navbar />
      <MainHeading title="Page not found" subtitle="404" position="center" button={<LearnButton text="Back to Homepage" href="/"/>}/>
    </Error404Layout>
  );
};

export default not_found;
