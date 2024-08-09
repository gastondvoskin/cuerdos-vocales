import ImageComponent from "../components-reusable/ImageComponent";
import logo from "../assets/images/enterprise/logo.webp";
import logoVertical from "../assets/images/enterprise/logo-vertical.webp";
import TARGETS from "../constants/sections";
import NavLink from "./NavLink";
import { useState } from "react";

const NavSmall = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <header>
      <nav>
        <ImageComponent src={logo} alt="logo" />
        <ImageComponent src={logoVertical} alt="Logo Vertical" />
        <button onClick={() => {setOpenMenu(!openMenu)}}>MENU (BARS)</button>
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
