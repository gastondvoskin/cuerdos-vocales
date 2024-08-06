import ParagraphsContainer from "../components-reusable/ParagraphsContainer";
import SectionHeader from "../components-reusable/SectionHeader";
import { weAreParagraphs } from "../assets/texts/sections";

const WeAre = () => {
  return (
    <section>
      <SectionHeader text="SOMOS" />
      <ParagraphsContainer paragraphs={weAreParagraphs} />
    </section>
  );
};

export default WeAre;
