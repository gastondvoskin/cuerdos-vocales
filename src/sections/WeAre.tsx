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
import membersSurnames from "../constants/membersSurnames"; 


const WeAre = () => {
  const [numberOfParagraphs, setNumberOfParagraphs] = useState<number>(2);
  const [renderButton, setRenderButton] = useState<boolean>(true);

  const handleViewMore = () => {
    setNumberOfParagraphs(weAreParagraphs.length); 
    setRenderButton(false);
  }; 

  const [viewMember, setViewMember] = useState<null | "dvoskin" | "randazzo" | "guarrochena" | "estrach" | "trosman" | "flores" | "gomez" | "bori" | "telerman">(null); 


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
      <div className="flex flex-col bg-red-500">
        <button onClick={() => setViewMember("dvoskin")}>Gastón Dvoskin</button>
        <button onClick={() => setViewMember("randazzo")}>Alejandro Randazzo</button>
        <button onClick={() => setViewMember("guarrochena")}>Bernardo Guarrochena</button>
        <button onClick={() => setViewMember("estrach")}>Manuel Estrach</button>
        <button onClick={() => setViewMember("trosman")}>Alejo Trosman</button>
        <button onClick={() => setViewMember("flores")}>Lucrecia Flores</button>
        <button onClick={() => setViewMember("gomez")}>Aldana Gómez</button>
        <button onClick={() => setViewMember("bori")}>Paula Bori</button>
        <button onClick={() => setViewMember("telerman")}>Catalina Telerman</button>
      </div>
      {viewMember && <MemberCard member={viewMember} />}
      <ImageComponent
        src={circular2}
        alt="Integrantes de Cuerdos Vocales mirando a cámara"
        className="w-11/12 max-w-lg rounded-3xl"
      />
    </SectionContainer>
  );
};

export default WeAre;
