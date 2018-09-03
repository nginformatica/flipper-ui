import { Radio as MuiRadio } from '@material-ui/core'
import React,  { ChangeEvent } from 'react'

interface IProps {
    checked?: boolean
    color?: 'primary' | 'secondary' | 'default'
    value?: string
    style?: object
    onChange?: (event: ChangeEvent<HTMLElement>) => void
}

const Radio = (props: IProps) => <MuiRadio { ...props } />

export default Radio
