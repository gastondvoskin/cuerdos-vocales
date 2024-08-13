import ImageComponent from "../components-reusable/ImageComponent";
import logo from "../assets/images/enterprise/logo.webp";
import logoVertical from "../assets/images/enterprise/logo-vertical.webp";
import TARGETS from "../constants/sections";
import NavLink from "./NavLink";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5"; 
import { Link } from "react-scroll";
import bgPurple from "../assets/images/enterprise/bg-purple.jpg";

const NavSmall = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <header>
      <nav className="fixed w-full h-20 shadow-md">
        {/* <img src={bgPurple} alt="Purple background" className="opacity-30 h-full w-full absolute" />    */}
        <div className="h-full flex justify-between items-center bg-myWhite-100">
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
            {openMenu ? <IoClose size={26} /> : <FaBars size={22}  />}
          </button>
        </div>
        {openMenu && (
          <ul className="flex flex-col items-end p-4 gap-2 bg-gradient-to-b from-myPink-500 to-myPurple-100">
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
