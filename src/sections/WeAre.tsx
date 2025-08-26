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

      <div className="grid grid-cols-2 items-center gap-2 p-2 rounded-lg shadow-md my-10 bg-myWhite-100">
        {
          Object.entries(members).map((member) => {
            const memberValue = member[1]; 
            const memberName = memberValue.name; 
            const imageSrc = memberValue.imageSrc; 
            return (
              <button 
                key={memberName}
                className="hover:scale-105 transition duration-300 ease-in-out transform p-"
                onClick={() => setCurrentMember(memberValue)}
              >
                <img className="w-44 aspect-square object-cover" src={imageSrc} alt={memberName} />
              </button>
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
