import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import React, { ReactNode, FC, MouseEvent } from 'react'
import IconButton from './IconButton'
import { IProps as IPaper } from './Paper'
import { TextFieldWrapper as ExpansionPanelHeaderWrapper } from './TextField'
import { Help as ContactSupportIcon } from '@material-ui/icons'
import styled from 'styled-components'

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
    helperIcon?: React.ReactNode
    onHelperClick?: () => void
    onChange?: (event?, expanded?) => void
}

const Helper = styled.div`
    width: 32px;
    height: 38px;
`

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
    onHelperClick,
    helperIcon,
    ...otherProps
}) => {

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (onHelperClick) {
            event.stopPropagation()
            onHelperClick()
        }
    }

    return (
        <MuiExpansionPanel
            { ...otherProps }
            style={ { margin, padding, ...style } }>
            {
                summary && (
                    <MuiExpansionPanelSummary
                        expandIcon={ expandIcon }
                        style={ summaryStyle }>
                        <ExpansionPanelHeaderWrapper>
                            {
                                onHelperClick && (
                                    <Helper>
                                        <IconButton
                                            padding='6px 2px'
                                            onClick={ handleClick }>
                                            {
                                                helperIcon || (
                                                    <ContactSupportIcon
                                                        color='primary'
                                                    />
                                                )
                                            }
                                        </IconButton>
                                    </Helper>
                                )
                            }
                            { summary }
                        </ExpansionPanelHeaderWrapper>
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
        </MuiExpansionPanel >
    )
}

export default ExpansionPanel
