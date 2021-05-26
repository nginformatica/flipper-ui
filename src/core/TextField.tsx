import { TextField as MuiTextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React,{
    ChangeEvent,
    KeyboardEvent,
    FC,
    FocusEvent,
    ReactNode,
    MouseEvent
} from 'react'
import { IDefault } from './Advertise'
import { Help as ContactSupportIcon } from '@material-ui/icons'
import IconButton from './IconButton'
import styled from 'styled-components'

export interface IProps extends IDefault {
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
    onHelperClick?: () => void
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void
    onKeyUp?: (event: KeyboardEvent) => void
    onKeyDown?: (event: KeyboardEvent) => void
}

type TProps = IProps

interface IHelperProps extends Pick<TProps, 'helperIcon'> {
    onHelperClick: (event: MouseEvent<HTMLButtonElement>) => void
}

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

export const HelperBox = (props: IHelperProps) => (
    <Helper>
        <IconButton
            padding='6px 2px'
            onClick={ props.onHelperClick }>
            { props.helperIcon || <ContactSupportIcon color='primary' /> }
        </IconButton>
    </Helper>
)

const TextField: FC<TProps> = ({
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
    ...otherProps
}) => {
    const classes = useStyles()

    const handleClick = () => {
        if (onHelperClick) {
            onHelperClick()
        }
    }

    return (
        <TextFieldWrapper>
            <MuiTextField
                fullWidth={ fullWidth }
                autoComplete={ autoComplete }
                error={ error }
                variant={ variant as 'outlined' }
                style={ {
                    margin,
                    padding,
                    ...style
                } }
                InputLabelProps={ {
                    classes: {
                        outlined: variant === 'outlined' ? classes.outlinedLabel : ''
                    },
                    ...InputLabelProps
                } }
                InputProps={ {
                    classes: {
                        input: variant === 'outlined' ? classes.outlinedInput : '',
                        multiline:
                            variant === 'outlined' ? classes.outlinedMultiline : ''
                    },
                    ...InputProps
                } }
                SelectProps={ {
                    classes: {
                        iconOutlined: classes.iconOutlined
                    },
                    ...SelectProps
                } }
                { ...otherProps }
            />
            {
                onHelperClick && (
                    <HelperBox
                        helperIcon
                        onHelperClick={ handleClick }
                    />
                )
            }
        </TextFieldWrapper>
    )
}

export default TextField
