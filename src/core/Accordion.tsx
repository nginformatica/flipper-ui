import { ExpansionPanel } from '@material-ui/core'
import React from 'react'
import { IProps as IPaper } from './Paper'

interface IProps extends IPaper {
    expanded?: boolean
    disabled?: boolean
    children?: React.ReactNode
    onChange?: (event?, expanded?) => void
}

const Accordion: React.SFC<IProps> = ({ children, ...otherProps }) =>
    <ExpansionPanel { ...otherProps }>
        { children }
    </ExpansionPanel>

export default Accordion
