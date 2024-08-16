import SectionHeader from "../components-reusable/SectionHeader";
import VideoComponent from "../components-reusable/VideoComponent";
import { videos } from "../constants/videos";
import Button from "../components-reusable/Button";
import SectionContainer from "../components-reusable/SectionContainer";
import { SECTIONS } from "../constants/sections";
import { useState } from "react";
import { MdExpandMore } from "react-icons/md";

const Videos = () => {
  const [numberOfVideos, setNumberOfVideos] = useState<number>(1);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const handleViewMore = () => {
    setNumberOfVideos((prevNumberOfVideos) => {
      const newNumberOfVideos = prevNumberOfVideos + 2;
      setIsDisabled(newNumberOfVideos >= videos.length);
      return newNumberOfVideos;
    });
  };

  return (
    <SectionContainer section={SECTIONS.VIDEOS}>
      <SectionHeader text="VIDEOS" />
      <div className="w-full">
        {videos.slice(0, numberOfVideos).map((video, index) => (
          <VideoComponent video={video} key={index} />
        ))}
      </div>
      <Button text={isDisabled ? "Todos los videos cargados" : "Cargar más videos"} bgColor="myWhite-500" textColor="myPurple-100" isDisabled={isDisabled} onClick={handleViewMore} Icon={MdExpandMore}/>
    </SectionContainer>
  );
};

export default Videos;
