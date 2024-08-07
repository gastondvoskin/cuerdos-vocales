import SectionHeader from "../components-reusable/SectionHeader"; 
import ImageComponent from "../components-reusable/ImageComponent";
import logo from "../assets/images/enterprise/logo.webp"; 
import logoVertical from "../assets/images/enterprise/logo-vertical.webp"; 

const Nav = () => {
  return (
    <nav>
      <SectionHeader text="NAV" />
      <ImageComponent src={logo} alt="logo" />
      <ImageComponent src={logoVertical} alt="Logo Vertical" />
    </nav>
  );
};

export default Nav;
