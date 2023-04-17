import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Typography from '.'

export default {
    title: 'Typography',
    component: Typography
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = args => (
    <Typography {...args}> {args.children} </Typography>
)

export const Default = Template.bind({})
Default.args = {
    children: 'This is a Typography text'
}

export const ErrorText = Template.bind({})
ErrorText.args = {
    color: 'error',
    children: 'Text with error color'
}

export const Primary = Template.bind({})
Primary.args = {
    color: 'primary',
    children: 'Text with primary color'
}

export const Secondary = Template.bind({})
Secondary.args = {
    color: 'secondary',
    children: 'Text with secondary color'
}

export const TextPrimary = Template.bind({})
TextPrimary.args = {
    color: 'textPrimary',
    children: 'Text with textPrimary color'
}

export const TextSecondary = Template.bind({})
TextSecondary.args = {
    color: 'textSecondary',
    children: 'Text with textSecondary color'
}

export const Button = Template.bind({})
Button.args = {
    variant: 'button',
    children: 'Button'
}

export const Caption = Template.bind({})
Caption.args = {
    variant: 'caption',
    children: 'Caption'
}

export const Body1 = Template.bind({})
Body1.args = {
    variant: 'body1',
    children: 'Body1'
}

export const Body2 = Template.bind({})
Body2.args = {
    variant: 'body2',
    children: 'Body2'
}

export const Subtitle1 = Template.bind({})
Subtitle1.args = {
    variant: 'subtitle1',
    children: 'Subtitle1'
}

export const Subtitle2 = Template.bind({})
Subtitle2.args = {
    variant: 'subtitle2',
    children: 'Subtitle2'
}

export const h1 = Template.bind({})
h1.args = {
    variant: 'h1',
    children: 'h1'
}

export const h2 = Template.bind({})
h2.args = {
    variant: 'h2',
    children: 'h2'
}

export const h3 = Template.bind({})
h3.args = {
    variant: 'h3',
    children: 'h3'
}

export const h4 = Template.bind({})
h4.args = {
    variant: 'h4',
    children: 'h4'
}

export const h5 = Template.bind({})
h5.args = {
    variant: 'h5',
    children: 'h5'
}

export const h6 = Template.bind({})
h6.args = {
    variant: 'h6',
    children: 'h6'
}
