import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Chip from '.'
import Avatar from '../Avatar'
import FaceIcon from '@material-ui/icons/Face'

export default {
    title: 'Chip',
    component: Chip,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Chip>

const Template: ComponentStory<typeof Chip> = args => <Chip {...args} />

const commonArgs = {
    label: 'Hello darkness my old friend',
    children: 'Chip'
}

export const Default = Template.bind({})
Default.args = {
    ...commonArgs
}

export const Squared = Template.bind({})
Squared.args = {
    ...commonArgs,
    square: true
}

export const WithInitialsAvatar = Template.bind({})
WithInitialsAvatar.args = {
    ...commonArgs,
    avatar: <Avatar>HD</Avatar>
}

export const WithIconAvatar = Template.bind({})
WithIconAvatar.args = {
    ...commonArgs,
    avatar: (
        <Avatar>
            <FaceIcon />
        </Avatar>
    )
}

export const WithImageAvatar = Template.bind({})
WithImageAvatar.args = {
    ...commonArgs,
    avatar: <Avatar src='https://picsum.photos/40' />
}

export const SecondaryColor = Template.bind({})
SecondaryColor.args = {
    ...commonArgs,
    color: 'secondary'
}
