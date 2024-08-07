import SectionHeader from "../components-reusable/SectionHeader"; 
import VideoComponent from "../components-reusable/VideoComponent";
import videos from "../constants/videos";

const Videos = () => {
  return (
    <section>
      <SectionHeader text="VIDEOS" />
      <div>
        {videos.map((video, index) => <VideoComponent src={video.src} key={index} />)}
      </div>
      
    </section>
  );
};

export default Videos;
