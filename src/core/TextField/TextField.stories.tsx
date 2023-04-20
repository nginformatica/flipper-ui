import React, { ChangeEvent, useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import TextField from '.'
import ListItem from '../ListItem'
import InputAdornment from '../InputAdornment'

export default {
    title: 'TextField',
    component: TextField
} as Meta<typeof TextField>

const Template: StoryFn<typeof TextField> = args => <TextField {...args} />

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
        <div>
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
        </div>
    )
}

export const useWithSelectAndClear = () => {
    const [value, setValue] = useState('fable')

    const onClear = () => {
        setValue('')
    }

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setValue(event.target.value)
    }

    return (
        <div>
            <TextField
                select
                value={value}
                hasClear
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
        </div>
    )
}
