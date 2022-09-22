import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Typography from '@mui/material/Typography'
import Card from './Card'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Default = Template.bind({})

Default.args = {
  backgroundColor: 'rgba(11, 29, 50, 1)',
  color: '#fff',
  children: (
    <>
      <CardHeader title="Default Text" tooltip="Default Tooltip Text" />
      <CardBody backgroundColor="rgba(11, 29, 50, 1)" color="#fff" padding={1}>
        <Typography variant="inherit">Ether Flow Activity</Typography>
      </CardBody>
      <CardFooter></CardFooter>
    </>
  ),
}
