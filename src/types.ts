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

export interface IVideoComponentProps {
  src: string;
}

export interface IButtonProps {
  text: string; 
  onClick?: () => void;
  href?: string; 
  color?: string; 
  Icon?: IconType; 
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
}