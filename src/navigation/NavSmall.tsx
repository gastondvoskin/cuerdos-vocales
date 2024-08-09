import ImageComponent from "../components-reusable/ImageComponent";
import logo from "../assets/images/enterprise/logo.webp";
import logoVertical from "../assets/images/enterprise/logo-vertical.webp";
import TARGETS from "../constants/sections";
import NavLink from "./NavLink";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5"; 
import { Link } from "react-scroll";

const NavSmall = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <header>
      <nav className="fixed flex w-full items-center h-20 justify-between bg-gradient-to-r bg-pink-200 shadow-md">
        <Link to="home" smooth={true} duration={300} className="flex items-center">
          <ImageComponent src={logo} alt="logo" className="h-16" />
          <ImageComponent src={logoVertical} alt="Logo Vertical" className="h-11" />
        </Link>
        <button
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
          title={openMenu ? "Cerrar" : "Abrir"}
          aria-label={openMenu ? "Cerrar" : "Abrir"}
          className="pr-5"
        >
          {openMenu ? <IoClose size={22} /> : <FaBars size={22}  />}
        </button>
        {openMenu && (
          <ul>
            {TARGETS.map((target, index: number) => (
              <li>
                <NavLink key={index} target={target} />
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default NavSmall;
