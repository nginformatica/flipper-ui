import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Paper from '../core/Paper'

export default {
    title: 'Paper',
    component: Paper
} as ComponentMeta<typeof Paper>

const Template: ComponentStory<typeof Paper> = args => <Paper { ...args } />

const defaultArgs = {
    padding: 24,
    margin: 24
}

const argsWithChildren = {
    ...defaultArgs,
    children: 'I am a Paper.'
}

export const Default = () => (
    <Paper style={ { ...defaultArgs } }>
        I am a Paper.
    </Paper>
)

export const Square = Template.bind({})
Square.args = {
    ...argsWithChildren,
    square: true
}

export const NoElevated = Template.bind({})
NoElevated.args = {
    ...argsWithChildren,
    elevation: 0
}

export const Elevated = Template.bind({})
Elevated.args = {
    ...argsWithChildren,
    elevation: 12
}

export const MaxEletavion = Template.bind({})
MaxEletavion.args = {
    ...argsWithChildren,
    elevation: 24
}
