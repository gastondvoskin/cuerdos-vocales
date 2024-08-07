import SectionHeader from "../components-reusable/SectionHeader";
import ImageComponent from "../components-reusable/ImageComponent";
import flyer1 from "../assets/images/enterprise/flyer1.webp";

const CircularConcert = () => {
  return (
    <section>
      <SectionHeader text="CONCIERTO CIRCULAR" />
      <ImageComponent src={flyer1} alt="Pintura en acrílico con cantantes sentados en ronda en un pícnic" />

    </section>
  );
};

export default CircularConcert;
