import ParagraphsContainer from "../components-reusable/ParagraphsContainer";
import SectionHeader from "../components-reusable/SectionHeader";
import { cosquinParagraphs } from "../assets/texts/sections";
import VideoComponent from "../components-reusable/VideoComponent";
import { videoCosquin } from "../constants/videos";
import SectionContainer from "../components-reusable/SectionContainer";


const Cosquin = () => {
  return (
    <SectionContainer sectionId="home" className="flex flex-col items-center">
      <SectionHeader text="COSQUíN" />
      <ParagraphsContainer paragraphs={cosquinParagraphs} />
      <VideoComponent src={videoCosquin.src} />
    </SectionContainer>
  );
};

export default Cosquin;
