import WelcomeCard from "@/concert/WelcomeCard";
import SongCard from "@/concert/SongCard";
import CreditsCard from "@/concert/CreditsCard";

import songs from "@/constants/songs";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";


const Concert: React.FC = () => {
  return (
    <main className="h-dvh w-screen items-center bg-[conic-gradient(at_left,_#eeeeed,_#ffbcab)] flex flex-col text-center pt-12">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-56 h-[240]"
      >
        <SwiperSlide className="rounded-lg">
          <WelcomeCard />
        </SwiperSlide>

        {songs.map((song, index) => (
          <SwiperSlide key={index} className="rounded-lg">
            <SongCard song={song} />
          </SwiperSlide>
        ))}

        <SwiperSlide className="rounded-lg">
          <CreditsCard />
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
