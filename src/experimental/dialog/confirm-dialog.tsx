import React from 'react'
import DialogV2 from './dialog'

export interface IProps {
    open: boolean
    title: string
    text: string
    disableBackdropClick?: boolean
    labels?: {
        cancel?: string
        confirm?: string
    }
    onCancel(): void
    onConfirm(): void
}

const ConfirmDialog = (props: IProps) => {
    const {
        open,
        title,
        text,
        labels,
        onCancel,
        onConfirm,
        disableBackdropClick,
        ...otherProps
    } = props

    return (
        <DialogV2
            {...otherProps}
            open={open}
            title={title}
            text={text}
            primaryButtonAction={onConfirm}
            primaryButtonText={labels?.confirm || 'Sim'}
            secondaryButtonText={labels?.cancel || 'Voltar'}
            primaryButtonColor='primary'
            secondaryButtonAction={onCancel}
            onClose={disableBackdropClick ? undefined : onCancel}
        />
    )
}

export default ConfirmDialog
