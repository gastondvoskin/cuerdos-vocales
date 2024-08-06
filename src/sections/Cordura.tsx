import ParagraphsContainer from "../components-reusable/ParagraphsContainer";
import SectionHeader from "../components-reusable/SectionHeader";
import { corduraParagraphs } from "../assets/texts/sections";

const Cordura = () => {
  return (
    <section>
      <SectionHeader text="CORDURA" />
      <ParagraphsContainer paragraphs={corduraParagraphs} />
    </section>
  );
};

export default Cordura;
