import XirguSong from "./XirguSong"; 
import songs from "./constants/xirguSongs";
// import SectionContainer from "./components-reusable/SectionContainer";

import XirguCard from "./XirguCard";
import andando from "./assets/images/songImages/andando.webp"; 
// import ImageComponent from "./components-reusable/ImageComponent";
// import logo from "./assets/images/enterprise/logo.webp"; 
// import logoVertical from "./assets/images/enterprise/logo-vertical.webp";

// https://codesandbox.io/p/devbox/swiper-react-effect-cards-sw6ctl?file=%2Fsrc%2FApp.jsx%3A2%2C1-8%2C1

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';


const Xirgu: React.FC = () => {

  const explanation = {
    title: "¡Gracias por compartir este encuentro! ❤️",  
    text: "Arrastrá las tarjetitas para recorrer las canciones del concierto", 
    imageSrc: andando, 
    firstCard: true, 
  }



  const thanks = {
    // title: "Gracias, gracias, gracias ❤️",  
    title: "",  
    text: "", 
    members: [
      {name: "Pau Bori", role: "Voz"},
      {name: "Manu Estrach", role: "Voz"},
      {name: "Lucre Flores", role: "Voz y bombo"},
      {name: "Aldi Gómez", role: "Voz"},
      {name: "Ber Guarrochena", role: "Voz y producción"},
      {name: "Ale Randazzo", role: "Voz, guitarra y producción"},
      {name: "Cata Terlerman", role: "Voz y caja"},
      {name: "Ale Trosman", role: "Voz"},
      {name: "Gastón Dvoskin", role: "Dirección y cajón"},
    ], 
    guests: [
      {name: "Teresa Parodi", role: "Voz"},
      {name: "Manu Tirso", role: "Percusión"},
    ], 
    others: [
      {name: "Teatro Margarita Xirgu", role: ""}, 
      {name: "Maru Pereira", role: "Producción"}, 
      {name: "José Mercado", role: "Sonido"},
    ], 
    imageSrc: andando, 
  }

  return (
    <main className="flex flex-col text-center w-screen h-screen items-center pt-10 bg-[conic-gradient(at_left,_#eeeeed,_#ffbcab)]">
      
      
      {/* <h1 className="text-3xl font-bold mb-8 text-center text-myOrange-500">Cuerdos Circular</h1> */}

      {/* <div className="h-full flex justify-between items-center">
        <ImageComponent src={logo} alt="logo" className="h-16" />
        <ImageComponent
          src={logoVertical}
          alt="Logo Vertical"
          className="h-11"
        />
      </div> */}


      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-7/12 h-7/12 md:w-3/12 md:h-3/12"
      >

        <SwiperSlide className="flex items-center justify-center rounded-md">
          <XirguCard cardData={explanation} />
        </SwiperSlide>

        {songs.map((song, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center rounded-md">
            <XirguSong song={song} />
          </SwiperSlide>
        ))}

        <SwiperSlide className="flex items-center justify-center rounded-md">
          <XirguCard cardData={thanks} />
        </SwiperSlide>

      </Swiper>

      <a 
        href="https://www.cuerdosvocales.com" 
        className="text-blue-500 underline hover:text-blue-700 transition-colors duration-300"
        target="_blank" 
        rel="noopener noreferrer"
      >
        cuerdosvocales.com
      </a>
    </main>
  );
};

export default Xirgu;