import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import MaskField from '.'

const meta: Meta<typeof MaskField> = {
    title: 'Inputs/MaskField',
    component: MaskField,
    argTypes: {
        label: {
            control: 'text',
            description: 'The mask field label'
        },
        hasFormat: {
            control: 'boolean',
            description:
                'To set if the mask field has format or is a number field'
        },
        format: {
            control: 'text',
            description: 'To set if the mask format on the field'
        },
        decimalScale: {
            control: 'number',
            description: 'The decimalScale of the number typed'
        },
        decimalSeparator: {
            control: 'text',
            description: 'The decimalSeparator of the number typed'
        },
        thousandSeparator: {
            control: 'text',
            description: 'The thousandSeparator of the number typed'
        },
        fixedDecimalScale: {
            control: 'boolean',
            description: 'To set the fixedDecimalScale number'
        },
        margin: {
            control: 'text',
            description: 'The mask field margin'
        },
        padding: {
            control: 'text',
            description: 'The mask field padding'
        },
        style: {
            control: 'object',
            description: 'The mask field style'
        }
    }
}

export default meta

type Story = StoryObj<typeof MaskField>

export const maskField: Story = {
    render: ({ ...args }) => {
        return <MaskField {...args} />
    },
    args: {
        label: 'Price',
        hasFormat: false,
        format: '####',
        decimalScale: 2,
        decimalSeparator: ',',
        thousandSeparator: '.',
        fixedDecimalScale: true,
        margin: '',
        padding: '',
        style: {}
    }
}
