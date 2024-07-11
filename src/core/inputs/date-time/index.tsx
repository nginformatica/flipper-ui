/* eslint-disable import/no-duplicates */
import React from 'react'
import { StaticDateTimePicker, renderTimeViewClock } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker, DatePickerToolbar } from '@mui/x-date-pickers/DatePicker'
import {
    DateTimePicker,
    DateTimePickerToolbar
} from '@mui/x-date-pickers/DateTimePicker'
import { ptBR as ptBRTexts } from '@mui/x-date-pickers/locales'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker, TimePickerToolbar } from '@mui/x-date-pickers/TimePicker'
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'
import type { DefaultProps } from '../../types'
import type {
    DateOrTimeView,
    DateTimeValidationError,
    PickerChangeHandlerContext
} from '@mui/x-date-pickers'
import type {
    DatePickerProps,
    DatePickerToolbarProps
} from '@mui/x-date-pickers/DatePicker'
import type {
    DateTimePickerProps,
    DateTimePickerToolbarProps
} from '@mui/x-date-pickers/DateTimePicker'
import type {
    TimePickerProps,
    TimePickerToolbarProps
} from '@mui/x-date-pickers/TimePicker'
import { CustomWrapper } from './styles'
import { theme } from '@/theme'

const { primary } = theme.colors

export interface IProps {
    type?: 'date' | 'time' | 'datetime'
    error?: boolean
    required?: boolean
    disabled?: boolean
    placeholder?: string
    fullWidth?: boolean
}

export type TDateTime = DatePickerProps<Date> &
    TimePickerProps<Date> &
    DateTimePickerProps<Date> &
    IProps &
    DefaultProps

const formatter = (weekday: Date) =>
    format(weekday, 'eee', { locale: ptBR }).slice(0, 3)

const CustomDatePickerToolbar = (props: DatePickerToolbarProps<Date>) => {
    return (
        <DatePickerToolbar
            {...props}
            sx={{
                backgroundColor: primary.main,
                borderRadius: '4px 4px 0 0',
                padding: '16px',
                '.MuiTypography-root': {
                    color: `${primary.contrast}90`
                },
                '.MuiDatePickerToolbar-title': {
                    color: primary.contrast
                }
            }}
        />
    )
}

const CustomTimePickerToolbar = (props: TimePickerToolbarProps<Date>) => {
    return (
        <TimePickerToolbar
            {...props}
            sx={{
                backgroundColor: primary.main,
                borderRadius: '4px 4px 0 0',
                padding: '16px',
                '.MuiTypography-root': {
                    color: `${primary.contrast}90`
                },
                '.MuiPickersToolbarText-root': {
                    color: primary.contrast
                },
                '.MuiPickersToolbarText-root.Mui-selected': {
                    color: `${primary.contrast}90`
                }
            }}
        />
    )
}

const CustomDateTimePickerToolbar = (
    props: DateTimePickerToolbarProps<Date>
) => {
    return (
        <DateTimePickerToolbar
            {...props}
            sx={{
                backgroundColor: primary.main,
                borderRadius: '4px 4px 0 0',
                padding: '16px',
                '.MuiTypography-root': {
                    display: 'none'
                },
                '.MuiPickersToolbarText-root': {
                    color: primary.contrast,
                    display: 'block'
                },
                '.MuiPickersToolbarText-root.Mui-selected': {
                    color: `${primary.contrast}90`,
                    display: 'block'
                }
            }}
        />
    )
}

const CustomStaticDateTimePicker = (props: {
    value?: Date | null | undefined
    onChange:
        | ((
              value: Date | null,
              context: PickerChangeHandlerContext<DateTimeValidationError>
          ) => void)
        | undefined
    onViewChange: ((view: DateOrTimeView) => void) | undefined
}) => {
    return (
        <CustomWrapper>
            <StaticDateTimePicker
                value={props.value}
                slots={{
                    toolbar: CustomDateTimePickerToolbar,
                    actionBar: () => null
                }}
                slotProps={{
                    toolbar: {
                        toolbarFormat: 'dd MMM'
                    },
                    layout: {
                        sx: {
                            '.MuiTimeClock-root': {
                                width: 'auto',
                                padding: '0 4px',
                                '& .MuiPickersArrowSwitcher-root': {
                                    display: 'none'
                                }
                            },
                            '.MuiClock-clock': {
                                padding: '6px'
                            },
                            '.MuiClockPointer-thumb': {
                                left: 'calc(50% - 16px)',
                                borderWidth: '14px',
                                top: '-20px'
                            },
                            '.css-18tn1jy-MuiClockNumber-root': {
                                fontSize: '13px'
                            },
                            '.MuiDateTimePickerTabs-root': {
                                minHeight: '36px'
                            },
                            '.MuiTab-root': {
                                padding: '8px 16px',
                                minHeight: '36px'
                            },
                            '.MuiDateCalendar-root': {
                                maxHeight: '300px'
                            }
                        }
                    }
                }}
                dayOfWeekFormatter={(day: Date) => formatter(day)}
                onChange={props.onChange}
                onViewChange={props.onViewChange}
            />
        </CustomWrapper>
    )
}

const DateTime = ({
    id,
    padding,
    margin,
    style,
    value,
    onChange,
    error,
    minDate,
    minDateTime,
    maxDate,
    maxDateTime,
    required,
    disabled,
    placeholder,
    fullWidth,
    type = 'date',
    ...otherProps
}: TDateTime) => {
    const commonProps = {
        ...otherProps,
        value: typeof value === 'string' ? new Date(value) : value,
        error: error,
        sx: {
            '.MuiInputBase-root': {
                fontSize: '14px'
            },
            '.MuiSvgIcon-root': {
                fontSize: '1.4rem'
            },
            '.MuiFormLabel-root': {
                fontSize: '14px'
            },
            margin: margin,
            padding: padding,
            ...style
        },
        onChange: onChange
    }

    const renderChildren = () => {
        if (type === 'date') {
            return (
                <DatePicker
                    {...commonProps}
                    disabled={disabled}
                    minDate={
                        typeof minDate === 'string'
                            ? new Date(minDate)
                            : minDate
                    }
                    maxDate={
                        typeof maxDate === 'string'
                            ? new Date(maxDate)
                            : maxDate
                    }
                    slots={{ toolbar: CustomDatePickerToolbar }}
                    slotProps={{
                        textField: {
                            id: id,
                            size: 'small',
                            error: error,
                            required: required,
                            placeholder: placeholder,
                            fullWidth: fullWidth ?? true,
                            inputProps: { role: 'date-picker' }
                        },
                        toolbar: {
                            hidden: false,
                            toolbarFormat: 'eee, dd MMM'
                        },
                        popper: { placement: 'bottom-end' },
                        layout: {
                            sx: {
                                '.MuiDateCalendar-root': {
                                    maxHeight: '300px'
                                }
                            }
                        }
                    }}
                    dayOfWeekFormatter={(day: Date) => formatter(day)}
                />
            )
        }

        if (type === 'time') {
            return (
                <TimePicker
                    {...commonProps}
                    disabled={disabled}
                    slots={{
                        toolbar: CustomTimePickerToolbar,
                        actionBar: () => null,
                        leftArrowIcon: () => null,
                        rightArrowIcon: () => null
                    }}
                    slotProps={{
                        textField: {
                            id: id,
                            size: 'small',
                            error: error,
                            required: required,
                            placeholder: placeholder,
                            fullWidth: fullWidth ?? true,
                            inputProps: { role: 'date-picker' }
                        },
                        toolbar: { hidden: false },
                        popper: { placement: 'bottom-end' },
                        layout: {
                            sx: {
                                '.MuiTimeClock-root': {
                                    width: 'auto',
                                    padding: '0 4px'
                                },
                                '.MuiClock-clock': {
                                    padding: '6px'
                                },
                                '.MuiClockPointer-thumb': {
                                    left: 'calc(50% - 16px)',
                                    borderWidth: '14px',
                                    top: '-20px'
                                },
                                '.css-18tn1jy-MuiClockNumber-root': {
                                    fontSize: '13px'
                                }
                            }
                        }
                    }}
                    viewRenderers={{
                        hours: renderTimeViewClock,
                        minutes: renderTimeViewClock
                    }}
                />
            )
        }

        return (
            <DateTimePicker
                {...commonProps}
                disabled={disabled}
                minDate={
                    typeof minDate === 'string' ? new Date(minDate) : minDate
                }
                maxDate={
                    typeof maxDate === 'string' ? new Date(maxDate) : maxDate
                }
                minDateTime={
                    typeof minDateTime === 'string'
                        ? new Date(minDateTime)
                        : minDateTime
                }
                maxDateTime={
                    typeof maxDate === 'string'
                        ? new Date(maxDateTime as unknown as string)
                        : maxDateTime
                }
                slots={{ layout: CustomStaticDateTimePicker }}
                slotProps={{
                    textField: {
                        id: id,
                        size: 'small',
                        error: error,
                        required: required,
                        placeholder: placeholder,
                        fullWidth: fullWidth ?? true,
                        inputProps: { role: 'date-picker' }
                    },
                    popper: { placement: 'bottom-end' }
                }}
            />
        )
    }

    return (
        <LocalizationProvider
            adapterLocale={ptBR}
            dateAdapter={AdapterDateFns}
            localeText={
                ptBRTexts.components.MuiLocalizationProvider.defaultProps
                    .localeText
            }>
            {renderChildren()}
        </LocalizationProvider>
    )
}

export default DateTime
