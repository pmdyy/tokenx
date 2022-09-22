import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Typography from '@mui/material/Typography'
import CardBody from './CardBody'

export default {
  title: 'Components/Card/CardBody',
  component: CardBody,
} as ComponentMeta<typeof CardBody>

const Template: ComponentStory<typeof CardBody> = (args) => <CardBody {...args} />

export const Default = Template.bind({})

Default.args = {
  color: '#fff',
  backgroundColor: 'rgba(11, 29, 50, 1)',
  padding: 1,
  children: <Typography variant="inherit">Body Content</Typography>,
}
