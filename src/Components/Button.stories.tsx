import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Click Me',
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <div className='w-60'>
        {Story()}
      </div>
    )
  ]
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}
