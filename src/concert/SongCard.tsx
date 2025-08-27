import { ISongProps } from "@/types";

const SongCard: React.FC<ISongProps> = ({ song }) => {
  return (
    <div
      className={`flex flex-col w-full h-full bg-myWhite-100 text-myGrey-900`}
    >
      <div className="flex flex-col items-center w-full p-3 text-center">
        <h3 className="font-bold text-xl text-myOrange-500 h-14 text-balance">
          {song.name}
        </h3>
        <p className="text-md">{song.composer}</p>
        <p className="text-xs">Arr: {song.arranger}</p>
        <p className="text-xs">{song.species}</p>
      </div>
      <img
        src={song.imageSrc}
        alt="Imagen representativa de la canción"
        className="h-full object-cover"
      />
    </div>
  );
};

export default SongCard;
