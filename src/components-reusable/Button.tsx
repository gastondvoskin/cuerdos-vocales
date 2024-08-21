import { IButtonProps } from "../types";

const Button: React.FC<IButtonProps> = ({ text, onClick, href, Icon, /* textColor,  */isDisabled }) => {
  const sharedClassName = `flex items-center text-xs font-bold gap-2 m-2 px-3 py-2 rounded-3xl shadow-lg bg-myWhite-500 hover:bg-myPurple-100`;

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
        {text}
        {Icon && <Icon />}
      </button>
    );
  }
};

export default Button;

// Fix
// hover:bg-${!isDisabled && textColor} hover:text-${!isDisabled && "myWhite-500"} text-${textColor}