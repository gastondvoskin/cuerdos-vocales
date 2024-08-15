import ParagraphsContainer from "../components-reusable/ParagraphsContainer";
import SectionHeader from "../components-reusable/SectionHeader";
import { weAreParagraphs } from "../assets/texts/sections";
import ImageComponent from "../components-reusable/ImageComponent";
import circular2 from "../assets/images/photos/circular-2.webp";
import SectionContainer from "../components-reusable/SectionContainer";
import { SECTIONS } from "../constants/sections";
import { useState } from "react";


const WeAre = () => {
  const [ numberOfParagraphs, setNumberOfParagraphs ] = useState<number>(2);
  const isDisabled = numberOfParagraphs >= weAreParagraphs.length;

  return (
    <SectionContainer section={SECTIONS.WE_ARE}>
      <SectionHeader text="SOMOS" />
      <ParagraphsContainer paragraphs={weAreParagraphs.slice(0, numberOfParagraphs)} />
      {!isDisabled && (
        <button
          disabled={isDisabled}
          className={`bg-myWhite-500 px-3 py-2 rounded-2xl shadow-lg text-myOlive-100 hover:text-myOlive-100 hover:bg-myWhite-500 disabled:opacity-50 mb-10`}
          onClick={() => setNumberOfParagraphs(weAreParagraphs.length)}
        >
          Leer más
        </button>)   
      }
      <ImageComponent src={circular2} alt="Integrantes de Cuerdos Vocales mirando a cámara" />
    </SectionContainer>
  );
};

export default WeAre;
