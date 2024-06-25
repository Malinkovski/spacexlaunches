import { StaticImageData } from "next/image";
import { ParsedUrlQuery } from "querystring";

export interface SocialMediaIconProps {
  name:
    | "wikipedia"
    | "reddit"
    | "space article"
    | "reddit media"
    | "reddit campaign"
    | "reddit recovery";
}
export interface LaunchMediaProps {
  images?: string[];
  socialMediaLinks?: {
    name: SocialMediaIconProps["name"];
    link?: string;
  }[];
}

export interface LaunchParams extends ParsedUrlQuery {
  id: string;
}

export interface LearnButtonProps {
  className?: string;
  text: string;
  href?: string;
  title?: string;
}

export interface MainHeadingProps {
  subtitle: string;
  title: string;
  subtitle2?: string;
  position?: "left" | "right" | "center";
  button?: React.ReactNode;
}

export interface LaunchCardProps {
  title: string;
  date: string;
  img: StaticImageData | string;
  alt: string;
  link: string;
}

export interface MenuItemProps {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}

export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  sectionId?: string;
}

export interface UseLoadMoreProps {
  loadMoreDivRef: React.RefObject<HTMLDivElement>;
  setNumberOfItems: React.Dispatch<React.SetStateAction<number>>;
}

export interface BackButtonProps {
  href: string;
  text: string;
}

export interface DetailsHeadingProps {
  title: string;
  date_unix?: number;
}

export interface ErrorMessageProps {
  errorName: string;
  errorMessage: string;
}

export interface LogoProps {
  className?: string;
}

export interface ScrollDownBtnProps {
  scrollTo: string;
}

export interface VideoPlayerProps {
  src: string;
  title: string;
}

export interface CarouselImagesProps {
  images: string[];
}
export interface MainFooterProps {
  text?: string;
}

export interface LaunchDescriptionProps {
  text: string;
}

export interface CustomFooterProps {
  text: string;
}

export interface NavbarProps {
  navbarFor?: "home" | "details";
}

export interface DefaultChildrenProps {
  children: React.ReactNode;
}
