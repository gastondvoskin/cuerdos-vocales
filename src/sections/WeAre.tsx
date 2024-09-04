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
import members from "../assets/texts/members/members";
import {IMember} from "../types"


const WeAre = () => {
  const [numberOfParagraphs, setNumberOfParagraphs] = useState<number>(2);
  const [renderButton, setRenderButton] = useState<boolean>(true);

  const handleViewMore = () => {
    setNumberOfParagraphs(weAreParagraphs.length); 
    setRenderButton(false);
  }; 

  const [currentMember, setCurrentMember] = useState<null | IMember>(null); 


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

        {
          Object.entries(members).map((member) => {
            const memberValue = member[1]; 
            const memberName = memberValue.name; 
            return (
              // <p>a</p>
              <button onClick={() => setCurrentMember(memberValue)}>{memberName}</button>
            )
          })
        }

      </div>
      {currentMember && <MemberCard member={currentMember} setCurrentMember={setCurrentMember}/>}
      <ImageComponent
        src={circular2}
        alt="Integrantes de Cuerdos Vocales mirando a cámara"
        className="w-11/12 max-w-lg rounded-3xl"
      />
    </SectionContainer>
  );
};

export default WeAre;
