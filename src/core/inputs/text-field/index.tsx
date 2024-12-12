import React from 'react'
import type {
    ChangeEvent,
    ClipboardEvent,
    KeyboardEvent,
    FocusEvent,
    ReactNode,
    MouseEvent,
    Ref
} from 'react'
import MuiInputAdornment from '@mui/material/InputAdornment'
import MuiMenuItem from '@mui/material/MenuItem'
import MuiTextField from '@mui/material/TextField'
import { pipe, split, map, reject } from 'ramda'
import type { DefaultProps } from '../../types'
import type { InputBaseComponentProps } from '@mui/material/InputBase'
import type { TextFieldProps } from '@mui/material/TextField'
import { IconClose, IconHelp } from '@/icons/mui'
import IconButton from '../icon-button'
import {
    CharactersCount,
    Helper,
    StaticTextFieldWrapper,
    TextFieldWrapper
} from './styles'
import { theme } from '@/theme'

const { primary } = theme.colors

export interface IOption {
    label: string
    name?: string
    disabled?: boolean
    value: string | number
}

export interface ITextFieldProps
    extends DefaultProps,
        Omit<TextFieldProps, 'margin'> {
    autoComplete?: string
    options?: IOption[] | string
    autoFocus?: boolean
    defaultValue?: string | number
    disabled?: boolean
    error?: boolean
    fullWidth?: boolean
    id?: string
    label?: string
    placeholder?: string
    multiline?: boolean
    name?: string
    required?: boolean
    select?: boolean
    type?: string
    value?: string | number
    variant?: 'filled' | 'outlined' | 'standard'
    inputRef?: Ref<HTMLInputElement>
    inputProps?: InputBaseComponentProps
    InputProps?: object
    InputLabelProps?: object
    SelectProps?: object
    rows?: string | number
    rowsMax?: string | number
    helperText?: ReactNode
    helperIcon?: ReactNode
    showEdit?: boolean
    hasClear?: boolean
    characters?: boolean
    onClear?: () => void
    onHelperClick?: () => void
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    onPaste?: (event: ClipboardEvent<HTMLInputElement>) => void
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void
    onKeyUp?: (event: KeyboardEvent) => void
    onKeyDown?: (event: KeyboardEvent) => void
}

interface IHelperProps {
    helperIcon?: ReactNode
    onHelperClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const coerceComboOptions = (input: string): IOption[] => {
    return pipe(
        split(';'),
        map(pipe(split('='), ([value, label]) => ({ value, label }))),
        reject((option: IOption) => option.value === '')
    )(input)
}

const toLispCase = (name: string) =>
    name
        .replace(
            /([a-z])([A-Z])/g,
            (_, first: string, second: string) => first + '-' + second
        )
        .toLowerCase()

export const HelperBox = (props: IHelperProps) => (
    <Helper role='helper-box'>
        <IconButton padding='6px 2px' onClick={props.onHelperClick}>
            {props.helperIcon || <IconHelp htmlColor={primary.main} />}
        </IconButton>
    </Helper>
)

/* Jest-ignore-start ignore next */
export const renderOptions = (options: ITextFieldProps['options']) => {
    const comboOptions =
        typeof options === 'string' ? coerceComboOptions(options) : options

    return comboOptions?.map((option: ITextFieldProps) => (
        <MuiMenuItem
            id={toLispCase(`option-${option.value}`)}
            key={option.value}
            value={option.value}
            disabled={option.disabled}>
            {option.label}
        </MuiMenuItem>
    ))
}

const renderEndAdornment = (disabled?: boolean, onClear?: () => void) => (
    <MuiInputAdornment position='end'>
        <IconButton
            size='small'
            role='clear-button'
            margin='0 16px 0 0'
            disabled={disabled || false}
            onClick={onClear}>
            <IconClose fontSize='inherit' />
        </IconButton>
    </MuiInputAdornment>
)

const TextField = ({
    options,
    size,
    margin,
    padding,
    style = {},
    error,
    variant = 'outlined',
    InputLabelProps = {},
    InputProps = {},
    SelectProps = {},
    autoComplete = 'off',
    onHelperClick,
    helperIcon,
    fullWidth,
    hasClear,
    onClear,
    onChange,
    characters,
    children,
    ...otherProps
}: ITextFieldProps) => {
    const hasValue = !!otherProps.value

    const endAdornment =
        hasValue && hasClear
            ? { endAdornment: renderEndAdornment(otherProps.disabled, onClear) }
            : {}

    const handleClick = () => {
        if (onHelperClick) {
            onHelperClick()
        }
    }

    const Wrapper = hasClear ? StaticTextFieldWrapper : TextFieldWrapper

    const emojiRegex =
        /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            const inputValue = event.target.value

            if (emojiRegex.test(inputValue)) {
                const newValue = inputValue.replace(emojiRegex, '')

                event.target.value = newValue

                return onChange(event)
            }

            return onChange(event)
        }
    }

    return (
        <Wrapper>
            <MuiTextField
                title=''
                error={error}
                variant={variant}
                size={size || 'small'}
                fullWidth={fullWidth}
                select={!!options?.length}
                autoComplete={autoComplete}
                slotProps={{
                    input: {
                        endAdornment: characters && (
                            <CharactersCount>
                                {otherProps.value?.toString().length}/
                                {otherProps.inputProps?.maxLength}
                            </CharactersCount>
                        ),
                        sx: {
                            fontSize: '14px'
                        },
                        ...InputProps
                    },
                    inputLabel: {
                        sx: {
                            fontSize: '14px'
                        },
                        ...InputLabelProps
                    },
                    select: {
                        ...endAdornment,
                        ...SelectProps
                    }
                }}
                style={{
                    margin,
                    padding,
                    ...style
                }}
                onChange={handleInputChange}
                {...otherProps}>
                {options ? renderOptions(options) : children}
            </MuiTextField>
            {onHelperClick && (
                <HelperBox
                    helperIcon={helperIcon}
                    onHelperClick={handleClick}
                />
            )}
        </Wrapper>
    )
}

export default TextField
