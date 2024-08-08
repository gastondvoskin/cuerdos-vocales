import SectionHeader from "../components-reusable/SectionHeader"; 
import VideoComponent from "../components-reusable/VideoComponent";
import { videos } from "../constants/videos";
import Button from "../components-reusable/Button";

const Videos = () => {
  return (
    <section>
      <SectionHeader text="VIDEOS" />
      <div>
        {videos.map((video, index) => <VideoComponent src={video.src} key={index} />)}
      </div>
      <Button text="Cargar más videos"/>
    </section>
  );
};

export default Videos;
