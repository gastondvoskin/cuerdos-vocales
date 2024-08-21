import ImageComponent from "../components-reusable/ImageComponent";
import logoHorizontal from "../assets/images/enterprise/logo-horizontal.webp"; 

const Footer = () => {
  return (
    <footer className="flex h-14 bg-myWhite-100">
      <ImageComponent src={logoHorizontal} alt="logo" className="w-6/12 max-w-80 mx-auto my-auto" />
    </footer>
  );
};

export default Footer;
