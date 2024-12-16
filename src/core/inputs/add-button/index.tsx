import React from 'react'
import type { IButtonProps } from '@/core/inputs/button'
import { IconNoteAdd } from '@/icons/mui'
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
        <IconNoteAdd />
        {props.label}
    </ButtonAdd>
)

export default AddButton
