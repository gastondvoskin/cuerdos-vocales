import ImageComponent from "../components-reusable/ImageComponent";
import logo from "../assets/images/enterprise/logo.webp";
import logoVertical from "../assets/images/enterprise/logo-vertical.webp";
import { TARGETS } from "../constants/sections";
import NavLink from "./NavLink";
import { useState } from "react";
import { SECTIONS } from "../constants/sections";
import { Link } from "react-scroll";

const NavLarge = () => {
  const [currentSection, setCurrentSection] = useState<string>(SECTIONS.HOME);

  return (
    <header className="hidden md:block">
      <nav className="fixed w-full h-16 shadow-md z-10">
        <div className="h-full flex justify-between items-center bg-myWhite-100">
          <Link
            to={SECTIONS.HOME}
            smooth={true}
            duration={300}
            className="flex items-center"
          >
            <ImageComponent src={logo} alt="logo" className="h-16" />
            <ImageComponent
              src={logoVertical}
              alt="Logo Vertical"
              className="h-11"
            />
          </Link>

          <ul className="flex gap-8 pr-8">
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
        </div>
      </nav>
    </header>
  );
};

export default NavLarge;
