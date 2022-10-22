import { ButtonHTMLAttributes } from "react";

interface IPrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function PrimaryButton(props: IPrimaryButtonProps) {
  return (
    <button
      className="text-white h-12 bg-turq-300 text-gray-050 rounded hover:bg-turq-200 hover:text-gray-400"
      {...props}>
        {props.children}
    </button>
  )
}