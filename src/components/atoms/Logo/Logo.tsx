"use client";
import React from "react";
import styles from "../Logo/logo.module.scss";
import SpaceXLogo from "../../../assets/spacex-logo.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
      <Link href="/">
    <div title="home" className={styles.logo}>
        <Image
          src={SpaceXLogo}
          width={500}
          height={500}
          alt="SpaceX"
          priority
          draggable={false}
        />
      </div>
    </Link>
  );
};

export default Logo;
