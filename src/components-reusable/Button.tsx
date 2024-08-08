import { IButtonProps } from "../types";

const Button: React.FC<IButtonProps> = ({ text, onClick, href, Icon }) => {
  if (href) {
    return (
      <a href={href}>
        {Icon && <Icon />}
        {text}
      </a>
    );
  } else {
    return (
      <button onClick={onClick}>
        {Icon && <Icon />}
        {text}
      </button>
    );
  }
};

export default Button;
