import { SocialMediaIconProps } from "../../../../utilities/types";
import React from "react";
import { FaLink, FaWikipediaW } from "react-icons/fa";
import { FaSquareReddit } from "react-icons/fa6";
import { MdArticle } from "react-icons/md";

const SocialMediaIcon = ({name}: SocialMediaIconProps) => {
  switch (name) {
    case "wikipedia":
      return <FaWikipediaW size={40} />;
    case "reddit":
    case "reddit campaign":
    case "reddit media":
    case "reddit recovery":
      return <FaSquareReddit size={40} />;
    case "space article":
      return <MdArticle size={40} />;
    default:
      return <FaLink size={40} />;
  }
};

export default SocialMediaIcon;