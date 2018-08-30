import { Radio as MuiRadio } from '@material-ui/core'
import React from 'react'

interface IProps {
    checked?: boolean
    color?: 'primary' | 'secondary' | 'default'
    value?: string
    style?: object
    onChange?: (event) => void
}

const Radio = (props: IProps) => <MuiRadio { ...props } />

export default Radio
