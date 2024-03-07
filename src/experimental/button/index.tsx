import React from 'react'
import type { ButtonProps } from '@/core/inputs/button'
import { ButtonAdd } from './styles'
import { NoteAdd as IconAdd } from '@/icons'

export interface Props extends ButtonProps {
    label?: string
    name: string
    margin?: string | number
    padding?: string | number
    onClick?(): void
}

export const AddButton = (props: Props) => (
    <ButtonAdd
        {...props}
        variant='dashed'
        color='primary'
        id={'add-' + props.name}
        name={'add-' + props.name}
        padding={props.padding}
        margin={props.margin || '12px 0 24px'}
        onClick={props.onClick}>
        <IconAdd />
        {props.label}
    </ButtonAdd>
)

export default AddButton
