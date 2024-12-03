import XirguSong from "./XirguSong"; 
import songs from "./constants/xirguSongs";
import SectionContainer from "./components-reusable/SectionContainer";

// https://codesandbox.io/p/devbox/swiper-react-effect-cards-sw6ctl?file=%2Fsrc%2FApp.jsx%3A2%2C1-8%2C1

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';


const Xirgu: React.FC = () => {

  return (
    <SectionContainer section="home">
      <h1 className="text-2xl font-bold mb-8 text-center text-myPurple-900">Cuerdos Circular</h1>

      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-7/12 h-7/12 md:w-3/12 md:h-3/12"
      >
        {songs.map((song, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center rounded-md">
            <XirguSong song={song} />
          </SwiperSlide>
        ))}
      </Swiper>

      <p>¡Gracias por acompañarnos! ❤️</p>
      <p className="mt-4">Acerca de Cuerdos Vocales:</p> 
      <a href="https://www.cuerdosvocales.com" className="text-blue-500 underline">cuerdosvocales.com</a>
    </SectionContainer>
  );
};

export default Xirgu;


// .swiper {
//   width: 240px;
//   height: 320px;
// }

// .swiper-slide {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 18px;
//   font-size: 22px;
//   font-weight: bold;
//   color: #fff;
// }

// .swiper-slide:nth-child(1n) {
//   background-color: rgb(206, 17, 17);
// }

// .swiper-slide:nth-child(2n) {
//   background-color: rgb(0, 140, 255);
// }

// .swiper-slide:nth-child(3n) {
//   background-color: rgb(10, 184, 111);
// }

// .swiper-slide:nth-child(4n) {
//   background-color: rgb(211, 122, 7);
// }

// .swiper-slide:nth-child(5n) {
//   background-color: rgb(118, 163, 12);
// }

// .swiper-slide:nth-child(6n) {
//   background-color: rgb(180, 10, 47);
// }

// .swiper-slide:nth-child(7n) {
//   background-color: rgb(35, 99, 19);
// }

// .swiper-slide:nth-child(8n) {
//   background-color: rgb(0, 68, 255);
// }

// .swiper-slide:nth-child(9n) {
//   background-color: rgb(218, 12, 218);
// }

// .swiper-slide:nth-child(10n) {
//   background-color: rgb(54, 94, 77);
// }