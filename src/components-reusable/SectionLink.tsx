import { Link } from "react-scroll";
import { ISectionLinkProps } from "../types";

const SectionLink: React.FC<ISectionLinkProps> = ({ text, to }) => {
  return (
    <Link to={to} smooth={true} duration={300} className="text-myPurple-900 font-medium hover:bg-myPurple-100 hover:text-myWhite-500 cursor-pointer">
      {text}
    </Link>
  );
};

export default SectionLink;
