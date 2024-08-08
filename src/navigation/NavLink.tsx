import { Link } from "react-scroll";
import { INavLinkProps } from "../types";

const NavLink: React.FC<INavLinkProps> = ({ target }) => {
  return (
    <Link to={target.id} smooth={true} duration={300}>
      {target.text}
    </Link>
  );
};

export default NavLink;
