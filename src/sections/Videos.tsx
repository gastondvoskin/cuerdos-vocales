import SectionHeader from "../components-reusable/SectionHeader";
import VideoComponent from "../components-reusable/VideoComponent";
import { videos } from "../constants/videos";
import Button from "../components-reusable/Button";
import SectionContainer from "../components-reusable/SectionContainer";
import { SECTIONS } from "../constants/sections";
import { useState } from "react";

const Videos = () => {
  const [numberOfVideos, setNumberOfVideos] = useState<number>(1);
  const isDisabled = numberOfVideos >= videos.length;

  return (
    <SectionContainer section={SECTIONS.VIDEOS}>
      <SectionHeader text="VIDEOS" />
      <div className="w-full">
        {videos.slice(0, numberOfVideos).map((video, index) => (
          <VideoComponent video={video} key={index} />
        ))}
      </div>
      <button
        disabled={isDisabled}
        className={`bg-myOlive-100 px-3 py-2 rounded-2xl shadow-lg text-myWhite-500 hover:text-myOlive-100 hover:bg-myWhite-500 disabled:opacity-50`}
        onClick={() => setNumberOfVideos(numberOfVideos + 2)}
      >
        {isDisabled ? "Todos los videos cargados" : "Cargar más videos"}
      </button>

      <Button text="Cargar más videos" bgColor="myWhite-500"/>
    </SectionContainer>
  );
};

export default Videos;
