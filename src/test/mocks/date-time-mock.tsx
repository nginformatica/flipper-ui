import React, { useState } from 'react'
import { isValid, startOfDay } from 'date-fns'
import type { DateTimeProps } from '@/core/inputs/date-time'
import DateTime from '@/core/inputs/date-time'

interface IProps {
    initialValue?: string
    dateProps?: Partial<DateTimeProps>
}

const Default = ({ dateProps, initialValue }: IProps) => {
    const [value, setValue] = useState<Date | string | null>(
        initialValue ?? new Date()
    )

    const handleChange = (date: Date | string | null, value?: string) => {
        if (isValid(date)) {
            setValue(date)
        } else {
            setValue(value ?? '')
        }
    }

    return (
        <DateTime
            value={value}
            initialFocusedDate={startOfDay(new Date())}
            onChange={handleChange}
            {...dateProps}
        />
    )
}

export default Default
