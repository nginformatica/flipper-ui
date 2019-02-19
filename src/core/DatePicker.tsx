import { ReactNode, SFC } from 'react'
import { DatePicker as MuiDatePicker } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface IDateField {
    showTimeSelect?: boolean
    timeFormat: string
    timeIntervals: number
    value: string
    openToDate: string
    customInput?: ReactNode
    onChange?: ReactNode
    onSelect?: ReactNode
    placeholderText: string
    locale?: string
    selected?: ReactNode
}

const DatePicker: SFC<IDateField> = props =>
    <MuiDatePicker { ...props } />

export default DatePicker
