import ImageComponent from "../components-reusable/ImageComponent";
import logoVertical from "../assets/images/enterprise/logo-vertical.webp";
// import dress from "../assets/images/cordura/dress.webp";
// import arrow from "../assets/images/cordura/arrow.webp";
// import shoes from "../assets/images/cordura/shoes.webp";
import dress from "../assets/images/z.OLD-cordura/dress.png";
import arrow from "../assets/images/z.OLD-cordura/arrow.png";
import shoes from "../assets/images/z.OLD-cordura/shoes.png";
import album from "../assets/images/enterprise/album.webp";
import SectionContainer from "../components-reusable/SectionContainer";
import { Link } from "react-scroll";
import { SECTIONS } from "../constants/sections";


const Home = () => {
  return (
    <SectionContainer section={SECTIONS.HOME}>
      <div className="flex flex-col items-center mt-4 mb-5">
        <ImageComponent
          src={logoVertical}
          alt="Logo Cuerdos Vocales"
          className="w-64 border-10"
        />
        {/* reference: https://design2tailwind.com/blog/tailwindcss-gradient-text/ */}
        <div className="text-sm bg-gradient-to-r from-myBrown-900 via-myBrown-100 to-myOrange-900 inline-block text-transparent bg-clip-text text-center">
          <p>Grupo vocal de folklore</p>
          <p>Ganador Pre Cosquín</p>
        </div>
      </div>
      <div className="flex justify-center gap-4 mb-4 ">
        <ImageComponent
          src={dress}
          alt="Pollera de bailarina"
          className="h-10"
        />
        <ImageComponent
          src={arrow}
          alt="Flecha figura de baile"
          className="h-10"
        />
        <ImageComponent
          src={shoes}
          alt="Zapatos de bailarín"
          className="h-10"
        />
      </div>
      <Link to="album" smooth={true} duration={300}>
        <ImageComponent
          src={album}
          alt="Álbum Sueños y Miradas"
          className="h-40 aspect-square rounded-full shadow-lg"
        />
      </Link>
    </SectionContainer>
  );
};

export default Home;
