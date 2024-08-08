import ParagraphsContainer from "../components-reusable/ParagraphsContainer";
import SectionHeader from "../components-reusable/SectionHeader";
import { contactParagraphs } from "../assets/texts/sections";
import { SiGmail } from "react-icons/si";
import { FaInstagram, FaFacebook, FaYoutube, FaSpotify } from 'react-icons/fa';
import { MAIL, INSTAGRAM, FACEBOOK, YOUTUBE, SPOTIFY } from "../constants/contact";


const Contact = () => {
  return (
    <section>
      <SectionHeader text="REDES Y CONTACTO" />
      <ParagraphsContainer paragraphs={contactParagraphs} />
      <a 
        href={`mailto:${MAIL}`}
        target="_blank"
        rel="noopeneer noreferrer"
      >
        <SiGmail />
      </a>



      <a href={INSTAGRAM}><FaInstagram /></a>
      <a href={FACEBOOK}><FaFacebook /></a>
      <a href={YOUTUBE}><FaYoutube /></a>
      <a href={SPOTIFY}><FaSpotify /></a>
    </section>
  );
};

export default Contact;
