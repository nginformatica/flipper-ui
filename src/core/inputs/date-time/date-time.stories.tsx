import React, { useState } from 'react'
import type { IProps } from '.'
import type { DefaultProps } from '@/core/types'
import type {
    DatePickerProps,
    TimePickerProps,
    DateTimePickerProps
} from '@mui/x-date-pickers'
import type { Meta, StoryObj } from '@storybook/react'
import DateTime from '.'

const meta: Meta<typeof DateTime> = {
    title: 'Inputs/DateTime',
    component: DateTime,
    argTypes: {
        type: {
            options: ['date', 'time', 'datetime'],
            control: { type: 'radio' },
            description: 'The type of the picker'
        },
        placeholder: {
            control: 'text',
            description: 'The placeholder of the input'
        },
        fullWidth: {
            control: 'boolean',
            description: 'The size of the input'
        },
        disabled: {
            control: 'boolean',
            description: 'The input disabled state'
        },
        error: {
            control: 'boolean',
            description: 'The input error state'
        },
        required: {
            control: 'boolean',
            description: 'The input required state'
        },
        margin: {
            control: 'text',
            description: 'The input margin'
        },
        padding: {
            control: 'text',
            description: 'The input padding'
        },
        style: {
            control: 'object',
            description: 'The input style'
        }
    }
}

export default meta

type Story = StoryObj<typeof DateTime>

const DateTimeWrapper = (
    args: JSX.IntrinsicAttributes &
        DatePickerProps<Date, false> &
        TimePickerProps<Date, false> &
        DateTimePickerProps<Date, false> &
        IProps &
        DefaultProps
) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())

    const handleDateChange = (date: Date) => {
        setSelectedDate(date)
    }

    return (
        <DateTime {...args} value={selectedDate} onChange={handleDateChange} />
    )
}

export const dateTime: Story = {
    render: ({ ...args }) => {
        return <DateTimeWrapper {...args} />
    },
    args: {
        type: 'date',
        placeholder: 'Selecione',
        fullWidth: true,
        disabled: false,
        error: false,
        required: false,
        margin: '',
        padding: '',
        style: {}
    }
}
