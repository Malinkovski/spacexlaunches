import React from "react";
import styles from "./logo.module.scss";
import SpaceXLogo from "../../../../assets/spacex-logo.png";
import Image from "next/image";
import Link from "next/link";
import { LogoProps } from "@/utilities/types";

const Logo = (
  { className }: LogoProps,
) => {
  return (
      <Link href="/">
    <div title="home" className={`${styles.logo} ${className}`}>
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
