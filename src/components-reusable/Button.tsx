import { IButtonProps } from "../types";

const Button: React.FC<IButtonProps> = ({ text, onClick, href, Icon, bgColor, textColor, isDisabled }) => {
  const sharedClassName = `flex items-center gap-2 m-2 px-3 py-2 rounded-3xl shadow-lg bg-${bgColor} text-${textColor} hover:bg-${!isDisabled && textColor} hover:text-${!isDisabled && bgColor}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={sharedClassName}>
        {Icon && <Icon />}
        {text}
      </a>
    );
  } else {
    return (
      <button onClick={onClick} className={sharedClassName} disabled={isDisabled}>
        {Icon && <Icon />}
        {text}
      </button>
    );
  }
};

export default Button;

