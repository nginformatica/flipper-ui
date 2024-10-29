import React, { useState } from 'react'
import type { RadioGroupProps } from '.'
import type { Meta, StoryObj } from '@storybook/react'
import RadioGroup from '.'

const meta: Meta<typeof RadioGroup> = {
    title: 'Inputs/Radio Group',
    component: RadioGroup,
    argTypes: {
        value: {
            control: 'text',
            description: 'The radio group value'
        },
        color: {
            options: ['default', 'primary', 'secondary'],
            control: { type: 'radio' },
            description:
                'The radio group color. Must be ' +
                '`default | primary | secondary`. ' +
                'If not set, the default is "secondary"'
        },
        disabled: {
            control: 'boolean',
            description: 'To set the disabled state on the radio group'
        },
        margin: {
            control: 'text',
            description: 'The radio group margin'
        },
        padding: {
            control: 'text',
            description: 'The radio group padding'
        },
        style: {
            control: 'object',
            description: 'The radio group style'
        },
        onChange: {
            control: false,
            description: 'The onChange function, must be `() => void`'
        }
    }
}

export default meta

type Story = StoryObj<typeof RadioGroup>

const RadioGroupWrapper = (args: JSX.IntrinsicAttributes & RadioGroupProps) => {
    const [option, setOption] = useState('first')

    return (
        <RadioGroup
            {...args}
            value={option}
            title='My options'
            name='options'
            options={[
                {
                    label: 'First option',
                    value: 'first'
                },
                {
                    label: 'Second Option',
                    value: 'second'
                }
            ]}
            onChange={event => setOption(event.target.value)}
        />
    )
}

export const radioGroup: Story = {
    render: ({ ...args }) => {
        return <RadioGroupWrapper {...args} />
    },
    args: {
        value: 'first',
        color: 'secondary',
        disabled: false,
        margin: '',
        padding: '',
        style: {},
        onChange: () => alert('You clicked on the radio!')
    }
}
