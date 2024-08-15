import SectionHeader from "../components-reusable/SectionHeader";
import ImageComponent from "../components-reusable/ImageComponent";
import circular1 from "../assets/images/photos/circular-1.webp";
import SectionContainer from "../components-reusable/SectionContainer";
import { SECTIONS } from "../constants/sections";

const News = () => {
  return (
    <SectionContainer section={SECTIONS.NEWS}>
      <SectionHeader text="NOVEDADES" />
      <ImageComponent src={circular1} alt="Concierto circular" />
    </SectionContainer>
  );
};

export default News;
