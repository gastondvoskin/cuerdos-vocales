import SectionHeader from "../components-reusable/SectionHeader"; 
import VideoComponent from "../components-reusable/VideoComponent";
import { videos } from "../constants/videos";
// import Button from "../components-reusable/Button";
import SectionContainer from "../components-reusable/SectionContainer";
import { SECTIONS } from "../constants/sections";
import { useState } from "react";


const Videos = () => {
  const [ loadMore, setLoadMore ] = useState(false);
  return (
    <SectionContainer section={SECTIONS.VIDEOS}>
      <SectionHeader text="VIDEOS" />
      <div className="w-full">
        {videos.map((video, index) => <VideoComponent video={video} key={index} />)}
      </div>
      <button className="bg-myOlive-100 px-3 py-2 rounded-2xl shadow-lg text-myWhite-500 hover:text-myOlive-100 hover:bg-myWhite-500" onClick={() => setLoadMore(!loadMore)}>{loadMore ? "Cargar menos videos": "Cargar más videos"}</button>

      {/* <Button text="Cargar más videos"/> */}
    </SectionContainer>
  );
};

export default Videos;
