import { toUpper } from 'ramda'
import React from 'react'
import DialogV2 from './Dialog'

export interface IProps {
    open: boolean
    title?: string
    text: string
    labels?: {
        cancel?: string
        confirm?: string
    }
    onCancel(): void
    onConfirm(): void
}

const RemoveDialog = (props: IProps) => {
    const { open, onCancel, onConfirm, title, text, labels, ...otherProps } =
        props

    return (
        <DialogV2
            {...otherProps}
            open={open}
            title={toUpper(title || 'EXCLUIR')}
            text={text}
            primaryButtonAction={onConfirm}
            primaryButtonText={labels?.confirm || 'Excluir'}
            primaryButtonName='confirm-delete'
            primaryButtonColor='secondary'
            secondaryButtonAction={onCancel}
            secondaryButtonName='cancel-delete'
            secondaryButtonText={labels?.cancel || 'Cancelar'}
            onClose={onCancel}
        />
    )
}

export default RemoveDialog
