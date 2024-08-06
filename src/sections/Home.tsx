import SectionHeader from "../components-reusable/SectionHeader";
import ImageComponent from "../components-reusable/ImageComponent";
import album from "../assets/images/enterprise/album.webp";

const Home = () => {
  return (
    <section>
      <SectionHeader text="HOME" />
      <ImageComponent 
        src={album} 
        alt="Álbum Sueños y Miradas"   
      />
    </section>
  );
};

export default Home;
