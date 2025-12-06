import ImageComponent from "@/components-reusable/ImageComponent";
import flyerThames from "@/assets/images/enterprise/flyerThames.jpeg";

const WelcomeCard: React.FC = () => {
  return (
    <div
      className={`flex flex-col items-center w-full h-full bg-myWhite-100 text-myGrey-900`}
    >
      <div className="flex flex-col items-center w-full p-3 text-center">
        <h3 className="font-bold text-lg text-myOrange-500">
          ¡Gracias por acompañarnos este año! ❤️
        </h3>
        <p className="text-sm">
          Arrastrá de derecha a izquierda
        </p>
      </div>
      <div className="flex flex-col items-center w-full h-full justify-center bg-[conic-gradient(at_left,_#eee,_#a8b)] ">
        <ImageComponent
          src={flyerThames}
          alt="Cuerdos Vocales en círculo"
          className="w-11/12 aspect-square rounded-full object-cover animate-spin drop-shadow-xl my-3"
        />
      </div>
    </div>
  );
};

export default WelcomeCard;
