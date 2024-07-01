import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import DateTime from '.'

const meta: Meta<typeof DateTime> = {
    title: 'Inputs/DateTime',
    component: DateTime,
    argTypes: {
        type: {
            options: ['date', 'time', 'datetime'],
            control: { type: 'radio' },
            description: 'The type of the filter.'
        }
    }
}

export default meta

type Story = StoryObj<typeof DateTime>

export const dateTime: Story = {
    render: ({ ...args }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [selectedDate, setSelectedDate] = useState<Date | null>(
            new Date()
        )

        const handleDateChange = (date: Date) => {
            setSelectedDate(date)
        }

        return (
            <DateTime
                {...args}
                value={selectedDate}
                onChange={handleDateChange}
            />
        )
    },
    args: {
        type: 'date'
    }
}
