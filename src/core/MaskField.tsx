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
    customInput?: typeof TextField
}

class MaskField extends Component<IProps & IMaskProps> {
    public render() {
        const { customInput, ...otherProps } = this.props

        return (
            // Although react-number-format allow use of additional props,
            // shows problem with some props like have been do this
            // actually on flipper-ui. (e.g. errors treatment)
            // @ts-ignore
            <NumberFormat
                { ...otherProps }
                customInput={ customInput || TextField }>
            </NumberFormat>
        )
    }
}

export default MaskField
