import React, { useState } from 'react'
import { mount } from 'cypress/react18'
import { Snackbar, Button } from '../../../src'
import { SnackBarProps } from '../../../src/core/Snackbar'
import { Generators } from '..'
import { SnackbarVariant } from '../types-interfaces-enums'

interface IProps {
    args: SnackBarProps
}

const Component: React.FC<IProps> = props => {
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
                style={{ marginRight: '3em' }}
                variant='contained'
                color='primary'
                onClick={handleClick}>
                Open
            </Button>
            <Snackbar {...props.args} open={open} onClose={handleClose} />
        </>
    )
}

export const SnackbarFactory = (preset: SnackbarVariant) => {
    const generatedProps = Generators.SnackbarPropsGenerator(preset)
    const props = Object.assign({}, generatedProps, {
        'data-cy': 'snackbar-container'
    })

    mount(<Component args={props} />)
}
