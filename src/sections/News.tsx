import SectionHeader from "../components-reusable/SectionHeader";
import ImageComponent from "../components-reusable/ImageComponent";
import circular1 from "../assets/images/photos/circular-1.webp";
import SectionContainer from "../components-reusable/SectionContainer";
import { SECTIONS } from "../constants/sections";
import ParagraphsContainer from "../components-reusable/ParagraphsContainer";
import newsParagraphs from "../assets/texts/sections/news"; 
import SectionLink from "../components-reusable/SectionLink";

const News = () => {
  return (
    <SectionContainer section={SECTIONS.NEWS}>
      <SectionHeader text="NOVEDADES" />
      <ImageComponent src={circular1} alt="Concierto circular" className="w-8/12 max-w-96 aspect-square rounded-full object-cover animate-spin drop-shadow-xl"/>
      <ParagraphsContainer paragraphs={newsParagraphs}/>
      <SectionLink to={SECTIONS.CIRCULAR_CONCERT} text="Ver más" />
    </SectionContainer>
  );
};

export default News;
