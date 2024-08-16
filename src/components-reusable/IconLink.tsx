import { IIconLinkProps } from "../types";

const IconLink: React.FC<IIconLinkProps> = ({ href, Icon, label, color }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopeneer noreferrer"
      aria-label={label}
      title={label}
      className="transition-transform transform hover:scale-125"
    >
      <Icon size={44} color={color} />
    </a>
  );
};

export default IconLink;
