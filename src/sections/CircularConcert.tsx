import SectionHeader from "../components-reusable/SectionHeader";
import ImageComponent from "../components-reusable/ImageComponent";
import flyer1 from "../assets/images/enterprise/flyer1.webp";
import SectionContainer from "../components-reusable/SectionContainer";


const CircularConcert = () => {
  return (
    <SectionContainer sectionId="circularConcert" className="flex flex-col items-center">
      <SectionHeader text="CONCIERTO CIRCULAR" />
      <ImageComponent src={flyer1} alt="Pintura en acrílico con cantantes sentados en ronda en un pícnic" />
    </SectionContainer>
  );
};

export default CircularConcert;
