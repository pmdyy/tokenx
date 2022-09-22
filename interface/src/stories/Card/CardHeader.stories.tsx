import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CardHeader from './CardHeader'

export default {
  title: 'Components/Card/CardHeader',
  component: CardHeader,
} as ComponentMeta<typeof CardHeader>

const Template: ComponentStory<typeof CardHeader> = (args) => <CardHeader {...args} />

export const Default = Template.bind({})

Default.args = {
  title: 'Default Text',
  tooltip: 'Default Tooltip Text',
  fontSize: '1rem',
  tooltipFontSize: 12,
  iconColor: 'lightslategray',
}

export const NoTooltip = Template.bind({})

NoTooltip.args = {
  title: 'Default Text',
  tooltip: '',
}
