import { IButtonProps } from "../types"

const Button: React.FC<IButtonProps> = ({ text, onClick, href }) => {
  if (href) {
    return (
      <a href={href}>
        {text}
      </a>
    )
  } else {
    return (
      <button onClick={onClick}>
        {text}
      </button>
    )
  }
}

export default Button