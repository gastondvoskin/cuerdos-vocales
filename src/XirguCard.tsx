import { IXirguCardProps } from "./types";

const XirguCard: React.FC<IXirguCardProps> = ({cardData}) => {
  return (
    <div 
      className={`flex flex-col items-center w-full h-full bg-myWhite-100 text-myGrey-900`} 
      // style={{ backgroundImage: `url(${song.imageSrc})`}}
    >
      <div className="flex flex-col items-center w-full p-3 text-center">
        <h3 className="font-bold text-xl text-myPurple-500">{cardData.title}</h3>
        <p className="text-md">{cardData.text}</p>
      </div>
      <div>
        <img src={cardData.imageSrc} alt="Imagen representativa de la canción" className="w-full h-full object-cover"/>
      </div>
    </div>
  )
}

export default XirguCard;

