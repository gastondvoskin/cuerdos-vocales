import SectionHeader from "../components-reusable/SectionHeader";
import ImageComponent from "../components-reusable/ImageComponent";
import circular1 from "../assets/images/photos/circular-1.webp";
import SectionContainer from "../components-reusable/SectionContainer";


const News = () => {
  return (
    <SectionContainer sectionId="news">
      <SectionHeader text="NOVEDADES" />
      <ImageComponent src={circular1} alt="Concierto circular" />
      {/* <div>
        <img src="" alt="" />
        <label htmlFor=""></label>
        <video src=""></video>
        <label htmlFor=""></label>
      </div> */}
    </SectionContainer>
  );
};

export default News;
