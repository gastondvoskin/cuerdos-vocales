import ImageComponent from "../components-reusable/ImageComponent";
import logo from "../assets/images/enterprise/logo.webp";
import logoVertical from "../assets/images/enterprise/logo-vertical.webp"; 
import TARGETS from "../constants/sections";
import NavLink from "./NavLink";

const NavSmall = () => {
  return (
    <header>
      <nav>
        <ImageComponent src={logo} alt="logo" />
        <ImageComponent src={logoVertical} alt="Logo Vertical" />
        <ul>
          {TARGETS.map((target, index: number) => (
            <li>
              <NavLink key={index} target={target} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavSmall;
