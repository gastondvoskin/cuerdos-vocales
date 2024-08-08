import { IIconLinkProps } from "../types";

const IconLink: React.FC<IIconLinkProps> = ({ href, Icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopeneer noreferrer"
      aria-label={label}
      title={label}
    >
      <Icon />
    </a>
  );
};

export default IconLink;
