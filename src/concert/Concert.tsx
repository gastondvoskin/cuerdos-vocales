import SongCard from "@/concert/SongCard";
import WelcomeCard from "@/concert/WelcomeCard";
import CreditsCard from "@/concert/CreditsCard";

import songs from "@/constants/xirguSongs";
import andando from "@/assets/images/songImages/andando.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

const Concert: React.FC = () => {
  const explanation = {
    title: "¡Gracias por compartir este encuentro! ❤️",
    text: "Arrastrá las tarjetitas para recorrer las canciones del concierto",
    imageSrc: andando,
    firstCard: true,
  };

  const thanks = {
    title: "",
    text: "",
    members: [
      { name: "Aldi Gómez", role: "Voz, clarinete, wasá" },
      { name: "Ale Randazzo", role: "Voz, guitarra, producción" },
      { name: "Ale Trosman", role: "Voz, pandero" },
      { name: "Ber Guarrochena", role: "Voz, producción" },
      { name: "Cata Terlerman", role: "Voz, pandero" },
      { name: "Gastón Dvoskin", role: "Percusión, dirección" },
      { name: "Lucre Flores", role: "Voz, bombo" },
      { name: "Manu Tirso", role: "Percusión, producción" },
      { name: "Max Lukac", role: "Voz, zapateo" },
      { name: "Pau Bori", role: "Voz, shakers" },
    ],
    guests: [{ name: "Abril Lukac", role: "Danza" }],
    others: [
      { name: "Cultural Thames", role: "Centro cultural" },
      { name: "José Mercado", role: "Sonido" },
    ],
    imageSrc: andando,
  };

  return (
    <main className="h-dvh w-screen items-center bg-[conic-gradient(at_left,_#eeeeed,_#ffbcab)] flex flex-col text-center pt-12">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-56 h-[240]"
      >
        <SwiperSlide className="rounded-lg">
          <WelcomeCard cardData={explanation} />
        </SwiperSlide>

        {songs.map((song, index) => (
          <SwiperSlide key={index} className="rounded-lg">
            <SongCard song={song} />
          </SwiperSlide>
        ))}

        <SwiperSlide className="rounded-lg">
          <CreditsCard cardData={thanks} />
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
    </main>
  );
};

export default Concert;
