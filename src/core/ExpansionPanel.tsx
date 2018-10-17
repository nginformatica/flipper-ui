import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import React from 'react'
import { IProps as IPaper } from './Paper'

interface IProps extends IPaper {
    expanded?: boolean
    disabled?: boolean
    actions?: React.ReactNode
    details?: React.ReactNode
    summary?: React.ReactNode
    expandIcon?: React.ReactNode
    onChange?: (event?, expanded?) => void
}

const ExpansionPanel: React.SFC<IProps> = ({
    margin,
    padding,
    style,
    expandIcon,
    actions,
    details,
    summary,
    ...otherProps
}) =>
    <MuiExpansionPanel { ...otherProps }>
        {
            summary && (
                <MuiExpansionPanelSummary expandIcon={ expandIcon }>
                    { summary }
                </MuiExpansionPanelSummary>
            )
        }
        {
            details && (
                <MuiExpansionPanelDetails>
                    { details }
                </MuiExpansionPanelDetails>
            )
        }
        {
            actions && (
                <MuiExpansionPanelActions>
                    { actions }
                </MuiExpansionPanelActions>
            )
        }
    </MuiExpansionPanel>

export default ExpansionPanel
