import ParagraphsContainer from "../components-reusable/ParagraphsContainer";
import SectionHeader from "../components-reusable/SectionHeader";
import { cosquinParagraphs } from "../assets/texts/sections";
import VideoComponent from "../components-reusable/VideoComponent";
import { videoCosquin } from "../constants/videos";

const Cosquin = () => {
  return (
    <section>
      <SectionHeader text="COSQUíN" />
      <ParagraphsContainer paragraphs={cosquinParagraphs} />
      <VideoComponent src={videoCosquin.src} />
    </section>
  );
};

export default Cosquin;
