import { IXirguCardProps } from "@/types";
import ImageComponent from "@/components-reusable/ImageComponent";
import xirguFlyer from "@/assets/images/enterprise/xirguFlyer.jpg";

const WelcomeCard: React.FC<IXirguCardProps> = ({ cardData }) => {
  return (
    <div
      className={`flex flex-col items-center w-full h-full bg-myWhite-100 text-myGrey-900`}
    >
      <div className="flex flex-col items-center w-full p-3 text-center">
        <h3 className="font-bold text-lg text-myOrange-500">
          {cardData.title}
        </h3>
        <p className="text-sm">{cardData.text}</p>
      </div>

      <div className="flex flex-col gap-2 text-center text-xs">
        <div>
          <h4 className="text-lg">Cuerdos Vocales</h4>
          <ul>
            {cardData.members?.map((member) => (
              <li>{`${member.name} - ${member.role}`}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg">Invitada</h4>
          <ul>
            {cardData.guests?.map((member) => (
              <li>{`${member.name} - ${member.role}`}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-lg">Técnica</h4>
          <ul>
            {cardData.others?.map((member) => (
              <li>{`${member.name} - ${member.role}`}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
