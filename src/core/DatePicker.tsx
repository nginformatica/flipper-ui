import React, { SFC } from 'react'
import { DatePicker as MuiDatePicker } from 'react-datepicker'

/* tslint:disable:no-var-requires */
require('react-datepicker/dist/react-datepicker.css')
/* tslint:enble:no-var-requires */

interface IDateField {
    showTimeSelect?: boolean
    timeFormat?: string
    timeIntervals?: number
    value?: string
    openToDate?: string
    customInput?: JSX.Element
    placeholderText?: string
    locale?: string
    selected?: JSX.Element
    onChange?(event): void
    onSelect?(event): void
}

const DatePicker: SFC<IDateField> = props =>
    <MuiDatePicker { ...props } />

export default DatePicker
