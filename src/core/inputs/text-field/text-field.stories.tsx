import type { ChangeEvent } from 'react'
import React, { useState } from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import ListItem from '@/core/data-display/list-item'
import InputAdornment from '@/core/inputs/input-adornment'
import { TextField } from '.'
import { Wrapper } from './styles'

export default {
    title: 'Inputs/TextField',
    component: TextField
} as Meta<typeof TextField>

const Template: StoryFn<typeof TextField> = args => <TextField {...args} />
const LIST = [
    { label: 'Elm', value: 'elm' },
    { label: 'ReasonML', value: 'reasonml' },
    { label: 'Purescript', value: 'purescript' },
    { label: 'Fable', value: 'fable' }
]

export const Default = () => <TextField placeholder='Description' />

export const withInputAdornment = Template.bind({})
withInputAdornment.args = {
    type: 'number',
    label: 'Price',
    InputProps: {
        startAdornment: <InputAdornment position='start'>$</InputAdornment>
    },
    InputLabelProps: { shrink: true }
}

export const withHelperButton = Template.bind({})
withHelperButton.args = {
    placeholder: 'Description',
    onHelperClick: () => window.alert('HELP!')
}

export const withSelect = () => {
    return (
        <Wrapper>
            <TextField select value='reais'>
                {[
                    { label: 'R$', value: 'reais' },
                    { label: '$', value: 'dollar' }
                ].map(({ label, value }) => (
                    <ListItem key={value} value={value}>
                        {label}
                    </ListItem>
                ))}
            </TextField>
            <TextField select value='fable'>
                {[
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
}

export const useWithSelectAndClear = () => {
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
                select
                hasClear
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
}

export const combobox = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
                hasClear
                options={LIST}
                value={value}
                onClear={onClear}
                onChange={handleChange}
            />
            <TextField
                hasClear
                value={value}
                placeholder='Description'
                onClear={onClear}
                onChange={handleChange}
            />
        </Wrapper>
    )
}

export const withCharacterCount = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('')

    const onClear = () => {
        setValue('')
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <TextField
            hasClear
            characters
            value={value}
            placeholder='Description'
            inputProps={{
                maxLength: 6
            }}
            onClear={onClear}
            onChange={handleChange}
        />
    )
}
