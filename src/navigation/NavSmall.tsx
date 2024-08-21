import ImageComponent from "../components-reusable/ImageComponent";
import logo from "../assets/images/enterprise/logo.webp";
import logoVertical from "../assets/images/enterprise/logo-vertical.webp";
import { TARGETS } from "../constants/sections";
import NavLink from "./NavLink";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
import { SECTIONS } from "../constants/sections";

const NavSmall = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [currentSection, setCurrentSection] = useState<string>(SECTIONS.HOME);

  return (
    <header className="lg:hidden">
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
          <button
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
            title={openMenu ? "Cerrar" : "Abrir"}
            aria-label={openMenu ? "Cerrar" : "Abrir"}
            className="pr-5"
          >
            {openMenu ? <IoClose size={26} /> : <FaBars size={22} />}
          </button>
        </div>
        {openMenu && (
          <ul className="flex flex-col items-end p-4 gap-2 bg-myWhite-100">
            {TARGETS.map((target, index: number) => (
              <li>
                <NavLink
                  key={index}
                  target={target}
                  currentSection={currentSection}
                  setCurrentSection={setCurrentSection}
                  setOpenMenu={setOpenMenu}
                />
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default NavSmall;
