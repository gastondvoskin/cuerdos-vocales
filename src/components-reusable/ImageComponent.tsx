import { IImageComponentProps } from "../types"; 

const ImageComponent: React.FC<IImageComponentProps> = ({ src, alt, className }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      loading="lazy"
    />
  );
};

export default ImageComponent; 