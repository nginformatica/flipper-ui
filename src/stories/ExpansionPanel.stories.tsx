import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ExpansionPanel from '../core/ExpansionPanel'
import Typography from '../core/Typography'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Button from '../core/Button'

export default {
    title: 'ExpansionPanel',
    component: ExpansionPanel
} as ComponentMeta<typeof ExpansionPanel>

const Template: ComponentStory<typeof ExpansionPanel> = args => (
    <ExpansionPanel { ...args } />
)
export const Default = Template.bind({})

Default.args = {
    summary: 'Pulp Fiction',
    onHelperClick: () => window.alert('HELP!'),
    expandIcon: <ExpandMore />,
    actions: <Button color='primary'>Confirm</Button>,
    details: (
        <div>
            <Typography gutterBottom>
                books about imaginary characters and events, produced in large
                quantities and intended to be read by many people but not
                considered to be of very good quality:
            </Typography>
            <Typography variant='caption'>
                She was reading a pulp fiction thriller with a lurid cover.
            </Typography>
        </div>
    )
}

export const Disabled = Template.bind({})

Disabled.args = {
    disabled: true,
    summary: 'Dormammu',
    details: 'I have come to bargain',
    expandIcon: <ExpandMore />
}
