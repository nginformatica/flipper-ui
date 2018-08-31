import { Checkbox as MuiCheckbox, FormControlLabel, Switch } from '@material-ui/core'
import React, { ChangeEvent, Component } from 'react'

interface IProps {
    name: string
    label?: string
    style?: object
    color?: 'primary' | 'secondary' | 'default'
    disabled?: boolean
    checked?: boolean
    type?: 'switch' | 'checkbox'
    onChange?: (event: ChangeEvent<HTMLElement>) => void
}

class Checkbox extends Component<IProps> {
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
            <Switch
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
        const { label, style } = this.props

        return label
            ? (
                <FormControlLabel
                    style={ style }
                    label={ label }
                    control={ this.renderControl() }
                />
            )
            : this.renderControl()
    }
}

export default Checkbox
