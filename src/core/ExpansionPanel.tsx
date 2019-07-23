import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import React, { ReactNode, FC } from 'react'
import { IProps as IPaper } from './Paper'

interface IProps extends IPaper {
    actions?: ReactNode
    defaultExpanded?: boolean
    details?: ReactNode
    disabled?: boolean
    expandIcon?: ReactNode
    expanded?: boolean
    summary?: ReactNode
    summaryStyle?: object
    detailsStyle?: object
    actionsStyle?: object
    onChange?: (event?, expanded?) => void
}

const ExpansionPanel: FC<IProps> = ({
    actions,
    details,
    expandIcon,
    margin,
    padding,
    style,
    summary,
    summaryStyle,
    detailsStyle,
    actionsStyle,
    ...otherProps
}) =>
    <MuiExpansionPanel
        { ...otherProps }
        style={ { margin, padding, ...style } }>
        {
            summary && (
                <MuiExpansionPanelSummary
                    expandIcon={ expandIcon }
                    style={ summaryStyle }>
                    { summary }
                </MuiExpansionPanelSummary>
            )
        }
        {
            details && (
                <MuiExpansionPanelDetails style={ detailsStyle }>
                    { details }
                </MuiExpansionPanelDetails>
            )
        }
        {
            actions && (
                <MuiExpansionPanelActions style={ actionsStyle }>
                    { actions }
                </MuiExpansionPanelActions>
            )
        }
    </MuiExpansionPanel>

export default ExpansionPanel
