import {
    InputAdornment,
    TextField as MuiTextField,
    IconButton as MuiButton
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, {
    ChangeEvent,
    KeyboardEvent,
    FC,
    FocusEvent,
    ReactNode,
    MouseEvent
} from 'react'
import { DefaultProps } from './types'
import { Clear, Help as ContactSupportIcon } from '@material-ui/icons'
import IconButton from './IconButton'
import styled from 'styled-components'

export interface TextFieldProps extends DefaultProps {
    autoComplete?: string
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
    inputRef?: React.Ref<HTMLInputElement>
    inputProps?: object
    InputProps?: object
    InputLabelProps?: object
    SelectProps?: object
    rows?: string | number
    rowsMax?: string | number
    helperText?: ReactNode
    helperIcon?: ReactNode
    hasClear?: boolean
    onClear?: () => void
    onHelperClick?: () => void
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    onPaste?: (event: React.ClipboardEvent<HTMLInputElement>) => void
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void
    onKeyUp?: (event: KeyboardEvent) => void
    onKeyDown?: (event: KeyboardEvent) => void
}

interface IHelperProps extends Pick<TextFieldProps, 'helperIcon'> {
    onHelperClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const Helper = styled.div`
    width: 42px;
    height: 38px;
`

export const TextFieldWrapper = styled.div`
    display: flex;
    flex-direction: rows;
    width: 100%;
    align-items: center;
    button {
        display: none;
    }
    :hover button {
        display: flex;
    }
`

export const StaticTextFieldWrapper = styled.div`
    display: flex;
    flex-direction: rows;
    width: 100%;
    align-items: center;
`

export const useStyles = makeStyles({
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

export const HelperBox = (props: IHelperProps) => (
    <Helper>
        <IconButton padding='6px 2px' onClick={props.onHelperClick}>
            {props.helperIcon || <ContactSupportIcon color='primary' />}
        </IconButton>
    </Helper>
)

const renderEndAdornment = (onClear?: () => void) => (
    <InputAdornment position='end'>
        <MuiButton onClick={onClear} size='small'>
            <Clear style={{ fontSize: '15px' }} />
        </MuiButton>
    </InputAdornment>
)

const TextField: FC<TextFieldProps> = ({
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
    ...otherProps
}) => {
    const clearStyle = makeStyles({
        iconOutlined: {
            position: 'relative',
            right: '2px',
            marginLeft: '-20px'
        }
    })

    const hasValue = !!otherProps.value

    const endAdornment =
        hasValue && hasClear
            ? { endAdornment: renderEndAdornment(onClear) }
            : {}

    const classes = useStyles()
    const clearClass = clearStyle()

    const handleClick = () => {
        if (onHelperClick) {
            onHelperClick()
        }
    }

    const Wrapper = hasClear ? StaticTextFieldWrapper : TextFieldWrapper

    return (
        <Wrapper>
            <MuiTextField
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
                    classes: {
                        input:
                            variant === 'outlined' ? classes.outlinedInput : '',
                        multiline:
                            variant === 'outlined'
                                ? classes.outlinedMultiline
                                : ''
                    },
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
                {...otherProps}
            />
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
