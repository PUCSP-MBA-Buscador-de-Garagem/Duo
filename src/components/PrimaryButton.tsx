import { ButtonHTMLAttributes } from "react";

export interface IPrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function PrimaryButton(props: IPrimaryButtonProps) {
  return (
    <button
      className="
        h-12
        w-full
        text-white
        font-semibold
        bg-turq-300
        text-gray-050
        rounded
        transition-colors
        hover:bg-turq-200 
        hover:text-gray-400"
      {...props}>
        {props.children}
    </button>
  )
}