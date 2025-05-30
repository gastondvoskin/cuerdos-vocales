import ParagraphsContainer from "../components-reusable/ParagraphsContainer";
import SectionHeader from "../components-reusable/SectionHeader";
import { corduraParagraphs } from "../assets/texts/sections";
import ImageComponent from "../components-reusable/ImageComponent";
import corduraLogo from "../assets/images/z.OLD-cordura/cordura-logo.png";
import SectionContainer from "../components-reusable/SectionContainer";
import { SECTIONS } from "../constants/sections";


const Cordura = () => {
  return (
    <SectionContainer section={SECTIONS.CORDURA}>
      <SectionHeader text="CORDURA" />
      <ImageComponent src={corduraLogo} alt="Logo de La Cordura" className="w-full aspect-[7/4] max-w-2xl max-h-52 object-cover  object-top" />
      <ParagraphsContainer paragraphs={corduraParagraphs} />
      {/* <h3>Aprendiendo a bailar</h3> */}
      {/* <p>SLIDER</p> */}
    </SectionContainer>
  );
};

export default Cordura;
