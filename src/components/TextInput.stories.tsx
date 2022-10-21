import { ITextInputRootProps, TextInput } from "./TextInput";
import { Envelope } from 'phosphor-react';
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Field placeholder="Type your email"/>
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<ITextInputRootProps>

export const Default: StoryObj<ITextInputRootProps> = {}

export const WithoutIcon: StoryObj<ITextInputRootProps> = {
  args: {
    children: <TextInput.Field placeholder="Type..." />
  }
}