import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TextField from '../core/TextField'
import ListItem from '../core/ListItem'
import InputAdornment from '../core/InputAdornment'

export default {
    title: 'TextField',
    component: TextField
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = args => (
    <TextField { ...args } />
)

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

export const withSelect = () => (
    <div>
        <TextField select value='reais'>
            { [
                { label: 'R$', value: 'reais' },
                { label: '$', value: 'dollar' }
            ].map(({ label, value }) => (
                <ListItem key={ value } value={ value }>
                    { label }
                </ListItem>
            )) }
        </TextField>
        <TextField select value='fable'>
            { [
                { label: 'Elm', value: 'elm' },
                { label: 'ReasonML', value: 'reasonml' },
                { label: 'Purescript', value: 'purescript' },
                { label: 'Fable', value: 'fable' }
            ].map(({ label, value }) => (
                <ListItem key={ value } value={ value }>
                    { label }
                </ListItem>
            )) }
        </TextField>
    </div>
)
