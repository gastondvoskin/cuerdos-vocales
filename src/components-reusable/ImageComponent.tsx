import { IImageComponentProps } from "../types"; 

const ImageComponent: React.FC<IImageComponentProps> = ({ src, alt }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      width="200px" /* replace with className */
      loading="lazy"
    />
  );
};

export default ImageComponent; 