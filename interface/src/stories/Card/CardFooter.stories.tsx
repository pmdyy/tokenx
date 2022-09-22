import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CardFooter from './CardFooter'

export default {
  title: 'Components/Card/CardFooter',
  component: CardFooter,
} as ComponentMeta<typeof CardFooter>

const Template: ComponentStory<typeof CardFooter> = (args) => <CardFooter {...args} />

export const Default = Template.bind({})

Default.args = {
  children: <>Default Card Body Content</>,
}
