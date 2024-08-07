import ParagraphsContainer from "../components-reusable/ParagraphsContainer";
import SectionHeader from "../components-reusable/SectionHeader";
import { contactParagraphs } from "../assets/texts/sections";
import { MAIL, INSTAGRAM, FACEBOOK, YOUTUBE, SPOTIFY } from "../constants/contact";


const Contact = () => {
  return (
    <section>
      <SectionHeader text="REDES Y CONTACTO" />
      <ParagraphsContainer paragraphs={contactParagraphs} />
      <a href={MAIL}>Mail</a>
      <a href={INSTAGRAM}>Instagram</a>
      <a href={FACEBOOK}>Facebook</a>
      <a href={YOUTUBE}>Youtube</a>
      <a href={SPOTIFY}>Spotify</a>
    </section>
  );
};

export default Contact;
