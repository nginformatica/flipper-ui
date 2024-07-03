import React, { useState } from 'react'
import { isValid } from 'date-fns'
import DateTime from '@/core/inputs/date-time'

interface IProps {
    initialValue?: Date
    dateProps?: object
}

const Default = ({ dateProps, initialValue }: IProps) => {
    const [value, setValue] = useState<Date | undefined | null>(
        initialValue ?? new Date()
    )

    const handleChange = (date: Date | undefined | null) => {
        if (isValid(date)) {
            setValue(date)
        }
    }

    return <DateTime value={value} onChange={handleChange} {...dateProps} />
}

export default Default
