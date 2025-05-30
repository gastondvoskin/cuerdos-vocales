import ParagraphsContainer from "../components-reusable/ParagraphsContainer";
import SectionHeader from "../components-reusable/SectionHeader";
import { contactParagraphs } from "../assets/texts/sections";
import IconLink from "../components-reusable/IconLink";
import { SiGmail } from "react-icons/si";
import { FaInstagram, FaFacebook, FaYoutube, FaSpotify } from "react-icons/fa";
import { MAIL, INSTAGRAM, FACEBOOK, YOUTUBE, SPOTIFY } from "../constants/contact";
import SectionContainer from "../components-reusable/SectionContainer";
import { SECTIONS } from "../constants/sections";

const Contact = () => {
  return (
    <SectionContainer section={SECTIONS.CONTACT}>
      <SectionHeader text="REDES Y CONTACTO" />
      <ParagraphsContainer paragraphs={contactParagraphs} />
      <div className="flex flex-wrap gap-4 my-4">
        <IconLink href={`mailto:${MAIL}`} Icon={SiGmail} label="Mail" color="red" />
        <IconLink href={INSTAGRAM} Icon={FaInstagram} label="Instagram" color="#6c378f" />
        <IconLink href={FACEBOOK} Icon={FaFacebook} label="Facebook" color="#1013cc" />
        <IconLink href={YOUTUBE} Icon={FaYoutube} label="YouTube" color="red" />
        <IconLink href={SPOTIFY} Icon={FaSpotify} label="Spotify" color="#2ec955" />
      </div>
    </SectionContainer>
  );
};

export default Contact;
