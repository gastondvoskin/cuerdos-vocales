import ParagraphsContainer from "../components-reusable/ParagraphsContainer";
import SectionHeader from "../components-reusable/SectionHeader";
import { corduraParagraphs } from "../assets/texts/sections";
import ImageComponent from "../components-reusable/ImageComponent";
import corduraPhoto from "../assets/images/cordura/cordura-photo.webp";


const Cordura = () => {
  return (
    <section id="cordura">
      <SectionHeader text="CORDURA" />
      <ParagraphsContainer paragraphs={corduraParagraphs} />
      <ImageComponent src={corduraPhoto} alt="Personas bailando en la peña La Cordura" />
      <h3>Aprendiendo a bailar</h3>
      <p>SLIDER</p>
    </section>
  );
};

export default Cordura;
