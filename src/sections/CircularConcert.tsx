import SectionHeader from "../components-reusable/SectionHeader";
import ImageComponent from "../components-reusable/ImageComponent";
import flyer1 from "../assets/images/enterprise/flyer1.webp";
import SectionContainer from "../components-reusable/SectionContainer";
import { SECTIONS } from "../constants/sections";


const CircularConcert = () => {
  return (
    <SectionContainer section={SECTIONS.CIRCULAR_CONCERT}>
      <SectionHeader text="CONCIERTO CIRCULAR" />
      <ImageComponent src={flyer1} alt="Pintura en acrílico con cantantes sentados en ronda en un pícnic" />
    </SectionContainer>
  );
};

export default CircularConcert;
