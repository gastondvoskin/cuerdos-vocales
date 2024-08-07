import SectionHeader from "../components-reusable/SectionHeader";
import ImageComponent from "../components-reusable/ImageComponent";
import logoVertical from "../assets/images/enterprise/logo-vertical.webp";
import dress from "../assets/images/cordura/dress.webp";
import arrow from "../assets/images/cordura/arrow.webp";
import shoes from "../assets/images/cordura/shoes.webp";
import album from "../assets/images/enterprise/album.webp";

const Home = () => {
  return (
    <section>
      <SectionHeader text="HOME" />
      <div>
        <ImageComponent src={logoVertical} alt="Logo Cuerdos Vocales" />
        <p>Grupo vocal de folklore</p>
        <p>Ganador Pre Cosquín</p>
      </div>
      <div>
        <ImageComponent src={dress} alt="Pollera de bailarina" />
        <ImageComponent src={arrow} alt="Flecha figura de baile" />
        <ImageComponent src={shoes} alt="Zapatos de bailarín" />

      </div>
      <ImageComponent src={album} alt="Álbum Sueños y Miradas" />
    </section>
  );
};

export default Home;
