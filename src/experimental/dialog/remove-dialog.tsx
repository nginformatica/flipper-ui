import { toUpper } from 'ramda'
import React from 'react'
import DialogV2 from './dialog'

export interface IProps {
    open: boolean
    title?: string
    text: string
    disableBackdropClick?: boolean
    labels?: {
        cancel?: string
        confirm?: string
    }
    onCancel(): void
    onConfirm(): void
}

const RemoveDialog = (props: IProps) => {
    const {
        open,
        onCancel,
        onConfirm,
        title,
        text,
        labels,
        disableBackdropClick,
        ...otherProps
    } = props

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
            onClose={disableBackdropClick ? undefined : onCancel}
        />
    )
}

export default RemoveDialog
