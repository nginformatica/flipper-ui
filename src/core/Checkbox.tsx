import {
    Checkbox as MuiCheckbox,
    FormControlLabel as MuiFormControlLabel,
    Switch as MuiSwitch
} from '@material-ui/core'
import React, { ChangeEvent, Component, ReactNode } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    name: string
    label?: ReactNode
    color?: 'primary' | 'secondary' | 'default'
    className?: string
    disabled?: boolean
    checked?: boolean
    type?: 'switch' | 'checkbox'
    onChange?: (event: ChangeEvent<HTMLElement>) => void
}

class Checkbox extends Component<IProps, {}> {
    public static defaultProps = {
        type: 'checkbox'
    }

    public renderCheckbox() {
        return (
            <MuiCheckbox
                checked={ this.props.checked }
                value={ this.props.name }
                color={ this.props.color }
                disabled={ this.props.disabled }
                onChange={ this.props.onChange }
            />
        )
    }

    public renderSwitch() {
        return (
            <MuiSwitch
                checked={ this.props.checked }
                value={ this.props.name }
                color={ this.props.color }
                disabled={ this.props.disabled }
                onChange={ this.props.onChange }
            />
        )
    }

    public renderControl() {
        return this.props.type === 'checkbox'
            ? this.renderCheckbox()
            : this.renderSwitch()
    }

    public render() {
        const { label, style = {}, padding, margin, className } = this.props

        return label
            ? (
                <MuiFormControlLabel
                    style={ { padding, margin, ...style } }
                    className={ className }
                    label={ label }
                    control={ this.renderControl() }
                />
            )
            : this.renderControl()
    }
}

export default Checkbox
