"use client";
import React from "react";
import MainHeading from "./components/atoms/mainheading/MainHeading";
import HomeLayout from "./components/templates/homepage/HomeLayout";
import Navbar from "./components/organisms/navbar/Navbar";
import { PuffLoader } from "react-spinners";
import LoadingLayout from "./components/templates/loadingpage/LoadingLayout";
import Logo from "./components/atoms/logo/Logo";

const loading = () => {
  return (
    <LoadingLayout sectionId="loading" className="starsBg">
      <Navbar />
      <PuffLoader
        color="white"
        loading={true}
        size={150}
        className="center-item-absolute"
      />
      {/* <Logo className="center-item-absolute resize-300-300"/> */}
    </LoadingLayout>
  );
};

export default loading;
