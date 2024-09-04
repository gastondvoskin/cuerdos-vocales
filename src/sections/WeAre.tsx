import ParagraphsContainer from "../components-reusable/ParagraphsContainer";
import SectionHeader from "../components-reusable/SectionHeader";
import { weAreParagraphs } from "../assets/texts/sections";
import ImageComponent from "../components-reusable/ImageComponent";
import circular2 from "../assets/images/photos/circular-2.webp";
import SectionContainer from "../components-reusable/SectionContainer";
import { SECTIONS } from "../constants/sections";
import { useState } from "react";
import Button from "../components-reusable/Button";
import { MdExpandMore } from "react-icons/md";
import MemberCard from "../components-reusable/MemberCard";

const WeAre = () => {
  const [numberOfParagraphs, setNumberOfParagraphs] = useState<number>(2);
  const [renderButton, setRenderButton] = useState<boolean>(true);

  const handleViewMore = () => {
    setNumberOfParagraphs(weAreParagraphs.length); 
    setRenderButton(false);
  }; 

  const [viewMember, setViewMember] = useState<null | "dvoskin" | "randazzo | guarrochena | estrach | trosman | flores | gomez | bori | telerman">(null); 

  // const handleViewMember = (member: "dvoskin" | "randazzo | guarrochena | estrach | trosman | flores | gomez | bori | telerman") => {

  // }

  return (
    <SectionContainer section={SECTIONS.WE_ARE}>
      <SectionHeader text="SOMOS" />
      <ParagraphsContainer paragraphs={weAreParagraphs.slice(0, numberOfParagraphs)} />
      {renderButton && (
        <Button
          text="Leer más"
          textColor="myPurple-100"
          onClick={handleViewMore}
          Icon={MdExpandMore}
        />
      )}
      <div>
        <button onClick={() => setViewMember("dvoskin")}>Gastón Dvoskin</button>
      {/* Gastón Dvoskin (dirección), Alejandro Randazzo (voz y producción), Bernardo Guarrochena (voz y producción), Manuel Estrach (voz), Alejo Trosman (voz), Lucrecia Flores (voz), Aldana Gómez (voz), Paula Bori (voz), Catalina Telerman (voz) */}
      </div>
      {viewMember && <MemberCard member="dvoskin"/>}
      <ImageComponent
        src={circular2}
        alt="Integrantes de Cuerdos Vocales mirando a cámara"
        className="w-11/12 max-w-lg rounded-3xl"
      />
    </SectionContainer>
  );
};

export default WeAre;
