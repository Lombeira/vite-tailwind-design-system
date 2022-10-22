
import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }

export interface TextInputRootProps { children: ReactNode }

export interface TextInputIconProps { children: ReactNode }

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className='flex items-center h-12 gap-2 py-3 px-3 rounded bg-gray-800 w-full  focus-within:ring-2 ring-cyan-300'>
      {children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'

function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">{children}</Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'

function TextInputInput(props: TextInputInputProps) {
  return (
    <input className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
      {...props}
    />
  )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}