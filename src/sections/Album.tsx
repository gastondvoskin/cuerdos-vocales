import ParagraphsContainer from "../components-reusable/ParagraphsContainer";
import SectionHeader from "../components-reusable/SectionHeader";
import { albumParagraphs } from "../assets/texts/sections";
import ImageComponent from "../components-reusable/ImageComponent";
import album from "../assets/images/enterprise/album.webp";
import Button from "../components-reusable/Button";
import { FaYoutube, FaSpotify, FaItunesNote } from "react-icons/fa";
import { SPOTIFY_ALBUM, YOUTUBE_ALBUM, ALBUM_APPLE } from "../constants/socials";

const Album = () => {
  return (
    <section id="album">
      <SectionHeader text="ALBUM" />
      <ParagraphsContainer paragraphs={albumParagraphs} />
      <ImageComponent src={album} alt="Concierto circular" />
      <Button text="Reproducir en Spotify" href={SPOTIFY_ALBUM} color="#A5A66B" Icon={FaSpotify} />
      <Button text="Reproducir en Youtube" href={YOUTUBE_ALBUM} color="#DF7858" Icon={FaYoutube} />
      <Button text="Reproducir en Apple Music" href={ALBUM_APPLE} color="#5e93c4" Icon={FaItunesNote} />
    </section>
  );
};

export default Album;
