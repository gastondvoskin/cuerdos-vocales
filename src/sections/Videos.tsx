import SectionHeader from "../components-reusable/SectionHeader"; 
import VideoComponent from "../components-reusable/VideoComponent";
import { videos } from "../constants/videos";
import Button from "../components-reusable/Button";
import SectionContainer from "../components-reusable/SectionContainer";


const Videos = () => {
  return (
    <SectionContainer sectionId="videos" className="flex flex-col items-center">
      <SectionHeader text="VIDEOS" />
      <div>
        {videos.map((video, index) => <VideoComponent src={video.src} key={index} />)}
      </div>
      <Button text="Cargar más videos"/>
    </SectionContainer>
  );
};

export default Videos;
