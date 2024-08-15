import { IVideoComponentProps } from "../types";

const VideoComponent: React.FC<IVideoComponentProps> = ({ video }) => {
  return (
    <div className="pb-4 ">
      <iframe
        className="pb-1 w-full aspect-video"
        src={video.src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      <p className="text-center text-xs">{video.label}</p>
    </div>
  );
};

export default VideoComponent;
