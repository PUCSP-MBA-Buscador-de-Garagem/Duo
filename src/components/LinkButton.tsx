import { ReactNode } from "react"

interface ILinkButtonProps {
  children: ReactNode
}

export function LinkButton({children}: ILinkButtonProps) {
  return (
    <span className="text-gray-400 cursor-pointer hover:underline">
      {children}
    </span>
  )  
}