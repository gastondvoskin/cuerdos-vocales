import ParagraphsContainer from "../components-reusable/ParagraphsContainer";
import SectionHeader from "../components-reusable/SectionHeader";
import { albumParagraphs } from "../assets/texts/sections";
import ImageComponent from "../components-reusable/ImageComponent";
import album from "../assets/images/enterprise/album.webp";


const Album = () => {
  return (
    <section>
      <SectionHeader text="ALBUM" />
      <ParagraphsContainer paragraphs={albumParagraphs} />
      <ImageComponent src={album} alt="Concierto circular" />

    </section>
  );
};

export default Album;
