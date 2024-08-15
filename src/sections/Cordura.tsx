import ParagraphsContainer from "../components-reusable/ParagraphsContainer";
import SectionHeader from "../components-reusable/SectionHeader";
import { corduraParagraphs } from "../assets/texts/sections";
import ImageComponent from "../components-reusable/ImageComponent";
import corduraPhoto from "../assets/images/cordura/cordura-photo.webp";
import SectionContainer from "../components-reusable/SectionContainer";
import { SECTIONS } from "../constants/sections";


const Cordura = () => {
  return (
    <SectionContainer section={SECTIONS.CORDURA}>
      <SectionHeader text="CORDURA" />
      <ParagraphsContainer paragraphs={corduraParagraphs} />
      <ImageComponent src={corduraPhoto} alt="Personas bailando en la peña La Cordura" />
      <h3>Aprendiendo a bailar</h3>
      <p>SLIDER</p>
    </SectionContainer>
  );
};

export default Cordura;
