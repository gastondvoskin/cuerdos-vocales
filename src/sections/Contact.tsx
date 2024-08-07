import ParagraphsContainer from "../components-reusable/ParagraphsContainer";
import SectionHeader from "../components-reusable/SectionHeader";
import { contactParagraphs } from "../assets/texts/sections";

const Contact = () => {
  return (
    <section>
      <SectionHeader text="REDES Y CONTACTO" />
      <ParagraphsContainer paragraphs={contactParagraphs} />
    </section>
  );
};

export default Contact;
