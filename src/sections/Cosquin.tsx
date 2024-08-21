import ParagraphsContainer from "../components-reusable/ParagraphsContainer";
import SectionHeader from "../components-reusable/SectionHeader";
import { cosquinParagraphs } from "../assets/texts/sections";
import VideoComponent from "../components-reusable/VideoComponent";
import { videoCosquin } from "../constants/videos";
import SectionContainer from "../components-reusable/SectionContainer";
import { SECTIONS } from "../constants/sections";


const Cosquin = () => {
  return (
    <SectionContainer section={SECTIONS.COSQUIN}>
      <SectionHeader text="COSQUÍN" />
      <ParagraphsContainer paragraphs={cosquinParagraphs} />
      <div className="w-full max-w-2xl">
        <VideoComponent video={videoCosquin} />
      </div>

    </SectionContainer>
  );
};

export default Cosquin;
