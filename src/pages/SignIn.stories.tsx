import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { rest } from 'msw'
import { expect } from '@storybook/jest'
import { SignIn } from './SignIn'

export default {
  title: 'Pages/Sign In',
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({
            message: 'Login realizado',
          }))
        })
      ]
    }
  }
} as Meta

export const Default: StoryObj = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail!'), 'glomenha@gmail.com.br')
    userEvent.type(canvas.getByPlaceholderText('******'), 'MinhaSenhaMaluca@098')

    userEvent.click(canvas.getByRole('button'))

    waitFor(() => expect(canvas.getByText("Login realizado!")).toBeInTheDocument())
  }
}
