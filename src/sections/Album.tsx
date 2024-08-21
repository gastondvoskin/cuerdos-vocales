import ParagraphsContainer from "../components-reusable/ParagraphsContainer";
import SectionHeader from "../components-reusable/SectionHeader";
import { albumParagraphs } from "../assets/texts/sections";
import ImageComponent from "../components-reusable/ImageComponent";
import album from "../assets/images/enterprise/album.webp";
import Button from "../components-reusable/Button";
import { FaYoutube, FaSpotify, FaItunesNote } from "react-icons/fa";
import { SPOTIFY_ALBUM, YOUTUBE_ALBUM, ALBUM_APPLE } from "../constants/socials";
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
        textColor="myOlive-100"
        Icon={FaSpotify}
      />
      <Button
        text="Reproducir en Youtube"
        href={YOUTUBE_ALBUM}
        textColor="red-600"
        Icon={FaYoutube}
      />
      <Button
        text="Reproducir en Apple Music"
        href={ALBUM_APPLE}
        textColor="myPurple-500"
        Icon={FaItunesNote}
      />
    </SectionContainer>
  );
};

export default Album;
