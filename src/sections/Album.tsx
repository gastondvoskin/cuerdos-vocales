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
      <ImageComponent src={album} alt="Concierto circular" className="w-40 rounded-full aspect-square my-3 animate-spin z-0 drop-shadow-xl" />
      <Button
        text="Reproducir en Spotify"
        href={SPOTIFY_ALBUM}
        bgColor="myWhite-500"
        textColor="myOlive-100"
        Icon={FaSpotify}
      />
      <Button
        text="Reproducir en Youtube"
        href={YOUTUBE_ALBUM}
        bgColor="myWhite-500"
        textColor="red-600"
        Icon={FaYoutube}
      />
      <Button
        text="Reproducir en Apple Music"
        href={ALBUM_APPLE}
        bgColor="myWhite-500"
        textColor="myPurple-100"
        Icon={FaItunesNote}
      />
    </SectionContainer>
  );
};

export default Album;
