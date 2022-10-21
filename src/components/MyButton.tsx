import { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function MyButton({children}: IProps) {
  return (
    <button>
      { children }
    </button>
  )
}