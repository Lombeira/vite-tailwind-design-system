import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputInputProps, TextInputRootProps } from './TextInput'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon><Envelope /></TextInput.Icon>,
      <TextInput.Input placeholder="Digite seu email"></TextInput.Input>,
    ],
  },
  argTypes: {
    children: {
      control: {
        type: null,
      }
    }
  },
  decorators: [
    (Story) => (
      <div className='w-60'>
        {Story()}
      </div>
    )
  ]

} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Input placeholder="Digite seu email"></TextInput.Input>
    ],
  },
}

