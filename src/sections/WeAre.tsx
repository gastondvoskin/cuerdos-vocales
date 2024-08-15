import ParagraphsContainer from "../components-reusable/ParagraphsContainer";
import SectionHeader from "../components-reusable/SectionHeader";
import { weAreParagraphs } from "../assets/texts/sections";
import ImageComponent from "../components-reusable/ImageComponent";
import circular2 from "../assets/images/photos/circular-2.webp";
import SectionContainer from "../components-reusable/SectionContainer";


const WeAre = () => {
  return (
    <SectionContainer sectionId="weAre" className="flex flex-col items-center">
      <SectionHeader text="SOMOS" />
      <ParagraphsContainer paragraphs={weAreParagraphs} />
      <ImageComponent src={circular2} alt="Integrantes de Cuerdos Vocales mirando a cámara" />
    </SectionContainer>
  );
};

export default WeAre;
