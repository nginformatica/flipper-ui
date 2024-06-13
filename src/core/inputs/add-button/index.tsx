import React from 'react'
import { NoteAdd as IconAdd } from '@mui/icons-material'
import type { IButtonProps } from '@/core/inputs/button'
import { ButtonAdd } from './styles'

export interface Props extends IButtonProps {
    label?: string
    name: string
    margin?: string | number
    padding?: string | number
    disabled?: boolean
    fullWidth?: boolean
    onClick?(): void
}

const AddButton = (props: Props) => (
    <ButtonAdd
        {...props}
        dashed
        color='primary'
        id={'id-add-' + props.name}
        name={'add-' + props.name}
        padding={props.padding}
        disabled={!!props.disabled}
        margin={props.margin || '12px 0 24px'}
        fullWidth={props.fullWidth}
        onClick={props.onClick}>
        <IconAdd />
        {props.label}
    </ButtonAdd>
)

export default AddButton
