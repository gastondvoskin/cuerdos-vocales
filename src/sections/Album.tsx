import ParagraphsContainer from "../components-reusable/ParagraphsContainer";
import SectionHeader from "../components-reusable/SectionHeader";
import { albumParagraphs } from "../assets/texts/sections";
import ImageComponent from "../components-reusable/ImageComponent";
import album from "../assets/images/enterprise/album.webp";
import Button from "../components-reusable/Button";
import { FaYoutube, FaSpotify, FaItunesNote } from "react-icons/fa";
import {
  SPOTIFY_ALBUM,
  YOUTUBE_ALBUM,
  ALBUM_APPLE,
} from "../constants/socials";
import SectionContainer from "../components-reusable/SectionContainer";
import { SECTIONS } from "../constants/sections";

const Album = () => {
  return (
    <SectionContainer section={SECTIONS.ALBUM}>
      <SectionHeader text="ALBUM" />
      <ParagraphsContainer paragraphs={albumParagraphs} />
      <ImageComponent src={album} alt="Concierto circular" className="w-40 rounded-full aspect-square my-3 animate-spin z-0" />
      <Button
        text="Reproducir en Spotify"
        href={SPOTIFY_ALBUM}
        className="bg-myWhite-500 text-myOlive-100 hover:bg-myOlive-100 hover:text-myWhite-500 "
        Icon={FaSpotify}
      />
      <Button
        text="Reproducir en Youtube"
        href={YOUTUBE_ALBUM}
        className="bg-myWhite-500 text-red-600 hover:bg-red-600 hover:text-myWhite-500"
        Icon={FaYoutube}
      />
      <Button
        text="Reproducir en Apple Music"
        href={ALBUM_APPLE}
        className="bg-myWhite-500 text-myPurple-100 hover:bg-myPurple-100 hover:text-myWhite-500"
        color="#5e93c4"
        Icon={FaItunesNote}
      />
    </SectionContainer>
  );
};

export default Album;
