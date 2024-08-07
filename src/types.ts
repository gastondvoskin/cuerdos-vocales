export interface IParagraphsContainerProps {
  paragraphs: string[];
}

export interface ISectionHeader {
  text: string;
}

export interface IImageComponentProps {
  src: string;
  alt: string; 
}

export interface IVideoComponentProps {
  src: string;
}

export interface IButtonProps {
  text: string; 
  onClick?: () => void;
  href?: string; 
  color?: string; 
}