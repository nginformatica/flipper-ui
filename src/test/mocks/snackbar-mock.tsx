import React, { useState } from 'react'
import { Close as IconClose } from '@mui/icons-material'
import type { SnackBarProps } from '@/core/feedback/snackbar'
import SnackBar from '@/core/feedback/snackbar'
import Button from '@/core/inputs/button'
import IconButton from '@/core/inputs/icon-button'

interface IProps {
    withAction?: boolean
    snackProps?: Partial<SnackBarProps>
}

const Action = ({
    snackProps,
    handleClose
}: {
    snackProps: IProps['snackProps']
    handleClose: () => void
}) => (
    <IconButton
        key='close'
        role='close-icon-button'
        aria-label='Close'
        color='inherit'
        onClick={snackProps?.onClose || handleClose}>
        <IconClose />
    </IconButton>
)

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
            <SnackBar
                message={snackProps?.message}
                autoHide={snackProps?.autoHide}
                action={
                    withAction ? (
                        <Action
                            snackProps={snackProps}
                            handleClose={handleClose}
                        />
                    ) : undefined
                }
                open={open}
                onClick={snackProps?.onClick}
                onClose={snackProps?.onClose || handleClose}
            />
        </>
    )
}

export default Default
