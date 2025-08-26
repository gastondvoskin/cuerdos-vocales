import ImageComponent from "@/components-reusable/ImageComponent";
import xirguFlyer from "@/assets/images/enterprise/xirguFlyer.jpg";

const WelcomeCard: React.FC = () => {
  return (
    <div
      className={`flex flex-col items-center w-full h-full bg-myWhite-100 text-myGrey-900`}
    >
      <div className="flex flex-col items-center w-full p-3 text-center">
        <h3 className="font-bold text-lg text-myOrange-500">
          ¡Gracias por compartir este encuentro! ❤️
        </h3>
        <p className="text-sm">
          "Arrastrá las tarjetitas para recorrer las canciones del concierto"
        </p>
      </div>
      <div className="flex flex-col items-center bg-[conic-gradient(at_left,_#0a0a04,_#ffbcab)] w-full h-full justify-center">
        <ImageComponent
          src={xirguFlyer}
          alt="Cuerdos Vocales en círculo"
          className="w-11/12 aspect-square rounded-full object-cover animate-spin drop-shadow-xl my-3"
        />
      </div>
    </div>
  );
};

export default WelcomeCard;
