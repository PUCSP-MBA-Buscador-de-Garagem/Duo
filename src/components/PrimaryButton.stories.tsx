import { Meta, StoryObj } from '@storybook/react'
import { IPrimaryButtonProps, PrimaryButton } from "./PrimaryButton";

export default {
  title: 'Components/PrimaryButton',
  component: PrimaryButton,
  args: {
    children: 'Button'
  },
  argTypes: {}
  
} as Meta<IPrimaryButtonProps>

export const Default: StoryObj<IPrimaryButtonProps> = {}