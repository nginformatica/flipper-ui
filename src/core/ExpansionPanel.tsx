import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import { IProps as IPaper } from './Paper'

interface IProps extends IPaper {
    actions?: React.ReactNode
    classes: {
        content: string
        expandIcon: string
    }
    defaultExpanded?: boolean
    details?: React.ReactNode
    disabled?: boolean
    expandIcon?: React.ReactNode
    expanded?: boolean
    iconPlacement?: 'left' | 'right'
    summary?: React.ReactNode
    summaryStyle?: object
    detailsStyle?: object
    actionsStyle?: object
    onChange?: (event?, expanded?) => void
}

const styles = () => ({
    content: {
        marginLeft: '42px !important'
    },
    expandIcon: {
        left: '8px',
        right: 'unset'
    }
})

const ExpansionPanel: React.SFC<IProps> = ({
    actions,
    classes,
    details,
    expandIcon,
    iconPlacement = 'left',
    margin,
    padding,
    style,
    summary,
    summaryStyle,
    detailsStyle,
    actionsStyle,
    ...otherProps
}) =>
    <MuiExpansionPanel { ...otherProps }>
        {
            summary && (
                <MuiExpansionPanelSummary
                    expandIcon={ expandIcon }
                    classes={ {
                        content: iconPlacement === 'left'
                            ? classes.content
                            : '',
                        expandIcon: iconPlacement === 'left'
                            ? classes.expandIcon
                            : ''
                    } }
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

export default withStyles(styles)(ExpansionPanel)
