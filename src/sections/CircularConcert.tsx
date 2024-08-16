import SectionHeader from "../components-reusable/SectionHeader";
import ImageComponent from "../components-reusable/ImageComponent";
import flyer1 from "../assets/images/enterprise/flyer1.webp";
import SectionContainer from "../components-reusable/SectionContainer";
import { SECTIONS } from "../constants/sections";
import ParagraphsContainer from "../components-reusable/ParagraphsContainer";
import contactParagraphs from "../assets/texts/sections/circularConcert";

const CircularConcert = () => {
  return (
    <SectionContainer section={SECTIONS.CIRCULAR_CONCERT}>
      <SectionHeader text="CONCIERTO CIRCULAR" />
      <ImageComponent src={flyer1} alt="Pintura en acrílico con cantantes sentados en ronda en un pícnic" className="w-56 rounded-full aspect-square my-3 animate-spin z-0 drop-shadow-xl" />
      <div className="animate-fadeIn text-center text-xs">
        <p>Lo ancestral y lo nuevo<br />
        se abrazan en armonía,<br />
        y en circular encuentro,<br />
        la música cobra vida.</p>
      </div>
      <ParagraphsContainer paragraphs={contactParagraphs} />
    </SectionContainer>
  );
};

export default CircularConcert;
