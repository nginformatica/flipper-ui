import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import InputAdornment from '../InputAdornment'
import MaskField from '.'

export default {
    title: 'MaskField',
    component: MaskField,
    argTypes: {
        helperText: { control: 'text' },
        value: { control: 'text' || 'number' }
    }
} as ComponentMeta<typeof MaskField>

const Template: ComponentStory<typeof MaskField> = args => (
    <MaskField {...args} />
)

export const Default = () => <MaskField placeholder='Description' />

export const MaskFieldWithInputAdornment = Template.bind({})
MaskFieldWithInputAdornment.args = {
    fixedDecimalScale: true,
    decimalScale: 2,
    label: 'Price',
    decimalSeparator: ',',
    thousandSeparator: '.',
    InputProps: {
        startAdornment: <InputAdornment position='start'>$</InputAdornment>
    },
    InputLabelProps: { shrink: true },
    children: <MaskField />
}
