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
import { Clear, Help as ContactSupportIcon } from '@mui/icons-material'
import MuiInputAdornment from '@mui/material/InputAdornment'
import MuiMenuItem from '@mui/material/MenuItem'
import MuiTextField from '@mui/material/TextField'
import { makeStyles } from '@mui/styles'
import { when, is, pipe, split, map, zipObj, reject, propEq } from 'ramda'
import type { DefaultProps } from '../../types'
import type { InputBaseComponentProps } from '@mui/material/InputBase'
import type { TextFieldProps } from '@mui/material/TextField'
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

const useStyles = makeStyles({
    input: {
        fontSize: '14px',
        padding: '10px',
        height: 'auto'
    },
    outlinedLabel: {
        fontSize: '14px'
    },
    selected: {
        backgroundColor: 'rgba(0, 0, 0, 0.08) !important'
    },
    listOptions: {
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.06) !important'
        }
    }
})

const coerceComboOptions: (input: string) => IOption[] = when(
    is(String),
    pipe<string, string[], object, IOption[]>(
        split(';'),
        map(pipe(split('='), zipObj(['value', 'label']))),
        reject(propEq('value', ''))
    )
)

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
            {props.helperIcon || (
                <ContactSupportIcon htmlColor={primary.main} />
            )}
        </IconButton>
    </Helper>
)

/* Jest-ignore-start ignore next */
export const renderOptions = (
    options: ITextFieldProps['options'],
    classes: Record<string, string>
) => {
    const comboOptions =
        typeof options === 'string' ? coerceComboOptions(options) : options

    return comboOptions?.map((option: ITextFieldProps) => (
        <MuiMenuItem
            id={toLispCase(`option-${option.value}`)}
            key={option.value}
            disabled={option.disabled}
            value={option.value}
            classes={{ root: classes.listOptions, selected: classes.selected }}>
            {option.label}
        </MuiMenuItem>
    ))
}

const renderEndAdornment = (disabled?: boolean, onClear?: () => void) => (
    <MuiInputAdornment position='end'>
        <IconButton
            role='clear-button'
            disabled={disabled || false}
            size='small'
            margin='0 16px 0 0'
            onClick={onClear}>
            <Clear fontSize='inherit' />
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
    const classes = useStyles()

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
                size={size || 'small'}
                select={!!options?.length}
                fullWidth={fullWidth}
                autoComplete={autoComplete}
                error={error}
                variant={variant}
                style={{
                    margin,
                    padding,
                    ...style
                }}
                InputLabelProps={{
                    classes: {
                        outlined:
                            variant === 'outlined' ? classes.outlinedLabel : ''
                    },
                    ...InputLabelProps
                }}
                InputProps={{
                    classes: {
                        input: variant === 'outlined' ? classes.input : ''
                    },
                    endAdornment: characters && (
                        <CharactersCount>
                            {otherProps.value?.toString().length}/
                            {otherProps.inputProps?.maxLength}
                        </CharactersCount>
                    ),
                    ...InputProps
                }}
                SelectProps={{
                    ...endAdornment,
                    ...SelectProps
                }}
                onChange={handleInputChange}
                {...otherProps}>
                {options ? renderOptions(options, classes) : children}
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
