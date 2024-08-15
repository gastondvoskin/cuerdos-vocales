import ImageComponent from "../components-reusable/ImageComponent";
import logo from "../assets/images/enterprise/logo.webp";
import logoVertical from "../assets/images/enterprise/logo-vertical.webp";
import { TARGETS } from "../constants/sections";
import NavLink from "./NavLink";
import { useState } from "react";
import { SECTIONS } from "../constants/sections";


const NavLarge = () => {
  const [currentSection, setCurrentSection] = useState<string>(SECTIONS.HOME);

  return (
    <header>
      <nav>
        <ImageComponent src={logo} alt="logo" />
        <ImageComponent src={logoVertical} alt="Logo Vertical" />
        <ul>
          {TARGETS.map((target, index: number) => (
            <li>
              <NavLink
                key={index}
                target={target}
                currentSection={currentSection}
                setCurrentSection={setCurrentSection}
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavLarge;
