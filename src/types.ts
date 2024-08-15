import { IconType } from "react-icons";

export interface IParagraphsContainerProps {
  paragraphs: string[];
}

export interface ISectionHeader {
  text: string;
}

export interface IImageComponentProps {
  src: string;
  alt: string; 
  className?: string;
}

interface IVideo {
  src: string;
  label: string;
}

export interface IVideoComponentProps {
  video: IVideo;
}

export interface IButtonProps {
  text: string; 
  onClick?: () => void;
  href?: string; 
  color?: string; 
  Icon?: IconType; 
  className?: string;
}

export interface IIconLinkProps {
  href: string;
  Icon: IconType; 
  // icon: React.ReactNode; 
  label: string; 
}

export interface ITarget {
  id: string;
  text: string;
}

export interface INavLinkProps {
  target: ITarget;
  currentSection: string; 
  setCurrentSection: (section: string) => void; 
  setOpenMenu?: (value: boolean) => void;
}

export interface ISectionContainer {
  section: string; 
  children: React.ReactNode;
  // className?: string; 
}

export interface ISectionLinkProps {
  text: string;
  to: string; 
}