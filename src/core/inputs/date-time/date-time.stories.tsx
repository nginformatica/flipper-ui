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
        type: 'date'
    }
}
