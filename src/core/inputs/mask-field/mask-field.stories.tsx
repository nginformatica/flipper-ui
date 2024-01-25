import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import { InputAdornment } from '@/core/inputs/input-adornment'
import { MaskField } from '.'

export default {
    title: 'Inputs/MaskField',
    component: MaskField,
    argTypes: {
        helperText: { control: 'text' },
        value: { control: 'text' || 'number' }
    }
} as Meta<typeof MaskField>

const Template: StoryFn<typeof MaskField> = args => <MaskField {...args} />

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
