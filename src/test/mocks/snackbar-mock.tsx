import React, { useState } from 'react'
import { IconButton as MuiIconButton } from '@material-ui/core'
import type { SnackBarProps } from '@/core/feedback/snackbar'
import { Close as IconClose } from '@/icons'
import { Button, Snackbar } from '@/index'

interface IProps {
    withAction?: boolean
    snackProps?: Partial<SnackBarProps>
}

const Default = ({ snackProps, withAction }: IProps) => {
    const [btnState, setBtnState] = useState(false)
    const [open, setOpen] = useState(false)

    function handleClick() {
        setOpen(!open)
        setBtnState(true)
    }

    function handleClose() {
        setOpen(!open)
        setBtnState(false)
    }

    const Action = () => (
        <MuiIconButton
            key='close'
            role='close-icon-button'
            aria-label='Close'
            color='inherit'
            onClick={snackProps?.onClose || handleClose}>
            <IconClose />
        </MuiIconButton>
    )

    return (
        <>
            <Button
                disabled={btnState}
                data-testid='snackbar-button'
                style={{ marginRight: '3em' }}
                variant='contained'
                color='primary'
                onClick={handleClick}>
                Open
            </Button>
            <Snackbar
                message={snackProps?.message}
                autoHide={snackProps?.autoHide}
                action={withAction ? <Action /> : undefined}
                open={open}
                onClick={snackProps?.onClick}
                onClose={snackProps?.onClose || handleClose}
            />
        </>
    )
}

export default Default
