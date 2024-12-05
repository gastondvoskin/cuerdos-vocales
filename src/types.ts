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
  textColor?: string;
  isDisabled?: boolean; 
}

export interface IIconLinkProps {
  href: string;
  Icon: IconType; 
  // icon: React.ReactNode; 
  label: string; 
  color?: string;
}

export interface ITarget {
  id: string;
  text: string;
  icon: IconType; 
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


export interface IMember {
  name: string;
  description: string;
  imageSrc?: string;
}

export interface IMembers {
  dvoskin: IMember;
  randazzo: IMember;
  guarrochena: IMember;
  estrach: IMember;
  trosman: IMember;
  flores: IMember;
  gomez: IMember;
  bori: IMember;
  telerman: IMember;
}

export interface IMemberCardProps {
  member: null | IMember;
  setCurrentMember: (value: null) => void;
}


export interface ISong {
  name: string;
  composer: string;
  arranger: string;
  species: string;
  imageSrc?: string;
}

export interface IXirguSongProps {
  song: ISong;
}


export interface IXirguCard {
  title: string;
  text: string;
  imageSrc?: string;
}

export interface IXirguCardProps {
  cardData: IXirguCard;
}