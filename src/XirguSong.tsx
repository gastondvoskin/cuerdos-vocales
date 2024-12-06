import { IXirguSongProps } from "./types";

const XirguSong: React.FC<IXirguSongProps> = ({ song }) => {
  return (
    <div className={`flex flex-col justify-between w-full h-full bg-myWhite-100 text-myGrey-900`}>
      <div className="flex flex-col items-center w-full p-3 text-center">
        <h3 className="font-bold text-xl text-myOrange-500 h-14">{song.name}</h3>
        <p className="text-md">{song.composer}</p>
        <p className="text-xs">Arr: {song.arranger}</p>
        <p className="text-xs">{song.species}</p>
      </div>
      <img src={song.imageSrc} alt="Imagen representativa de la canción" className="h-full object-cover overflow-hidden"/>
      {/* <div className="h-7/12">
      </div> */}
    </div>
  );
};

export default XirguSong;

{
  /* <div className="bg-green-100 h-full">
      <div className="bg-red-200">lala</div>
      <div className="bg-yellow-200">pepe</div>
    </div> */
}

