import { IXirguCardProps } from "./types";

const XirguCard: React.FC<IXirguCardProps> = ({cardData}) => {
  return (
    <div className={`flex flex-col items-center w-full h-full bg-myWhite-100 text-myGrey-900`}>
      
      <div className="flex flex-col items-center w-full p-3 text-center">
        <h3 className="font-bold text-xl text-myPurple-500">{cardData.title}</h3>
        <p className="text-md">{cardData.text}</p>
      </div>

      {cardData.members && (
        <div className="flex flex-col gap-2 text-center text-xs">
          <div >
            <h4 className="text-lg">Cuerdos Vocales: </h4>
            <ul >
              {cardData.members?.map(member => <li>{`${member.name} - ${member.role}`}</li>)}
            </ul>
          </div>

          <div>
            <h4 className="text-lg">Invitades: </h4>
            <ul>
              {cardData.guests?.map(member => <li>{`${member.name} - ${member.role}`}</li>)}
            </ul>
          </div>

          <div>
            <h4 className="text-lg">Técnica: </h4>
            <ul>
              {cardData.others?.map(member => <li>{`${member.name} - ${member.role}`}</li>)}
            </ul>
          </div>
        </div>
      )}

      {!cardData.members && (
        <div>
          <img src={cardData.imageSrc} alt="Imagen representativa de la canción" className="w-full h-full object-cover"/>
        </div>
      )}
    </div>
  )
}

export default XirguCard;

