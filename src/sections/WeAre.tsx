import ParagraphsContainer from "../components-reusable/ParagraphsContainer";
import SectionHeader from "../components-reusable/SectionHeader";
import { weAreParagraphs } from "../assets/texts/sections";
import ImageComponent from "../components-reusable/ImageComponent";
import circular2 from "../assets/images/photos/circular-2.webp";


const WeAre = () => {
  return (
    <section id="weAre">
      <SectionHeader text="SOMOS" />
      <ParagraphsContainer paragraphs={weAreParagraphs} />
      <ImageComponent src={circular2} alt="Integrantes de Cuerdos Vocales mirando a cámara" />
    </section>
  );
};

export default WeAre;
