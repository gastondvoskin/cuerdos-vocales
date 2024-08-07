import SectionHeader from "../components-reusable/SectionHeader";
import ImageComponent from "../components-reusable/ImageComponent";
import logoHorizontal from "../assets/images/enterprise/logo-horizontal.webp"; 

const Footer = () => {
  return (
    <footer>
      <SectionHeader text="FOOTER" />
      <ImageComponent src={logoHorizontal} alt="logo" />
    </footer>
  );
};

export default Footer;
