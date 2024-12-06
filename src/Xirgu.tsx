import XirguSong from "./XirguSong"; 
import songs from "./constants/xirguSongs";
import andando from "./assets/images/songImages/andando.webp";
import XirguCard from "./XirguCard";
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
    <main className="h-dvh w-screen items-center bg-[conic-gradient(at_left,_#eeeeed,_#ffbcab)] flex flex-col text-center justify-center">
      {/* <div className="bg-yellow-500 h-80 w-11"></div> */}
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-60 h-[280]"
      >
        <SwiperSlide className="rounded-lg">
          <XirguCard cardData={explanation} />
        </SwiperSlide>
        {songs.map((song, index) => (
          <SwiperSlide key={index} className="rounded-lg">
            <XirguSong song={song} />
          </SwiperSlide>
        ))}
        <SwiperSlide className="rounded-lg">
          <XirguCard cardData={thanks} />
        </SwiperSlide>
      </Swiper>
      <a 
        href="https://www.cuerdosvocales.com" 
        className="text-blue-500 text-sm mt-2 underline hover:text-blue-700 transition-colors duration-300"
        target="_blank" 
        rel="noopener noreferrer"
      >
        cuerdosvocales.com
      </a>

              {/* <div className="h-full flex justify-between items-center">
          <ImageComponent src={logo} alt="logo" className="h-16" />
          <ImageComponent
            src={logoVertical}
            alt="Logo Vertical"
            className="h-11"
          />
        </div> */}
    </main>
  );
};

export default Xirgu;