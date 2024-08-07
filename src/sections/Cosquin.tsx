import ParagraphsContainer from "../components-reusable/ParagraphsContainer";
import SectionHeader from "../components-reusable/SectionHeader";
import { cosquinParagraphs } from "../assets/texts/sections";

const Cosquin = () => {
  return (
    <section>
      <SectionHeader text="COSQUíN" />
      <ParagraphsContainer paragraphs={cosquinParagraphs} />
    </section>
  );
};

export default Cosquin;
