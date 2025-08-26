import ImageComponent from "../components-reusable/ImageComponent";
import logoVertical from "../assets/images/enterprise/logo-vertical.webp";
import logoHorizontal from "../assets/images/enterprise/logo-horizontal.webp";
import album from "../assets/images/enterprise/album.webp";
import SectionContainer from "../components-reusable/SectionContainer";
import { Link } from "react-scroll";
import { SECTIONS } from "../constants/sections";

const Home = () => {
  return (
    <SectionContainer section={SECTIONS.HOME}>
      <Link to={SECTIONS.NEWS} smooth={true} duration={500}>
        <div className="flex flex-col items-center justify-center gap-2 md:min-h-screen">
          <div className="flex flex-col items-center justify-center mb-4">
            {/* small logo*/}
            <ImageComponent
              src={logoVertical}
              alt="Logo Cuerdos Vocales"
              className="w-64 border-10 md:hidden"
            />
            {/* large logo */}
            <ImageComponent
              src={logoHorizontal}
              alt="Logo Cuerdos Vocales"
              className="w-7/12 hidden md:block"
            />
            <div className="text-sm drop-shadow bg-gradient-to-r from-myBrown-900 via-myBrown-100 to-myOrange-900 inline-block text-transparent bg-clip-text text-center md:text-xl">
              <p>Grupo vocal de folklore</p>
              <p>Ganador Pre Cosquín</p>
            </div>
          </div>

          <ImageComponent
            src={album}
            alt="Álbum Sueños y Miradas"
            className={`w-40 aspect-square rounded-full drop-shadow-xl object-cover md:w-60 2xl:w-80`}
          />
        </div>
      </Link>
    </SectionContainer>
  );
};

export default Home;
