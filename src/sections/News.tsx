import SectionHeader from "../components-reusable/SectionHeader";
import ImageComponent from "../components-reusable/ImageComponent";
import circular1 from "../assets/images/photos/circular-1.webp";

const News = () => {
  return (
    <section>
      <SectionHeader text="NOVEDADES" />
      <ImageComponent src={circular1} alt="Concierto circular" />
      {/* <div>
        <img src="" alt="" />
        <label htmlFor=""></label>
        <video src=""></video>
        <label htmlFor=""></label>
      </div> */}
    </section>
  );
};

export default News;
