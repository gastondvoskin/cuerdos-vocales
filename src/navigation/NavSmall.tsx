import ImageComponent from "../components-reusable/ImageComponent";
import logo from "../assets/images/enterprise/logo.webp";
import logoVertical from "../assets/images/enterprise/logo-vertical.webp";
import TARGETS from "../constants/sections";
import NavLink from "./NavLink";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";



const NavSmall = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <header>
      <nav>
        <ImageComponent src={logo} alt="logo" />
        <ImageComponent src={logoVertical} alt="Logo Vertical" />
        <button onClick={() => {setOpenMenu(!openMenu)}} title={openMenu ? "Cerrar" : "Abrir"} aria-label={openMenu ? "Cerrar" : "Abrir"}>{openMenu ? <IoClose /> : <FaBars />}</button>
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
