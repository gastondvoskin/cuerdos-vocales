import { IXirguCardProps } from "./types";
import ImageComponent from "./components-reusable/ImageComponent";
import xirguFlyer from "./assets/images/enterprise/xirguFlyer.jpg";

const XirguCard: React.FC<IXirguCardProps> = ({cardData}) => {
  return (
    <div className={`flex flex-col items-center w-full h-full bg-myWhite-100 text-myGrey-900`}>
      
      <div className="flex flex-col items-center w-full p-3 text-center">
        <h3 className="font-bold text-lg text-myOrange-500">{cardData.title}</h3>
        <p className="text-sm">{cardData.text}</p>
      </div>

      {cardData.members && (
        <div className="flex flex-col gap-2 text-center text-xs">
          <div>
            <h4 className="text-lg">Cuerdos Vocales</h4>
            <ul >
              {cardData.members?.map(member => <li>{`${member.name} - ${member.role}`}</li>)}
            </ul>
          </div>

          <div>
            <h4 className="text-lg">Invitades</h4>
            <ul>
              {cardData.guests?.map(member => <li>{`${member.name} - ${member.role}`}</li>)}
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg">Técnica</h4>
            <ul>
              {cardData.others?.map(member => <li>{`${member.name} - ${member.role}`}</li>)}
            </ul>
          </div>
        </div>
      )}

      {!cardData.members && (
        // <div>
        //   <img src={cardData.imageSrc} alt="Imagen representativa de la canción" className="w-full h-full object-cover"/>
        // </div>
        <div className="flex flex-col items-center bg-[conic-gradient(at_left,_#0a0a04,_#ffbcab)] w-full h-full justify-center">
          <ImageComponent 
            src={xirguFlyer} 
            alt="Pintura en acrílico con cantantes sentados en ronda en un pícnic"  
            className="w-11/12 aspect-square rounded-full object-cover animate-spin drop-shadow-xl my-3"/>
          {/* <div className="animate-fadeIn text-center text-xs">
            <p>Lo ancestral y lo nuevo<br />
            se abrazan en armonía,<br />
            y en circular encuentro,<br />
            la música cobra vida.</p>
          </div> */}
        </div>
      )}


    </div>
  )
}

export default XirguCard;

