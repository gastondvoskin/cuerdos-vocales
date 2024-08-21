import { Link } from "react-scroll";
import { INavLinkProps } from "../types"; 

const NavLink: React.FC<INavLinkProps> = ({ target, currentSection, setCurrentSection, setOpenMenu }) => {
  const isCurrent: boolean = target.id === currentSection;

  const IconComponent = target.icon;
  return (
    <div className={`flex items-center gap-2 p-1 rounded-md ${isCurrent ? "border-b-2 border-myOlive-900 text-myOlive-900" : " text-myPurple-500"} hover:bg-myPurple-100 hover:text-myWhite-500 cursor-pointer`} >
      <IconComponent />
      <Link
        to={target.id} 
        onClick={() => {
          setCurrentSection(target.id); 
          setOpenMenu && setOpenMenu(false); // LargeNav does not have setOpenMenu
        }}
        smooth={true}
        duration={300}
        
      >
        {target.text}
      </Link>
    </div>
  );
};

export default NavLink; 