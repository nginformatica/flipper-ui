import DateTime, { DateTimeProps } from '@/core/inputs/DateTime'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { isValid, startOfDay } from 'date-fns'
import * as React from 'react'

interface IProps {
    initialValue?: string
    dateProps?: Partial<DateTimeProps>
}

const Default = ({ dateProps, initialValue }: IProps) => {
    const [value, setValue] = React.useState<MaterialUiPickersDate | string>(
        initialValue ?? new Date()
    )

    const handleChange = (
        date: MaterialUiPickersDate | null,
        value?: string
    ) => {
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
