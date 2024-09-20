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
  const [listMembers, setListMembers] = useState<boolean>(false); 
  const [renderListMembersButton, setRenderListMembersButton] = useState<boolean>(true); 

  const handleViewMore = () => {
    setNumberOfParagraphs(weAreParagraphs.length); 
    setRenderButton(false);
  }; 

  const handleListMembers = () => {
    setListMembers(true); 
    setRenderListMembersButton(false); 
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
      {renderListMembersButton && (
        <Button 
          text="Ver integrantes"
          textColor="myPurple-100"
          onClick={() => handleListMembers()}
          Icon={MdExpandMore}
        />
      )}

      {listMembers && (
        <div className="grid grid-cols-3 items-center p-6 rounded-lg shadow-md my-10">
          {
            Object.entries(members).map((member) => {
              const memberValue = member[1]; 
              const memberName = memberValue.name; 
              const imageSrc = memberValue.imageSrc; 
              return (
                <button 
                  key={memberName}
                  className="hover:scale-105 transition duration-300 ease-in-out transform"
                  onClick={() => setCurrentMember(memberValue)}
                >
                  <img className="w-44 aspect-square object-cover" src={imageSrc} alt={memberName} />
                </button>
              )
            })
          }
        </div>
      )}
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
