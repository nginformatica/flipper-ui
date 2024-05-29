/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import type { ChangeEvent } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import ListItem from '@/core/data-display/list-item'
import TextField from '.'
import { Wrapper } from './styles'

const meta: Meta<typeof TextField> = {
    title: 'Inputs/TextField',
    component: TextField,
    argTypes: {
        placeholder: {
            control: 'text',
            description: 'The input placeholder.'
        },
        label: {
            control: 'text',
            description: 'The input label.'
        },
        fullWidth: {
            control: 'boolean',
            description: 'The input width.'
        },
        select: {
            control: 'boolean',
            description: 'To transform the input in select.'
        },
        hasClear: {
            control: 'boolean',
            description: 'To set the hasClear button.'
        },
        inputProps: {
            control: 'object',
            description: 'To set the max-lenght charater count.'
        },
        type: {
            options: ['text', 'number', 'date'],
            control: { type: 'radio' },
            description: 'The type of the input.'
        }
    }
}

export default meta

type Story = StoryObj<typeof TextField>

export const textfield: Story = {
    render: ({ ...args }) => {
        return <TextField {...args} />
    },
    args: {
        placeholder: 'Description',
        type: 'text',
        label: 'Price',
        fullWidth: true,
        InputLabelProps: { shrink: true },
        onHelperClick: () => window.alert('HELP!')
    }
}

export const withSelectAndClear: Story = {
    render: ({ ...args }) => {
        const [value, setValue] = useState('fable')

        const onClear = () => {
            setValue('')
        }

        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value)
        }

        return (
            <Wrapper>
                <TextField
                    {...args}
                    value={value}
                    onClear={onClear}
                    onChange={handleChange}>
                    {[
                        { label: null, value: '' },
                        { label: 'Elm', value: 'elm' },
                        { label: 'ReasonML', value: 'reasonml' },
                        { label: 'Purescript', value: 'purescript' },
                        { label: 'Fable', value: 'fable' }
                    ].map(({ label, value }) => (
                        <ListItem key={value} value={value}>
                            {label}
                        </ListItem>
                    ))}
                </TextField>
            </Wrapper>
        )
    },
    args: {
        select: true,
        hasClear: true,
        fullWidth: true,
        placeholder: '',
        type: '',
        label: ''
    }
}

export const combobox: Story = {
    render: ({ ...args }) => {
        const [value, setValue] = useState('fable')

        const onClear = () => {
            setValue('')
        }

        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value)
        }

        return (
            <Wrapper>
                <TextField
                    {...args}
                    options={[
                        { label: 'Elm', value: 'elm' },
                        { label: 'ReasonML', value: 'reasonml' },
                        { label: 'Purescript', value: 'purescript' },
                        { label: 'Fable', value: 'fable' }
                    ]}
                    value={value}
                    onClear={onClear}
                    onChange={handleChange}
                />
            </Wrapper>
        )
    },
    args: {
        select: true,
        hasClear: true,
        fullWidth: true,
        placeholder: '',
        type: '',
        label: ''
    }
}

export const withCharacterCount: Story = {
    render: ({ ...args }) => {
        const [value, setValue] = useState('')

        const onClear = () => {
            setValue('')
        }

        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value)
        }

        return (
            <Wrapper>
                <TextField
                    {...args}
                    characters
                    value={value}
                    onClear={onClear}
                    onChange={handleChange}
                />
            </Wrapper>
        )
    },
    args: {
        placeholder: 'Description',
        type: '',
        label: '',
        inputProps: {
            maxLength: 6
        },
        select: false,
        hasClear: false,
        fullWidth: true
    }
}
