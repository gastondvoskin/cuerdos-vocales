import ImageComponent from "../components-reusable/ImageComponent";
import logoHorizontal from "../assets/images/enterprise/logo-horizontal.webp"; 

const Footer = () => {
  return (
    <footer className="flex h-24 bg-myWhite-100">
      <ImageComponent src={logoHorizontal} alt="logo" className="h-10 mx-auto my-auto" />
    </footer>
  );
};

export default Footer;
