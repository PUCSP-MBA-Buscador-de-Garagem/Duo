import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from '@radix-ui/react-slot';


export interface ITextInputRootProps {
  children: ReactNode
}

function TextInputRoot(props: ITextInputRootProps) {
  return (
    <div className="flex items-center gap-3 bg-gray-150 h-12 py-4 px-3 rounded">
      { props.children }
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'


export interface ITextInputIconProps {
  children: ReactNode
}

function TextInputIcon(props: ITextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      { props.children }
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'


export interface ITextInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputField(props: ITextInputFieldProps) {
  return (
    <input 
      className="bg-transparent flex-1 outline-none text-gray-800 placeholder:text-gray-400"
      {...props}
    />
  )
}

TextInputField.displayName = "TextInput.Field"


export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Field: TextInputField
}