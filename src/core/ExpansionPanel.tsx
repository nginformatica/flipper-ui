import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import React, { ReactNode, FC, MouseEvent } from 'react'
import { IProps as IPaper } from './Paper'
import {
    HelperBox,
    TextFieldWrapper as ExpansionPanelHeaderWrapper
} from './TextField'

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
    helperButtonPosition?: 'left' | 'right'
    onHelperClick?: () => void
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
    onHelperClick,
    helperIcon,
    helperButtonPosition = 'right',
    ...otherProps
}) => {

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (onHelperClick) {
            event.stopPropagation()
            onHelperClick()
        }
    }

    const renderHelper = (
        <>
            {
                onHelperClick && (
                    <HelperBox
                        helperIcon
                        onHelperClick={ handleClick }
                    />
                )
            }
        </>
    )

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
                            { helperButtonPosition === 'left' && renderHelper }
                            { summary }
                            { helperButtonPosition === 'right' && renderHelper }
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
