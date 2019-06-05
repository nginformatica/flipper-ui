import React, { Component } from 'react'
import TextField, { IProps } from './TextField'
import NumberFormat from 'react-number-format'

interface IMaskProps {
    mask?: string
    type?: 'text' | 'tel' | 'password'
    decimalSeparator?: string
    format?: string
    decimalScale?: number
    thousandSeparator?: boolean | string
    fixedDecimalScale?: boolean
}

class MaskField extends Component<IProps & IMaskProps> {
    public render() {
        return (
            // Although react-number-format allow use of additional props,
            // shows problem with some props like have been do this
            // actually on flipper-ui. (e.g. errors treatment)
            // @ts-ignore
            <NumberFormat
                { ...this.props }
                customInput={ TextField }>
            </NumberFormat>
        )
    }
}

export default MaskField
