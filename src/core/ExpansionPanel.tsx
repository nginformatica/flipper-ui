import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import { withStyles } from '@material-ui/core/styles'
import React, { ReactNode } from 'react'
import { IProps as IPaper } from './Paper'

interface IProps extends IPaper {
    actions?: ReactNode
    classes: {
        content: string
        expandIcon: string
    }
    defaultExpanded?: boolean
    details?: ReactNode
    disabled?: boolean
    expandIcon?: ReactNode
    expanded?: boolean
    iconPosition?: 'left' | 'right'
    summary?: ReactNode
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
    iconPosition = 'left',
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
                    classes={ {
                        content: iconPosition === 'left'
                            ? classes.content
                            : '',
                        expandIcon: iconPosition === 'left'
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
