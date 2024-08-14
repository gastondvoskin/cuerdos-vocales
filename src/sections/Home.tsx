import ImageComponent from "../components-reusable/ImageComponent";
import logoVertical from "../assets/images/enterprise/logo-vertical.webp";
import dress from "../assets/images/cordura/dress.webp";
import arrow from "../assets/images/cordura/arrow.webp";
import shoes from "../assets/images/cordura/shoes.webp";
import album from "../assets/images/enterprise/album.webp";
import SectionContainer from "../components-reusable/SectionContainer";

const Home = () => {
  return (
    <SectionContainer sectionId="home">
      <div className="flex flex-col items-center">
        <ImageComponent src={logoVertical} alt="Logo Cuerdos Vocales" className="h-40" />
        <p>Grupo vocal de folklore</p>
        <p>Ganador Pre Cosquín</p>
      </div>
      <div>
        <ImageComponent src={dress} alt="Pollera de bailarina" />
        <ImageComponent src={arrow} alt="Flecha figura de baile" />
        <ImageComponent src={shoes} alt="Zapatos de bailarín" />
      </div>
      <ImageComponent src={album} alt="Álbum Sueños y Miradas" />
    </SectionContainer>
  );
};

export default Home;
