import SectionHeader from "../components-reusable/SectionHeader";
import ImageComponent from "../components-reusable/ImageComponent";
import flyer1 from "../assets/images/enterprise/flyer1.webp";
import SectionContainer from "../components-reusable/SectionContainer";
import { SECTIONS } from "../constants/sections";
import Button from "@/components-reusable/Button";

const CircularConcert = () => {
  return (
    <SectionContainer section={SECTIONS.CIRCULAR_CONCERT}>
      <SectionHeader text="CONCIERTO CIRCULAR" />
      <ImageComponent
        src={flyer1}
        alt="Pintura en acrílico con cantantes sentados en ronda en un pícnic"
        className="w-8/12 max-w-96 aspect-square rounded-full object-cover animate-spin drop-shadow-xl my-3"
      />
      <div className="animate-fadeIn text-center text-xs">
        <p className="whitespace-pre-line">
          {`
        Lo ancestral y lo nuevo
        se abrazan en armonía,
        y en circular encuentro,
        la música cobra vida.`}
        </p>
      </div>
      <div className="flex flex-col text-center p-5 gap-2 justify-center">
        <p>
          Fecha: <strong>Sábado 30 de agosto</strong>
        </p>
        <p>
          Hora: <strong>21:00hs puntual</strong>
        </p>
        <p>
          Lugar: <strong>Centro Cultural Thames</strong>
        </p>
        <a
          href="https://culturalthames.com.ar/event/24065"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center"
        >
          <Button text="Adquirir entradas" />
        </a>
      </div>
    </SectionContainer>
  );
};

export default CircularConcert;
