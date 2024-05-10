import React from 'react'
import type {
    ChangeEvent,
    ClipboardEvent,
    KeyboardEvent,
    FocusEvent,
    ReactNode,
    MouseEvent,
    Ref,
    HTMLAttributes
} from 'react'
import {
    InputAdornment,
    TextField as MuiTextField,
    IconButton as MuiButton,
    ListItem
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
    Clear,
    Help as ContactSupportIcon,
    Edit,
    Save
} from '@mui/icons-material'
import { when, is, pipe, split, map, zipObj, reject, propEq } from 'ramda'
import type { DefaultProps } from '../../types'
import type {
    InputBaseComponentProps,
    TextFieldProps as MuiTextFieldProps
} from '@material-ui/core'
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

export interface TextFieldProps
    extends DefaultProps,
        Omit<MuiTextFieldProps, 'margin' | 'variant'> {
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
    variant?: 'standard' | 'outlined' | 'filled'
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

interface IHelperProps extends Pick<TextFieldProps, 'helperIcon'> {
    onHelperClick: (event: MouseEvent<HTMLButtonElement>) => void
}

interface IEditProps extends Pick<TextFieldProps, 'showEdit' | 'style'> {
    editing: boolean
    onEditClick: (event: MouseEvent<HTMLButtonElement>) => void
    onSaveClick: (event: MouseEvent<HTMLButtonElement>) => void
    editButtonProps?: Partial<Omit<HTMLAttributes<HTMLButtonElement>, 'color'>>
    saveButtonProps?: Partial<Omit<HTMLAttributes<HTMLButtonElement>, 'color'>>
}

export const useStyles = makeStyles({
    listOptions: {
        outline: 'none',
        cursor: 'pointer',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans- serif',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)'
        }
    },
    input: {
        fontSize: '14px',
        padding: '10px',
        height: 'auto'
    },
    outlinedInput: {
        fontSize: '14px',
        padding: '10px',
        height: 'auto'
    },
    outlinedLabel: {
        fontSize: '14px',
        transform: 'translate(14px, 13px) scale(1)'
    },
    outlinedMultiline: {
        padding: '0px'
    },
    iconOutlined: {
        right: '2px'
    }
})

export const coerceComboOptions: (input: string) => IOption[] = when(
    is(String),
    pipe<string, string[], object, IOption[]>(
        split(';'),
        map(pipe(split('='), zipObj(['value', 'label']))),
        reject(propEq('value', ''))
    )
)

export const toLispCase = (name: string) =>
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
    options: TextFieldProps['options'],
    classes: Record<string, string>
) => {
    const comboOptions =
        typeof options === 'string' ? coerceComboOptions(options) : options

    return (
        options &&
        comboOptions?.map((option: TextFieldProps) => (
            <ListItem
                id={toLispCase(`option-${option.value}`)}
                key={option.value}
                disabled={option.disabled}
                value={option.value}
                classes={{ root: classes.listOptions }}>
                {option.label}
            </ListItem>
        ))
    )
}

export const EditBox = (props: IEditProps) => {
    return (
        <div role='edit-box'>
            {props.editing ? (
                <IconButton
                    {...props.saveButtonProps}
                    padding='6px 2px'
                    onClick={props.onSaveClick}>
                    {<Save fontSize='small' />}
                </IconButton>
            ) : (
                <IconButton
                    {...props.editButtonProps}
                    padding='6px 2px'
                    onClick={props.onEditClick}>
                    {<Edit fontSize='small' />}
                </IconButton>
            )}
        </div>
    )
}

const renderEndAdornment = (onClear?: () => void) => (
    <InputAdornment position='end'>
        <MuiButton role='clear-button' size='small' onClick={onClear}>
            <Clear style={{ fontSize: '15px' }} />
        </MuiButton>
    </InputAdornment>
)

export const TextField = ({
    options,
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
}: TextFieldProps) => {
    const clearStyle = makeStyles({
        iconOutlined: {
            position: 'relative',
            right: '2px',
            marginLeft: '-20px'
        }
    })

    const classes = useStyles()
    const clearClass = clearStyle()

    const hasValue = !!otherProps.value

    const endAdornment =
        hasValue && hasClear
            ? { endAdornment: renderEndAdornment(onClear) }
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
                select={!!options?.length}
                fullWidth={fullWidth}
                autoComplete={autoComplete}
                error={error}
                variant={variant as 'outlined'}
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
                    // @ts-expect-error It needs the data-testid for the tests
                    'data-testid': 'text-field',
                    classes: {
                        input:
                            variant === 'outlined' ? classes.outlinedInput : '',
                        multiline:
                            variant === 'outlined'
                                ? classes.outlinedMultiline
                                : ''
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
                    classes: {
                        iconOutlined: hasClear
                            ? clearClass.iconOutlined
                            : classes.iconOutlined
                    },
                    ...endAdornment,
                    ...SelectProps
                }}
                characters={characters?.toString()}
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
